import qs from 'qs';
import ArticleWithTOC from './ArticleWithTOC';

export default async function ArticlePage({ params }) {
  const { slug } = await params;

  const queryString = qs.stringify(
    {
      filters: { Slug: { $eq: slug } },
      populate: '*',
    },
    { encode: false }
  );

  const url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/articles?${queryString}`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
    next: { tags: ['articles-slug'], revalidate: 60 },
  });

  if (!res.ok) {
    return <div>Error loading article</div>;
  }

  const { data } = await res.json();
  const article = data && data[0] && data[0];

  if (!article) return <div>Article not found</div>;

  return <ArticleWithTOC article={article} />;
}
