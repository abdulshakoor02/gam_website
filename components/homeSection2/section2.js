import React from "react";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

const Section2 = () => { // Renamed to avoid conflict
  return (
    <section
      style={{
        backgroundImage: `url(${"/images/bg/hero_bg.jpg"})`,
        marginTop: "20px",
        paddingTop: "2rem", // Added padding for better spacing with 3D card
        paddingBottom: "2rem", // Added padding for better spacing with 3D card
      }}
    >
      <CardContainer containerClassName="py-0">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
          <div className="container">
            <div className="align-items-center pt-20 pb-50">
              <div className="hero__content">
                <CardItem
                  translateZ="60"
                  className="w-full"
                >
                  <h1 style={{ textAlign: "center", fontSize: "40px", color: "#333" }}> {/* Adjusted color for better visibility on light bg */}
                    Authorised Immigration Consultants
                  </h1>
                </CardItem>
                <CardItem
                  as="div" // Using div to contain multiple paragraphs
                  translateZ="40"
                  className="text-neutral-500 text-sm max-w-2xl mx-auto mt-2 dark:text-neutral-300" // Centered text
                >
                  <p className="pt-10" style={{ color: "#120f0f" }}>
                    Go Abroad Migration is a trusted and certified immigration
                    consultancy based in Dubai, dedicated to providing professional
                    and transparent visa services. Our team includes MARA-certified
                    agents in Australia and ICCRC-authorized consultants in Canada,
                    ensuring you receive expert guidance aligned with the latest
                    immigration laws and policies.
                  </p>

                  <p className="pt-10" style={{ color: "#120f0f" }}>
                    With over 10 years of industry experience and a global presence
                    spanning 20+ offices, Go Abroad Migration has earned a
                    reputation for excellence in delivering both immigrant and
                    non-immigrant visa solutions.
                  </p>

                  <p className="pt-10" style={{ color: "#120f0f" }}>
                    Whether you're planning to settle permanently in Canada or
                    explore new opportunities in Australia, our licensed immigration
                    consultants are here to guide you every step of the way. We have
                    successfully helped countless individuals and families achieve
                    their migration goals with reliable and personalized support.
                  </p>

                  <p className="pt-10" style={{ color: "#120f0f" }}>
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
                </CardItem>
              </div>
            </div>
          </div>
        </CardBody>
      </CardContainer>
    </section>
  );
};

export default Section2;
