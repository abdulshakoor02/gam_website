import React from "react";
import { Slide } from "react-awesome-reveal";
import Link from "next/link";
import dynamic from "next/dynamic";
const NoSSR = dynamic(() => import("../modal/modal"), { ssr: false });
import GifBackground from "../gifBackground/gif";
import places from "../../assets/lottie/places.json";
// import Lottie from "lottie-react";

const Hero = () => {
  const customStyle = {
    background: "linear-gradient(90deg,#AA236C 0%, #F28735 100%)",
  };
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    // <section className="hero hero__style-one bg_img" style={{ backgroundImage: `url(${'/images/bg/hero_bg.jpg'})` }}>
    <section
      className="hero hero__style-one bg_img"
      style={{
        backgroundSize: "cover",
        width: "100%",
        minHeight: "90vh",
        backgroundImage: `url(${"/images/bg/home_hero_image3.jpg"})`,
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-7 col-md-12">
            <div className="hero__content">
              <Slide direction="up" triggerOnce={"false"} duration={1200}>
                {/* <h1>Immigration visa <br /> <span>Consulting</span></h1> */}
                <h1 style={{
                  fontSize: "clamp(28px, 5vw, 50px)",
                  lineHeight: "1.2",
                  fontWeight: "700",
                  marginBottom: "20px"
                }}>
                  Immigration Service
                  <span style={{ display: "block", fontSize: "0.9em", color: "#666" }}>
                    Study Permit and Business Setup
                  </span>
                </h1>
                {/* <h1>
                                    Simplifying<br />
                                    <span>Immigration & PR</span>
                                </h1> */}
              </Slide>
              <Slide direction="up" triggerOnce={"false"} duration={1400}>
                {/* <p>Expert Guidance for a
                                    Seamless Immigration Journey</p> */}
                <p style={{
                  fontSize: "clamp(16px, 2.5vw, 18px)",
                  lineHeight: "1.6",
                  marginBottom: "30px",
                  color: "white"
                }}>
                  Start your immigration journey to any country including
                  Canada, Australia, Germany, the UK, or the USA. Discover the program like 189 subclass, 190 subclass, Start up program , express entry , study permit and admission.
                </p>
                {/* <p>
                  From Canada PR via Express Entry to skilled migration to Australia,
                  UK, Germany, and more — our consultants simplify the global immigration process.
                  Check eligibility, understand visa requirements, and get expert support from start to finish.
                </p> */}
              </Slide>
              <ul className="xb-list list-unstyled mt-40 mb-60">
                <Slide direction="up" triggerOnce={"false"} duration={1600}>
                  {/* <li><i className="far fa-check"></i>Expert Legal Support</li>
                                    <li><i className="far fa-check"></i>Meeting Your Unique Needs</li>
                                    <li><i className="far fa-check"></i>Tailored Immigration Solutions</li> */}
                  <li style={{ marginBottom: "12px", fontSize: "16px" }}>
                    <i className="far fa-check" style={{ color: "#AA236C", marginRight: "8px" }}></i>Eligibility for immigration from Registered Lawyer
                  </li>
                  <li style={{ marginBottom: "12px", fontSize: "16px" }}>
                    <i className="far fa-check" style={{ color: "#AA236C", marginRight: "8px" }}></i>Free Consultation and Possibility of success
                  </li>
                  <li style={{ marginBottom: "12px", fontSize: "16px" }}>
                    <i className="far fa-check" style={{ color: "#AA236C", marginRight: "8px" }}></i>Updated draws and changes in all visa service
                  </li>
                  <li style={{ fontSize: "16px" }}>
                    <i className="far fa-check" style={{ color: "#AA236C", marginRight: "8px" }}></i>Register to get connect with direct lawyer
                  </li>
                </Slide>
              </ul>
              <Slide direction="up" triggerOnce={"false"} duration={1800}>
                <div>
                  <div className="btns" style={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: "15px", alignItems: "center" }}>
                    {/* <Link onClick={ClickHandler} className="thm-btn" href="/contact">Book Appointment</Link>
                                        <Link onClick={ClickHandler} className="thm-btn thm-btn--white" href="/about">Read Story</Link> */}
                    <NoSSR
                      customStyle={{
                        ...customStyle,
                        padding: "15px 30px",
                        fontSize: "16px",
                        borderRadius: "30px",
                        minWidth: "200px",
                        textAlign: "center",
                        border: "none",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        boxShadow: "0 4px 15px rgba(170, 35, 108, 0.3)"
                      }}
                      modalState={false}
                      buttonText="Book Free Appointment"
                    />
                  </div>
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
