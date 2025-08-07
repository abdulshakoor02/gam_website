import React from "react";
import Services from "../../api/service";
import Link from "next/link";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3dCard";
import { GlowingEffect } from "../ui/GlowingEffect";

const ServiceSection = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="visa type pt-50 pb-80">
      <div className="container">
        <div className="service-wrap pos-rel">
          <div className="sec-title wow skewIn">
            <h2 className="mb-40" style={{
              fontSize: "clamp(28px, 4vw, 36px)",
              fontWeight: "700",
              textAlign: "center",
              lineHeight: "1.3"
            }}>
              Visa types and eligibility <br /> <span style={{ color: "#AA236C" }}>assessment</span>
            </h2>
          </div>
          <div className="row justify-content-md-center mt-none-30">
            {Services.slice(0, 6).map((service, srv) => (
              // <div className={"col-lg-4 col-md-6 mt-30"} key={srv}>
              <div className="col-lg-4 col-md-6 col-sm-12 mt-30 d-flex" key={srv}>
                {service.title ? (
                  // <div className="xb-service">
                  <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-black/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-4 border  " style={{ minHeight: "280px" }}>
                      <div className="object-contain xb-service w-100 d-flex flex-column">
                        {/* <div className="xb-item--inner"> */}
                        <div className="xb-item--inner h-100 d-flex flex-column">
                          <div
                            className={`xb-item--icon mb-30 ${service.iconColor}`}
                          >
                            <CardItem
                              translateZ="50"
                              className="text-xl font-bold text-neutral-600 dark:text-black"
                            >
                              <Image src={service.sIcon} alt="" width={48} height={48} />
                            </CardItem>
                          </div>
                          <div className="xb-item--holder">
                            <h3 className="xb-item--title mb-15" style={{ fontSize: "clamp(16px, 2vw, 20px)" }}>
                              <Link
                                onClick={ClickHandler}
                                href={"/service-single/[slug]"}
                                as={`/service-single/${service.slug}`}
                              >
                                <CardItem translateZ="60" className="w-full mt-4">
                                  {service.title}
                                </CardItem>
                              </Link>
                            </h3>
                            <CardItem translateZ="100" className="w-full mt-4">
                              <div className="xb-item--description" style={{
                                fontSize: "clamp(14px, 1.8vw, 16px)",
                                lineHeight: "1.5"
                              }}>
                                {service.description}
                              </div>
                            </CardItem>
                          </div>
                        </div>
                      </div>
                    </CardBody>
                  </CardContainer>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section >
  );
};

export default ServiceSection;
