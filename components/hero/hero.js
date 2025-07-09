import React from "react";
import { HeroParallax } from "../ui/hero-parallax";

const products = [
  {
    title: "Canada",
    link: "/canada",
    thumbnail: "/images/visa/canada1.png",
  },
  {
    title: "Australia",
    link: "/australia",
    thumbnail: "/images/visa/australia1.jpg",
  },
  {
    title: "Germany",
    link: "/services", // Replace with actual link if available
    thumbnail: "/images/country/img_03.png", // Replace with actual image if available
  },
  {
    title: "United Kingdom",
    link: "/services", // Replace with actual link if available
    thumbnail: "/images/country/img_02.png", // Replace with actual image if available
  },
  {
    title: "United States",
    link: "/services", // Replace with actual link if available
    thumbnail: "/images/country/img_01.png", // Replace with actual image if available
  },
  // Add more products as needed to reach at least 15 for 3 rows
    {
    title: "New Zealand",
    link: "/services", // Replace with actual link if available
    thumbnail: "/images/country/img_04.png", // Replace with actual image if available
  },
  {
    title: "France",
    link: "/services", // Replace with actual link if available
    thumbnail: "/images/country/img_05.png", // Replace with actual image if available
  },
  {
    title: "Ireland",
    link: "/services", // Replace with actual link if available
    thumbnail: "/images/country/img_06.png", // Replace with actual image if available
  },
  {
    title: "Netherlands",
    link: "/services", // Replace with actual link if available
    thumbnail: "/images/country/img_07.png", // Replace with actual image if available
  },
  {
    title: "Sweden",
    link: "/services", // Replace with actual link if available
    thumbnail: "/images/country/img_08.png", // Replace with actual image if available
  },
  {
    title: "Spain",
    link: "/services", // Replace with actual link if available
    thumbnail: "/images/country/img_09.png", // Replace with actual image if available
  },
  {
    title: "Italy",
    link: "/services", // Replace with actual link if available
    thumbnail: "/images/country/img_10.png", // Replace with actual image if available
  },
  {
    title: "Japan",
    link: "/services", // Replace with actual link if available
    thumbnail: "/images/country/img_11.png", // Replace with actual image if available
  },
  {
    title: "South Korea",
    link: "/services", // Replace with actual link if available
    thumbnail: "/images/country/img_12.png", // Replace with actual image if available
  },
  {
    title: "Singapore",
    link: "/services", // Replace with actual link if available
    thumbnail: "/images/country/flg_01.png", // Replace with actual image if available
  },
];

const Hero = () => {
  return (
    <HeroParallax
      products={products}
      title="Immigration & Visa Consulting"
      description="Start your immigration journey to any country including Canada, Australia, Germany, the UK, or the USA. Discover Express Entry, PNP, and other PR programs with our expert support."
      cta1_text="Book Free Appointment"
      cta1_link="/contact"
      cta2_text="Read Story"
      cta2_link="/about"
    />
  );
};

export default Hero;
