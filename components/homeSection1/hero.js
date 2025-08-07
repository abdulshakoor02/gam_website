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
    // <section className="hero hero__style-one bg_img" style={{ backgroundImage: `url(${'/images/bg/hero_bg.jpg'})` }}>
    <section
      style={{
        background: "linear-gradient(90deg,#AA236C 0%, #F28735 100%)",
        backgroundSize: "cover",
        padding: "60px 0",
        minHeight: "70vh",
        display: "flex",
        alignItems: "center"
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div style={{
              height: "400px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <Lottie
                animationData={places}
                loop={true}
                play={true}
                style={{
                  width: "100%",
                  height: "100%",
                  maxWidth: "400px"
                }}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero__content">
              <Slide direction="up" triggerOnce={"false"} duration={1200}>
                <h1 style={{
                  fontSize: "clamp(28px, 4vw, 40px)",
                  fontWeight: "700",
                  color: "white",
                  marginBottom: "20px",
                  lineHeight: "1.3",
                  textAlign: "center"
                }}>
                  About Go Abroad Migration
                </h1>
              </Slide>
              <Slide direction="up" triggerOnce={"false"} duration={1400}>
                <div style={{
                  color: "white",
                  fontSize: "clamp(16px, 2.2vw, 18px)",
                  lineHeight: "1.6",
                  marginBottom: "30px",
                  textAlign: "center"
                }}>
                  <p style={{ marginBottom: "20px" }}>
                    Go Abroad Migration is your trusted partner in international
                    relocation. With deep expertise and years of experience in
                    global immigration, we specialize in guiding individuals and
                    families through the complex processes of moving abroad.
                    Whether you're pursuing education, work, or permanent
                    residency, our team has in-depth knowledge of immigration laws
                    and procedures across multiple countries. We're committed to
                    making your journey smooth, compliant, and stress-free—because
                    at Go Abroad Migration, your future abroad starts with
                    confidence.
                  </p>
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
