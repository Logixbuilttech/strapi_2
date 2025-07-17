'use client'

import Container from "@/components/comman/Container";
import Link from "next/link";
import TextInput from "../TextInput";
import Textarea from "../Textarea";
import Button from "../Button";
import Image from "next/image";
import { useState, useEffect } from "react";
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

// Popup component (copied and adapted from ApplicationForm)
function SuccessPopup({ show, onClose }) {
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-[#EEECDE] rounded-[16px] shadow-lg p-8 max-w-[90vw] w-full sm:w-[400px] text-center relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-[#16363D] text-2xl font-bold hover:text-red-500 focus:outline-none"
          aria-label="Close popup"
        >
          ×
        </button>
        <div className="flex flex-col items-center gap-3">
          <h3 className="text-[#16363D] text-[22px] font-semibold mb-1">Message Sent!</h3>
          <p className="text-[#16363D] text-[16px]">Thank you for reaching out. We&apos;ll get back to you soon.</p>
        </div>
      </div>
    </div>
  );
}

const ContactForm = ({ data }) => {
  // data is an array of contact methods
  // Add state for form fields
  const [form, setForm] = useState({
    Name: "",
    Email: "",
    Phone: "",
    HowWeCanHelp: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  // Show popup on success
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setFieldErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  // Simple validation
  const validate = () => {
    const errors = {};
    // Name: required, min 2 chars, only letters, spaces, dot, hyphen
    if (!form.Name.trim()) {
      errors.Name = "Name is required.";
    } else if (form.Name.trim().length < 2) {
      errors.Name = "Name must be at least 2 characters.";
    } else if (!/^[a-zA-Z .'-]+$/.test(form.Name.trim())) {
      errors.Name = "Name can only contain letters, spaces, dot, hyphen, and apostrophe.";
    }
    // Email: required, valid format
    if (!form.Email.trim()) {
      errors.Email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.Email.trim())) {
      errors.Email = "Invalid email address.";
    }
    // Phone: required, valid phone, min 7 chars
    if (!form.Phone.trim()) {
      errors.Phone = "Phone is required.";
    } else if (!/^[\d\s()+-]{7,}$/.test(form.Phone.trim())) {
      errors.Phone = "Enter a valid phone number (min 7 digits).";
    }
    // HowWeCanHelp: required, min 10 chars
    if (!form.HowWeCanHelp.trim()) {
      errors.HowWeCanHelp = "This field is required.";
    } else if (form.HowWeCanHelp.trim().length < 10) {
      errors.HowWeCanHelp = "Please provide at least 10 characters.";
    }
    setFieldErrors(errors);
    // Scroll to first error
    if (Object.keys(errors).length > 0) {
      const firstErrorKey = Object.keys(errors)[0];
      const el = document.querySelector(`[name='${firstErrorKey}']`);
      if (el && el.scrollIntoView) el.scrollIntoView({ behavior: "smooth", block: "center" });
      return false;
    }
    return true;
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(false);
    if (!validate()) {
      setSubmitting(false);
      return;
    }
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"}/api/contact-forms`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: form }),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setSuccess(true);
      setShowPopup(true);
      setForm({ Name: "", Email: "", Phone: "", HowWeCanHelp: "" });
    } catch (err) {
      setError("Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="pb-[84px]">
      <SuccessPopup show={showPopup} onClose={() => setShowPopup(false)} />
      <Container>
        <div className="flex gap-3 flex-col-reverse lg:flex-row">
          <div className="w-full lg:w-[362px]">
            <ul className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1">
              {Array.isArray(data) &&
                data.map((item) => (
                  <li className="group" key={item.id}>
                <div className="h-full lg:h-auto transition p-4 rounded-[16px] gap-[30px] lg:gap-[46px] bg-[#E9F5AC] lg:bg-[rgba(255,255,255,0.07)] flex flex-col justify-between text-center text-[#16363D] lg:text-[#E9F5AC] group-hover:bg-[#E9F5AC] group-hover:text-[#16363D]">
                  <label className="text-[14px] md:text-[16px] leading-[120%] -tracking-[.03em] font-semibold font-Archivo ">
                        {item.Title}
                  </label>
                  <div className="grid gap-3 justify-center">
                        {item.Logo && item.Logo.url && (
                    <i className="mx-auto">
                            <Image
                              src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${item.Logo.url}`}
                              alt={item.Logo.alternativeText || item.Title}
                              width={item.Logo.width || 26}
                              height={item.Logo.height || 26}
                            />
                          </i>
                        )}
                        {item.Title.toLowerCase().includes("email") && item.Info ? (
                    <Link
                            href={`mailto:${item.Info}`}
                      className="font-Archivo font-medium text-[18px] lg:text-[22px] leading-[120%] -tracking-[.03em] "
                    >
                            {item.Info}
                    </Link>
                        ) : item.Info ? (
                          <span className="font-Archivo font-medium text-[18px] lg:text-[22px] leading-[120%] -tracking-[.03em] ">
                            {item.Info}
                          </span>
                        ) : null}
                  </div>
                </div>
              </li>
                ))}
            </ul>
          </div>
          <div className="w-full lg:w-[calc(100%-374px)] p-6 lg:p-10 rounded-[16px] bg-[rgba(255,255,255,0.07)]">
            <h2 className="text-[#EEECDE] text-[28px] lg:text-[48px] leading-[112%] uppercase mb-[30px] block text-center">
              Fill the form
            </h2>
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid gap-3 contactForm">
                <TextInput
                  placeholder="Your name"
                  name="Name"
                  value={form.Name}
                  onChange={handleChange}
                  required
                />
                {fieldErrors.Name && <div className="text-red-600 text-xs mt-1">{fieldErrors.Name}</div>}
                <TextInput
                  placeholder="Your email address"
                  name="Email"
                  value={form.Email}
                  onChange={handleChange}
                  required
                  type="email"
                />
                {fieldErrors.Email && <div className="text-red-600 text-xs mt-1">{fieldErrors.Email}</div>}
                {/* Phone input with country flag and code */}
                <div>
                  <PhoneInput
                    country={'us'}
                    value={form.Phone}
                    onChange={phone => {
                      setForm(prev => ({ ...prev, Phone: phone }));
                      setFieldErrors(prev => ({ ...prev, Phone: undefined }));
                    }}
                    inputProps={{
                      name: 'Phone',
                      required: true,
                      autoFocus: false,
                    }}
                    inputClass="custom-phone-input"
                    buttonClass="custom-phone-flag-btn"
                    containerClass="custom-phone-container"
                    dropdownClass="custom-phone-dropdown"
                    placeholder="xxx xx xx"
                    specialLabel=""
                    enableSearch
                    disableSearchIcon={false}
                  />
                  {fieldErrors.Phone && <div className="text-red-600 text-xs mt-1">{fieldErrors.Phone}</div>}
                </div>
                <Textarea
                  placeholder="How can we help?"
                  name="HowWeCanHelp"
                  value={form.HowWeCanHelp}
                  onChange={handleChange}
                  required
                />
                {fieldErrors.HowWeCanHelp && <div className="text-red-600 text-xs mt-1">{fieldErrors.HowWeCanHelp}</div>}
                <button
                  className="bg-[#E9F5AC] border-1 border-[#E9F5AC] text-[14px] lg:text-[18px] text-[#16363D] font-semibold tracking-[.02em] \
                  uppercase leading-[100%] block rounded-full w-full p-[15px] lg:p-5 mt-[18px] font-Archivo h-[44px] lg:h-[60px]"
                  type="submit"
                  disabled={submitting}
                >
                  {submitting ? "Sending..." : "SEND MESSAGE"}
                </button>
                {success && <div className="text-green-600 text-center mt-2">Thank you! We’ll be in touch soon.</div>}
                {error && <div className="text-red-600 text-center mt-2">{error}</div>}
              </div>
            </form>
          </div>
        </div>
      </Container>

      <style jsx global>{`
        .custom-phone-container {
          width: 100%;
        }
        .custom-phone-input {
          width: 100% !important;
          background: transparent !important;
          color: #EEECDE !important;
          border: 1px solid #C7C7B6 !important;
          border-radius: 8px !important;
          height: 44px !important;
          padding: 0 16px 0 48px !important;
          font-family: 'Archivo', sans-serif !important;
          font-size: 16px !important;
          line-height: 1.2 !important;
          box-shadow: none !important;
          outline: none !important;
          transition: border-color 0.2s;
        }
        @media (min-width: 1024px) {
          .custom-phone-input {
            height: 60px !important;
            font-size: 20px !important;
          }
        }
        .custom-phone-input::placeholder {
          color: #A0A08B !important;
          opacity: 1 !important;
          font-family: 'Archivo', sans-serif !important;
        }
        .custom-phone-flag-btn {
          background: transparent !important;
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
          padding-left: 16px !important;
          padding-right: 8px !important;
          height: 44px !important;
          display: flex !important;
          align-items: center !important;
          top: 0 !important;
          left: 0 !important;
        }
        @media (min-width: 1024px) {
          .custom-phone-flag-btn {
            height: 60px !important;
          }
        }
        .custom-phone-dropdown {
          background: #fff !important;
          color: #16363D !important;
          font-family: 'Archivo', sans-serif !important;
          font-size: 16px !important;
        }
        .custom-phone-input:focus {
          border-color: #E9F5AC !important;
          box-shadow: none !important;
        }
        .custom-phone-container .flag-dropdown {
          background: transparent !important;
          border: none !important;
          left: 0 !important;
          top: 0 !important;
          height: 100% !important;
          display: flex !important;
          align-items: center !important;
        }
      `}</style>
    </section>
  );
};

export default ContactForm;
