import React, { Fragment } from "react";
import Header from "../components/header/Header";
import Hero from "../components/hero/hero";
import Hero1 from "../components/homeSection1/hero";
import Section2 from "../components/homeSection2/section2";
import Section3 from "../components/homeSection3/section3"; // Import Section3
import PartnerSection from "../components/PartnerSection";
import ServiceSection from "../components/ServiceSection/ServiceSection";
import About from "../components/about/about";
import FunFactSection from "../components/FunFact/FunFact";
import CountrySection from "../components/CountrySection/CountrySection";
import TeamSection from "../components/TeamSection/TeamSection";
import FaqSection from "../components/FaqSection/FaqSection";
import Testimonial from "../components/Testimonial/Testimonial";
import BlogSection from "../components/BlogSection/BlogSection";
import NewsLatter from "../components/NewsLatter/NewsLatter";
import ContactSection from "../components/ContactSection";
import Footer from "../components/footer/Footer";
import Scrollbar from "../components/scrollbar/scrollbar";
import CardsSection from "../components/homeSection2/CardsSection";

const HomePage = () => {
  return (
    <Fragment>
      <div>
        <Header />
        <Hero />
        <Section2 />
        <Section3 /> {/* Render Section3 */}
        <PartnerSection />
        <ServiceSection />
        <About />
        <Hero1 />
        <CardsSection />
        <FunFactSection />
        {/* <CountrySection /> */}
        {/*  <TeamSection /> */}
        <Testimonial />
        <FaqSection />
        <BlogSection />
        <NewsLatter />
        <ContactSection />
        <Footer />
        <Scrollbar />
      </div>
    </Fragment>
  );
};
export default HomePage;
