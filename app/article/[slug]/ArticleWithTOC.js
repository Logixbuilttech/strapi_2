"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// --- Add this CSS to your globals.css ---
// html { scroll-behavior: smooth; }
// [id] { scroll-margin-top: 120px; } // Match your sticky header height

function useScrollSpy(ids, offset = 120) {
  const [activeId, setActiveId] = useState();
  useEffect(() => {
    if (!ids.length) return;
    const handleObserve = (entries) => {
      const intersecting = entries
        .filter(entry => entry.isIntersecting)
        .map(entry => entry.target.id);
      console.log('Intersecting IDs:', intersecting);
      if (intersecting.length > 0) {
        const firstVisible = ids.find(id => intersecting.includes(id));
        console.log('Setting activeId to:', firstVisible);
        setActiveId(firstVisible);
      } else if (entries.length > 0) {
        console.log('No intersecting headings, setting to first id:', ids[0]);
        setActiveId(ids[0]);
      }
    };
    const observer = new window.IntersectionObserver(handleObserve, {
      rootMargin: `-${offset}px 0px 0px 0px`,
      threshold: 0.1, // 10% of heading must be visible
    });
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids, offset]);
  return activeId;
}
// Utility to extract plain text from React children
function getTextFromChildren(children) {
  if (typeof children === 'string') return children;
  if (Array.isArray(children)) return children.map(getTextFromChildren).join('');
  if (children && typeof children === 'object' && children.props) return getTextFromChildren(children.props.children);
  return '';
}

export default function ArticleWithTOC({ article }) {
  const {
    HeroText,
    Title,
    Description,
    Content,
    Author,
    PublishedTime,
    Category,
    CoverImage,
  } = article;

  const coverUrl = CoverImage?.url
    ? process.env.NEXT_PUBLIC_STRAPI_API_URL + CoverImage.url
    : null;

  // Remove first image markdown if it matches the cover image
  let filteredContent = Content;
  if (coverUrl && Content) {
    const coverFileName = CoverImage.name;
    filteredContent = Content.replace(
      new RegExp(`!\\[.*\\]\\([^\\)]*${coverFileName}[^\\)]*\\)\\s*`, "i"),
      ""
    );
  }

  // --- TOC logic ---
  const [headings, setHeadings] = useState([]);
  const contentRef = useRef(null);

  // Parse headings from markdown
  useEffect(() => {
    const regex = /^##\s+(.+)$/gm;
    const found = [];
    let match;
    while ((match = regex.exec(filteredContent))) {
      const text = match[1].trim();
      found.push({ text, id: slugify(text) });
    }
    setHeadings(found);
  }, [filteredContent]);

  const headingIds = headings.map(h => h.id);
  const activeId = useScrollSpy(headingIds, 120);

  // Custom renderer for h2 to add id
  const components = {
    h2: ({ node, children, ...props }) => {
      const text = getTextFromChildren(children);
      const id = slugify(text);
      return (
        <h2 id={id} className="!text-2xl !font-bold !mt-8 !mb-4 scroll-mt-32" {...props}>
          {children}
        </h2>
      );
    },
    h3: ({ node, ...props }) => <h3 className="!text-xl !font-semibold !mt-6 !mb-3" {...props} />,
    p: ({ node, ...props }) => <p className="!text-base !mb-4" {...props} />,
    img: ({ node, ...props }) => (
      <img
        {...props}
        className="rounded-lg mx-auto my-6"
        style={{ maxHeight: 400, objectFit: "cover" }}
        alt={props.alt || ""}
      />
    ),
    ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-4" {...props} />,
    ol: ({ node, ...props }) => <ol className="list-decimal pl-6 mb-4" {...props} />,
    li: ({ node, ...props }) => <li className="mb-2" {...props} />,
  };

  return (
    <main className="bg-[#eaf0e7] min-h-screen font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1a3c3c] to-[#2e5d5d] text-white py-8 px-4 flex flex-col items-center">
        <div className="w-full max-w-5xl flex flex-col items-center">
          <h2 className="text-center text-2xl md:text-4xl font-bold tracking-wide uppercase mb-2">
            {HeroText}
          </h2>
          <div className="w-16 h-1 bg-[#eaf0e7] my-4 rounded" />
          <h1 className="text-center text-xl md:text-3xl font-extrabold uppercase mb-2">
            {Title}
          </h1>
          {Description && (
            <p className="text-center text-base md:text-lg text-[#eaf0e7] mb-2">
              {Description[0]?.children?.map((c) => c.text).join(" ")}
            </p>
          )}
         
          <div className="flex flex-wrap justify-center gap-2 text-xs text-[#eaf0e7] opacity-80 mb-2">
            <span className="font-semibold">{Author}</span>
            <span className="mx-1">|</span>
            <span>{Category?.Name}</span>
            <span className="mx-1">|</span>
            <span>{PublishedTime}</span>
          </div>
        </div>
      </section>

      {/* Article Layout */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 px-4 py-8">
        {/* TOC Sidebar */}
        <aside className="md:w-1/4 w-full mb-8 md:mb-0 md:sticky md:top-32 h-fit">
          {headings.length > 0 && (
            <nav className="bg-[#f5f7f2] rounded-xl p-4 border border-[#e0e4db]">
              <div className="font-bold text-[#16363D] text-lg mb-2">Contents</div>
              <ul className="space-y-2">
                {headings.map(({ text, id }) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className={`block pl-2 border-l-4 text-[15px] font-medium font-Archivo transition-colors duration-200
                        ${activeId === id ? "toc-active" : "border-transparent text-[#16363D] hover:text-[#199E88]"}
                      `}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </aside>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none flex-1 text-black rounded-xl shadow-md p-8">
          {/* Cover Image */}
          {coverUrl && (
            <div className="mb-8">
              <Image
                src={coverUrl}
                alt={Title}
                width={CoverImage.width}
                height={CoverImage.height}
                className="rounded-lg w-full object-cover"
                priority
              />
            </div>
          )}
          {/* Markdown Content */}
          <div ref={contentRef}>
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
              {filteredContent}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </main>
  );
} 