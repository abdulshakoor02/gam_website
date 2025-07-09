import React from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

const NoSSR = dynamic(() => import("../modal/modal"), { ssr: false });

const Section3 = () => {
  const customStyle = {
    background: "linear-gradient(90deg,#AA236C 0%, #F28735 100%)",
  };

  const placeholderImage1 = "/images/section3/canadalogo.png";
  const placeholderImage2 = "/images/section3/auslogo.png";

  return (
    <section
      style={{
        marginTop: "20px",
        paddingTop: "2rem",
        paddingBottom: "2rem",
      }}
    >
      <CardContainer containerClassName="py-0">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
          <div className="container">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "20px",
              }}
              className="pt-20 pb-50"
            >
              {/* Left Side */}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CardItem
                  translateZ="60"
                  className="w-full"
                >
                  <h3 style={{ margin: 0, fontSize: "44px", fontWeight: "bold", color: "#333" }}>
                    Check your eligibility Now
                  </h3>
                </CardItem>
              </div>

              {/* Right Side */}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                  {/* Image 1 and Button 1 */}
                  <CardItem translateZ="40" className="text-center">
                    <Image
                      src={placeholderImage1}
                      alt="Placeholder Image 1"
                      width={200}
                      height={100}
                      style={{ objectFit: "cover" }}
                    />
                    <div style={{ paddingTop: "10px" }}>
                      <NoSSR
                        customStyle={customStyle}
                        modalState={false}
                        buttonText="Check Now"
                      />
                    </div>
                  </CardItem>

                  {/* Image 2 and Button 2 */}
                  <CardItem translateZ="40" className="text-center">
                    <Image
                      src={placeholderImage2}
                      alt="Placeholder Image 2"
                      width={200}
                      height={100}
                      style={{ objectFit: "cover" }}
                    />
                    <div style={{ paddingTop: "10px" }}>
                      <NoSSR
                        customStyle={customStyle}
                        modalState={false}
                        buttonText="Check Now"
                      />
                    </div>
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

export default Section3;
