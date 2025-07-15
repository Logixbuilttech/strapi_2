'use client';

import ApplicationForm from "@/components/comman/StrategicPartnership/ApplicationForm";
import ApplyIdea from "@/components/comman/StrategicPartnership/ApplyIdea";
import FAQ from "@/components/comman/StrategicPartnership/FAQ";
import HowWePartner from "@/components/comman/StrategicPartnership/HowWePartner";
import Intro from "@/components/comman/StrategicPartnership/Intro";
import OurPartner from "@/components/comman/StrategicPartnership/OurPartner";
import StrategicPartnershipHero from "@/components/comman/StrategicPartnership/StrategicPartnershipHero";
import { useEffect } from "react";

// Fetch industry options
export const getIndustryOptions = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/industry-focuses`);
  const data = await res.json();
  console.log("🚀 ~ getIndustryOptions ~ data:", data)
  return data?.data || [];
};

// Fetch support options
export const getSupportOptions = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/support-neededs`);
  const data = await res.json();
  console.log("🚀 ~ getSupportOptions ~ data:", data)
  return data?.data || [];
};

// Submit application
export const submitApplication = async (formData) => {
  return await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/partnership-applications`, {
    method: "POST",
    body: formData,
    headers: {
      // Only set this if you're not letting the browser set it (and not using FormData)
      // Otherwise, skip this so browser sets proper multipart boundaries
      // 'Content-Type': 'multipart/form-data' <-- REMOVE this line if using FormData
    },
  });
};

// Component
const StrategicPartnership = () => {
    useEffect(() => {
    const fetchData = async () => {
      try {
        const industryData = await getIndustryOptions();
        const supportData = await getSupportOptions();
        console.log('Industry Options:', industryData);
        console.log('Support Options:', supportData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <StrategicPartnershipHero />
      <Intro />
      <HowWePartner />
      <OurPartner />
      <ApplyIdea />
      <FAQ />
      <ApplicationForm />
    </>
  );
};

export default StrategicPartnership;
