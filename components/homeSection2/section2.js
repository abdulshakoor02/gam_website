import React from "react";
import { Slide } from "react-awesome-reveal";
import Link from "next/link";
import dynamic from "next/dynamic";
const NoSSR = dynamic(() => import("../modal/modal"), { ssr: false });
import GifBackground from "../gifBackground/gif";
import places from "../../assets/lottie/world_map2.json";
import Lottie from "lottie-react";

const Hero = () => {
  const customStyle = {};
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section
      style={{
        backgroundImage: `url(${"/images/bg/hero_bg.jpg"})`,
        marginTop: "20px",
      }}
    >
      <div className="container">
        <div className="align-items-center pt-20 pb-50">
          <div className="hero__content">
            <Slide direction="up" triggerOnce={"false"} duration={1200}>
              <h1 style={{ textAlign: "center", fontSize: "40px" }}>
                Authorised Immigration Consultants
              </h1>
            </Slide>
            <Slide direction="up" triggerOnce={"false"} duration={1400}>
              <p className="pl-100 pr-100 pt-10">
                Go Abroad Migration is a trusted and certified immigration
                consultancy based in Dubai, dedicated to providing professional
                and transparent visa services. Our team includes MARA-certified
                agents in Australia and ICCRC-authorized consultants in Canada,
                ensuring you receive expert guidance aligned with the latest
                immigration laws and policies.
              </p>

              <p className="pl-100 pr-100 pt-10">
                With over 10 years of industry experience and a global presence
                spanning 20+ offices, Go Abroad Migration has earned a
                reputation for excellence in delivering both immigrant and
                non-immigrant visa solutions.
              </p>

              <p className="pl-100 pr-100 pt-10">
                Whether you're planning to settle permanently in Canada or
                explore new opportunities in Australia, our licensed immigration
                consultants are here to guide you every step of the way. We have
                successfully helped countless individuals and families achieve
                their migration goals with reliable and personalized support.
              </p>

              <p className="pl-100 pr-100 pt-10">
                At Go Abroad Migration, we believe in simplifying the migration
                process through honest advice, step-by-step assistance, and
                tailored solutions that meet your unique profile. From student
                visas and skilled worker programs to family sponsorships and
                permanent residency applications, we are committed to turning
                your international dreams into reality with confidence and
                clarity.
                <br />
                Choose Go Abroad Migration—your gateway to a new beginning
                abroad.
              </p>
            </Slide>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
