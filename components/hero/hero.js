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
        // width: 1920,
        // height: 755,
        width: "100%",
        height: "100%",
        // backgroundImage: `url(${"/images/bg/full-shot-woman-taking-selfie.jpg"})`,
        backgroundImage: `url(${"/images/bg/home_hero_image3.jpg"})`,
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-7">
            <div className="hero__content">
              <Slide direction="up" triggerOnce={"false"} duration={1200}>
                {/* <h1>Immigration visa <br /> <span>Consulting</span></h1> */}
                <h1 style={{ fontSize: "50px" }}>
                  Immigration Service
                  <span>, Study Permit and Business Setup</span>
                </h1>
                {/* <h1>
                                    Simplifying<br />
                                    <span>Immigration & PR</span>
                                </h1> */}
              </Slide>
              <Slide direction="up" triggerOnce={"false"} duration={1400}>
                {/* <p>Expert Guidance for a
                                    Seamless Immigration Journey</p> */}
                <p>
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
                  <li>
                    <i className="far fa-check"></i>Eligibility for immigration from Registered Lawyer
                  </li>
                  <li>
                    <i className="far fa-check"></i>Free Consultation and Possibility of success
                  </li>
                  <li>
                    <i className="far fa-check"></i>Updated draws and changes in all visa service
                  </li>
                  <li>
                    <i className="far fa-check"></i>Register to get connect with direct lawyer
                  </li>
                </Slide>
              </ul>
              <Slide direction="up" triggerOnce={"false"} duration={1800}>
                <div>
                  <div className="btns">
                    {/* <Link onClick={ClickHandler} className="thm-btn" href="/contact">Book Appointment</Link>
                                        <Link onClick={ClickHandler} className="thm-btn thm-btn--white" href="/about">Read Story</Link> */}
                    <NoSSR
                      customStyle={customStyle}
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
