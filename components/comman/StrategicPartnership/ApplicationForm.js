"use client";

import { useState } from "react";
import BackgroundBlock from "../BackgroundBlock";
import Container from "@/components/comman/Container";
import TextInput from "../TextInput";
import Textarea from "../Textarea";
import RadioButton from "../RadioButton";
import CheckBoxInput from "@/components/comman/CheckBoxInput";

const ApplicationForm = ({ industryFocusTabs, supportNeededTabs }) => {
  const [form, setForm] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    website: "",
    projectDescription: "",
    reasonForPartnership: "",
    industry_focus_tab: null, // single value
    support_needed_tab: null, // single value
    attachment: null,
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [validationError, setValidationError] = useState(null);

  const requiredFields = [
    { key: "fullName", label: "Full Name" },
    { key: "email", label: "Email Address" },
    { key: "phone", label: "Phone" },
    { key: "projectDescription", label: "Project Description" },
    { key: "reasonForPartnership", label: "Reason For Partnership" },
  ];

  const validateForm = () => {
    for (let field of requiredFields) {
      if (!form[field.key] || form[field.key].toString().trim() === "") {
        return `${field.label} is required.`;
      }
    }
    return null;
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setForm((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Single-select for industry focus
  const handleIndustryFocus = (id) => {
    console.log("handle industry focus", id);
    setForm((prev) => ({ ...prev, industry_focus_tab: id }));
  };

  // Single-select for support needed
  const handleSupportNeeded = (id) => {
    setForm((prev) => ({ ...prev, support_needed_tab: id }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(false);
    setValidationError(null);

    const validationMsg = validateForm();
    if (validationMsg) {
      setValidationError(validationMsg);
      setSubmitting(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("data[fullName]", form.fullName);
      formData.append("data[businessName]", form.businessName);
      formData.append("data[email]", form.email);
      formData.append("data[phone]", form.phone);
      formData.append("data[website]", form.website);
      formData.append("data[projectDescription]", form.projectDescription);
      formData.append("data[reasonForPartnership]", form.reasonForPartnership);
      // For Strapi v5 REST API, send relation IDs directly (no [connect])
      if (form.industry_focus_tab) {
        formData.append(
          "data[industry_focus_tab]",
          String(form.industry_focus_tab - 1)
        );
        // formData.append("data[industry_focus_tab]", Number(form.industry_focus_tab)); // Uncomment if needed
      }
      if (form.support_needed_tab) {
        formData.append(
          "data[support_needed_tab]",
          String(form.support_needed_tab + 1)
        );
        // formData.append("data[support_needed_tab]", Number(form.support_needed_tab)); // Uncomment if needed
      }
      if (form.attachment) {
        formData.append("files.attachment", form.attachment);
      }
      // Debug: log FormData entries
      for (let pair of formData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }
      const res = await fetch(
        "http://localhost:1337/api/partnership-applications",
        {
          method: "POST",
          body: formData,
        }
      );
      if (!res.ok) throw new Error("Failed to submit application");
      setSuccess(true);
      setForm({
        fullName: "",
        businessName: "",
        email: "",
        phone: "",
        website: "",
        projectDescription: "",
        reasonForPartnership: "",
        industry_focus_tab: null,
        support_needed_tab: null,
        attachment: null,
      });
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <BackgroundBlock>
      <Container>
        <div className="flex pb-12 lg:pb-[64px]">
          <span
            className="w-[90px] md:w-[176px] lg:w-1/2  text-[#EEECDE] break-words text-[10px] md:text-[14px] lg:text-[18px] tracking-[.02em] leading-[100%] font-semibold 
          !font-Archivo uppercase"
          >
            Let’s start with your vision
          </span>
          <h2 className="w-[calc(100%-90px)] md:w-[calc(100%-176px)] lg:w-1/2 text-[#EEECDE] text-[30px] md:text-[44px] lg:text-[56px] xl:text-[66px] uppercase leading-[113%]">
            Ready to Build the <br /> Future Together?
          </h2>
        </div>
        <div className="bg-[#EEECDE] rounded-[16px] lg:p-10 p-6">
          <h2 className="text-[24px] md:text-[28px] lg:text-[48px] text-[#16363D] leading-[113%] uppercase mb-5 lg:mb-[30px] block text-center">
            Strategic Partnership Application
          </h2>
          <form onSubmit={handleSubmit}>
            {validationError && (
              <div className="text-red-600 mb-2 text-center">
                {validationError}
              </div>
            )}
            <div className="grid gap-3 grid-cols-1 lg:grid-cols-2 pb-3">
              <TextInput
                placeholder="Full Name *"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                required
              />
              <TextInput
                placeholder="Business or Project Name (if applicable)"
                name="businessName"
                value={form.businessName}
                onChange={handleChange}
              />
              <TextInput
                placeholder="Email Address *"
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                required
              />
              <TextInput
                placeholder="Phone *"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="pb-5 lg:pb-[30px]">
              <TextInput
                placeholder="Website or Portfolio Link (optional)"
                name="website"
                value={form.website}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-6 mb-5 md:mb-6 lg:mb-[30px]">
              <h4 className="text-[#16363D] font-medium text-[14px] lg:text-[22px] leading-[120%] tracking-[-.03em] !font-Archivo">
                Industry Focus
              </h4>
              <div className="flex gap-3 flex-wrap">
                {industryFocusTabs?.map((tab) => (
                  <RadioButton
                    key={tab.id}
                    name="industryFocus"
                    id={`industry-${tab.id}`}
                    label={tab.Title}
                    checked={form.industry_focus_tab === tab.id}
                    onChange={() => handleIndustryFocus(tab.id)}
                  />
                ))}
              </div>
            </div>
            <div className="mb-5 md:mb-6 lg:mb-[30px]">
              <Textarea
                placeholder="Describe Your Project or Business *"
                name="projectDescription"
                value={form.projectDescription}
                onChange={handleChange}
                required
              />
            </div>
            <div className="grid gap-6 mb-5 md:mb-6 lg:mb-[30px]">
              <h4 className="text-[#16363D] font-medium text-[14px] lg:text-[22px] leading-[120%] tracking-[-.03em] !font-Archivo">
                What Support Are You Seeking?
              </h4>
              <div className="flex gap-3 flex-wrap">
                {supportNeededTabs?.map((tab) => (
                  <RadioButton
                    key={tab.id}
                    name="supportNeeded"
                    id={`support-${tab.id}`}
                    label={tab.Title}
                    checked={form.support_needed_tab === tab.id}
                    onChange={() => handleSupportNeeded(tab.id)}
                  />
                ))}
              </div>
            </div>
            <div className="mb-5 md:mb-6 lg:mb-[30px]">
              <Textarea
                placeholder="Why Do You Want to Partner with RenewEdge-Solutions? *"
                name="reasonForPartnership"
                value={form.reasonForPartnership}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-5 md:mb-6 lg:mb-[30px] grid gap-6">
              <label className="text-[#16363D] font-Archivo font-medium text-[14px] lg:text-[22px] leading-[120%] -tracking-[.03em]">
                Upload Pitch Deck or Additional Materials (optional)
              </label>

              <div className="fileInput" onChange={handleChange}>
                <label>
                  <span>
                    Drag or <strong>Upload</strong> files here
                  </span>
                  <p>Maximum 5 attachments are allowed.</p>
                </label>
                <input
                  type="file"
                  name="attachment"
                  accept="image/*,application/pdf"
                />
              </div>
            </div>
            <div className="w-full">
              <button
                type="submit"
                className="bg-[#16363D] border-1 border-[#16363D] text-[14px] lg:text-[18px] text-[#EEECDE] font-semibold 
              tracking-[.02em] uppercase leading-[100%] block rounded-full w-full p-[15px] lg:p-5"
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit Your Pitch"}
              </button>
              {success && (
                <div className="text-green-600 mt-2 text-center">
                  Application submitted successfully!
                </div>
              )}
              {error && (
                <div className="text-red-600 mt-2 text-center">{error}</div>
              )}
            </div>
          </form>
        </div>
      </Container>
    </BackgroundBlock>
  );
};

export default ApplicationForm;
