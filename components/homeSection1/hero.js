import React from "react";
import Link from "next/link";
import Lottie from "lottie-react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import places from "../../assets/lottie/world_map2.json";

const Hero1 = () => { // Renamed to avoid conflict with main Hero component
  return (
    <section
      style={{
        background: "linear-gradient(90deg,#AA236C 0%, #F28735 100%)",
        paddingTop: "2rem", // Added padding for better spacing with 3D card
        paddingBottom: "2rem", // Added padding for better spacing with 3D card
      }}
    >
      <CardContainer containerClassName="py-0">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-7">
                <CardItem
                  translateZ="50"
                  className="w-full mt-4"
                >
                  <Lottie
                    animationData={places}
                    loop={true}
                    play="true" // Ensure Lottie animation plays
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </CardItem>
              </div>
              <div className="col-xl-6 col-lg-7" style={{ marginBottom: "15px" }}>
                <div className="hero__content text-end">
                  <CardItem
                    translateZ="60"
                    className="w-full"
                  >
                    <h1 className="align-items-center text-white">About us</h1>
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="40"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    style={{ color: "white" }} // Ensured text is white
                  >
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
                  </CardItem>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </CardContainer>
    </section>
  );
};

export default Hero1;
