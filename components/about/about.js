import React from "react";
import about from "/public/images/about/canada.jpg";
// import about from 'public/images/about/about_image.png'
import Image from "next/image";

const About = (props) => {
  return (
    <section className="about pos-rel pb-80">
      <div className="container">
        <div className="sec-title mb-40">
          {/* <h2 className="mb-30 wow skewIn">Dependable and Trustworthy Visa & <br/>
                        <span>Immigration Guidance</span></h2> */}
          <h2 className="mb-30 wow skewIn" style={{
            color: "white",
            fontSize: "clamp(28px, 4vw, 36px)",
            fontWeight: "700",
            lineHeight: "1.3",
            textAlign: "center"
          }}>
            Your Global Immigration Partner <br />
            <span style={{ color: "#AA236C" }}>Specializing in PR, Work, and Study Visas</span>
          </h2>
          {/* <p>Our team of seasoned professionals understands the <br /> complexities of immigration laws and visa
                        procedures.</p> */}
          {/* <p>
                        Our experienced team specializes in Canada PR, Express Entry, and PNP programs. <br />
                        We simplify your journey with expert immigration guidance and legal support.
                    </p> */}
          <p style={{
            color: "black",
            fontSize: "clamp(16px, 2.2vw, 18px)",
            lineHeight: "1.6",
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto"
          }}>
            We offer comprehensive immigration consulting services including
            global PR pathways like Express Entry, PNP, and skilled migration.
            Our experts help simplify the process with accurate guidance,
            eligibility assessments, and document preparation.
          </p>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="about__content">
              <ul className="about-list ul_li list-unstyled">
                <li>
                  <div className="xb-item--inner" style={{
                    marginBottom: "30px",
                    padding: "20px",
                    borderRadius: "10px",
                    background: "white",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
                  }}>
                    <div className="xb-item--number" style={{
                      fontSize: "clamp(24px, 3vw, 36px)",
                      fontWeight: "bold",
                      color: "#AA236C",
                      marginBottom: "15px"
                    }}>1</div>
                    <div className="xb-item--holder">
                      {/* <h3 className="xb-item--title mb-10">Choose your visa type</h3> */}
                      <h3 className="xb-item--title mb-10" style={{
                        fontSize: "clamp(18px, 2.5vw, 22px)",
                        fontWeight: "600",
                        color: "#333"
                      }}>
                        Check PR Eligibility
                      </h3>
                      {/* <div className="xb-item--description">
                                                Determine the Visa type for your travel purpose.
                                            </div> */}
                      <div className="xb-item--description" style={{
                        fontSize: "clamp(14px, 2vw, 16px)",
                        lineHeight: "1.5",
                        color: "#666"
                      }}>
                        Use our immigration points calculator to check your
                        eligibility for global PR routes including Canada
                        Express Entry and other skilled programs.
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="xb-item--inner" style={{
                    marginBottom: "30px",
                    padding: "20px",
                    borderRadius: "10px",
                    background: "white",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
                  }}>
                    <div className="xb-item--number color-2" style={{
                      fontSize: "clamp(24px, 3vw, 36px)",
                      fontWeight: "bold",
                      color: "#F28735",
                      marginBottom: "15px"
                    }}>2</div>
                    <div className="xb-item--holder">
                      {/* <h3 className="xb-item--title mb-10">Contact our branches</h3> */}
                      <h3 className="xb-item--title mb-10" style={{
                        fontSize: "clamp(18px, 2.5vw, 22px)",
                        fontWeight: "600",
                        color: "#333"
                      }}>
                        Consult with Immigration Experts
                      </h3>
                      {/* <div className="xb-item--description">
                                                Start your transaction by applying to our branches.
                                            </div> */}
                      <div className="xb-item--description" style={{
                        fontSize: "clamp(14px, 2vw, 16px)",
                        lineHeight: "1.5",
                        color: "#666"
                      }}>
                        Connect with consultants offering visa solutions and PR
                        guidance — including Canada PR process, PNP support, and
                        international documentation.
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="xb-item--inner" style={{
                    marginBottom: "30px",
                    padding: "20px",
                    borderRadius: "10px",
                    background: "white",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
                  }}>
                    <div className="xb-item--number color-3" style={{
                      fontSize: "clamp(24px, 3vw, 36px)",
                      fontWeight: "bold",
                      color: "#4CAF50",
                      marginBottom: "15px"
                    }}>3</div>
                    <div className="xb-item--holder">
                      {/* <h3 className="xb-item--title mb-10">Submit All Your Documents</h3> */}
                      <h3 className="xb-item--title mb-10" style={{
                        fontSize: "clamp(18px, 2.5vw, 22px)",
                        fontWeight: "600",
                        color: "#333"
                      }}>
                        Prepare Your Application
                      </h3>
                      {/* <div className="xb-item--description">
                                                Collect all the required documents the process.
                                            </div> */}
                      <div className="xb-item--description" style={{
                        fontSize: "clamp(14px, 2vw, 16px)",
                        lineHeight: "1.5",
                        color: "#666"
                      }}>
                        Get help with Educational Credential Assessment (ECA),
                        visa checklists, and meeting Canada PR requirements or
                        other country-specific criteria.
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="xb-item--inner" style={{
                    padding: "20px",
                    borderRadius: "10px",
                    background: "white",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
                  }}>
                    <div className="xb-item--number color-4" style={{
                      fontSize: "clamp(24px, 3vw, 36px)",
                      fontWeight: "bold",
                      color: "#2196F3",
                      marginBottom: "15px"
                    }}>4</div>
                    <div className="xb-item--holder">
                      {/* <h3 className="xb-item--title mb-10">Passport delivery</h3> */}
                      <h3 className="xb-item--title mb-10" style={{
                        fontSize: "clamp(18px, 2.5vw, 22px)",
                        fontWeight: "600",
                        color: "#333"
                      }}>
                        Visa Approval & Journey Begins
                      </h3>
                      {/* <div className="xb-item--description">
                                                Receive your visa, which is finalized after application,
                                            </div> */}
                      <div className="xb-item--description" style={{
                        fontSize: "clamp(14px, 2vw, 16px)",
                        lineHeight: "1.5",
                        color: "#666"
                      }}>
                        Once approved, receive your visa and begin your journey
                        toward permanent residency — whether it's Canada,
                        Australia, the UK, or elsewhere.
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="about__img" style={{
        marginTop: "40px",
        display: "flex",
        justifyContent: "center"
      }}>
        {/* <Image src={about} alt="" /> */}
        <div style={{
          position: "relative",
          width: "100%",
          maxWidth: "500px",
          height: "300px",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)"
        }}>
          <Image
            src={about}
            alt="Immigration Consultant in Dubai"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
