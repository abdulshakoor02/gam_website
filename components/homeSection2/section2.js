import React from "react";
import { Slide } from "react-awesome-reveal";
import Link from "next/link";
import dynamic from "next/dynamic";
const NoSSR = dynamic(() => import("../modal/modal"), { ssr: false });
import GifBackground from "../gifBackground/gif";
import places from "../../assets/lottie/world_map2.json";
import Lottie from "lottie-react";
import { ContainerScroll } from "../ui/containerScroll";

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
        padding: "60px 0",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <ContainerScroll>
        <div className="container">
          <div className="align-items-center pt-20 pb-50">
            <div className="hero__content" style={{ maxWidth: "800px", margin: "0 auto" }}>
              <Slide direction="up" triggerOnce={"false"} duration={1200}>
                <h1 style={{
                  textAlign: "center",
                  fontSize: "clamp(28px, 4vw, 40px)",
                  fontWeight: "700",
                  color: "#120f0f",
                  marginBottom: "30px",
                  lineHeight: "1.3"
                }}>
                  Authorised Immigration Consultants
                </h1>
              </Slide>
              <Slide direction="up" triggerOnce={"false"} duration={1400}>
                <div style={{
                  maxWidth: "800px",
                  margin: "0 auto",
                  color: "#120f0f",
                  fontSize: "clamp(16px, 2.2vw, 18px)",
                  lineHeight: "1.6",
                  padding: "0 20px"
                }}>
                  <p style={{ marginBottom: "20px" }}>
                    Go Abroad Migration is a trusted and certified immigration
                    consultancy based in Dubai, dedicated to providing professional
                    and transparent visa services. Our team includes MARA-certified
                    agents in Australia and ICCRC-authorized consultants in Canada,
                    ensuring you receive expert guidance aligned with the latest
                    immigration laws and policies.
                  </p>

                  <p style={{ marginBottom: "20px" }}>
                    Go Abroad Migration has earned a
                    reputation for excellence in delivering both immigrant and
                    non-immigrant visa solutions.
                  </p>

                  <p style={{ marginBottom: "20px" }}>
                    Whether you're planning to settle permanently in Canada or
                    explore new opportunities in Australia, our licensed immigration
                    consultants are here to guide you every step of the way. We have
                    successfully helped countless individuals and families achieve
                    their migration goals with reliable and personalized support.
                  </p>

                  <p style={{ marginBottom: "20px" }}>
                    At Go Abroad Migration, we believe in simplifying the migration
                    process through honest advice, step-by-step assistance, and
                    tailored solutions that meet your unique profile. From student
                    visas and skilled worker programs to family sponsorships and
                    permanent residency applications, we are committed to turning
                    your international dreams into reality with confidence and
                    clarity.
                  </p>

                  <p style={{ fontWeight: "600", color: "#AA236C" }}>
                    Choose Go Abroad Migration—your gateway to a new beginning abroad.
                  </p>
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </section >
  );
};

export default Hero;
