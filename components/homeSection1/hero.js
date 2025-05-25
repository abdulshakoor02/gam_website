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
        backgroundColor: "#00cc99",
        backgroundSize: "cover",
        // width: 1920,
        // height: 755,
        // backgroundImage: `url(${"/images/bg/hero_bg.jpg"})`,
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-7">
            <Lottie
              animationData={places}
              loop={true}
              play={true}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div className="col-xl-6 col-lg-7" style={{ marginBottom: "15px" }}>
            <div className="hero__content text-end">
              <Slide direction="up" triggerOnce={"false"} duration={1200}>
                {/* <h1>Immigration visa <br /> <span>Consulting</span></h1> */}
                <h1 className="align-items-center">About us</h1>
                {/* <h1>
                                    Simplifying<br />
                                    <span>Immigration & PR</span>
                                </h1> */}
              </Slide>
              <Slide direction="up" triggerOnce={"false"} duration={1400}>
                {/* <p>Expert Guidance for a
                                    Seamless Immigration Journey</p> */}
                <p>
                  Go Abroad Migration is your trusted partner in international
                  relocation. With deep expertise and years of experience in
                  global immigration, we specialize in guiding individuals and
                  families through the complex processes of moving abroad.
                  Whether you're pursuing education, work, or permanent
                  residency, our team has in-depth knowledge of immigration laws
                  and procedures across multiple countries. We’re committed to
                  making your journey smooth, compliant, and stress-free—because
                  at Go Abroad Migration, your future abroad starts with
                  confidence.
                </p>
                {/* <p>
                  From Canada PR via Express Entry to skilled migration to Australia,
                  UK, Germany, and more — our consultants simplify the global immigration process.
                  Check eligibility, understand visa requirements, and get expert support from start to finish.
                </p> */}
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
