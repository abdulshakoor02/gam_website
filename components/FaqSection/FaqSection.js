import React, { useState } from "react";
import fImg1 from "/public/images/faq/flags.jpg";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import Image from "next/image";

const FaqSection = (props) => {
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <section className="faq pt-80 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="sec-title text-center mb-60">
              <h2 style={{
                fontSize: "clamp(28px, 4vw, 36px)",
                fontWeight: "700",
                color: "#333",
                lineHeight: "1.3",
                marginBottom: "20px"
              }}>
                Common Questions <span style={{ color: "#AA236C" }}>Answered</span>
              </h2>
              <p style={{
                fontSize: "clamp(16px, 2.2vw, 18px)",
                lineHeight: "1.6",
                color: "#666",
                maxWidth: "600px",
                margin: "0 auto"
              }}>
                At the heart of our commitment to providing exceptional immigration solutions stands our trusted expertise and reliable services.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5 mb-4 mb-lg-0">
            <div className="xb-faq-content">
              <div style={{
                background: "white",
                borderRadius: "20px",
                padding: "30px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                marginBottom: "30px"
              }}>
                <h3 style={{
                  fontSize: "clamp(20px, 3vw, 24px)",
                  fontWeight: "600",
                  color: "#333",
                  marginBottom: "15px"
                }}>
                  Why Choose Our Immigration Services?
                </h3>
                <p style={{
                  fontSize: "clamp(14px, 2vw, 16px)",
                  lineHeight: "1.6",
                  color: "#666",
                  marginBottom: "20px"
                }}>
                  We provide comprehensive immigration solutions with expert guidance, ensuring your journey to a new country is smooth and successful.
                </p>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li style={{
                    fontSize: "clamp(14px, 2vw, 16px)",
                    marginBottom: "10px",
                    color: "#333",
                    display: "flex",
                    alignItems: "center"
                  }}>
                    <i className="far fa-check" style={{ color: "#AA236C", marginRight: "10px" }}></i>
                    MARA & ICCRC Certified Consultants
                  </li>
                  <li style={{
                    fontSize: "clamp(14px, 2vw, 16px)",
                    marginBottom: "10px",
                    color: "#333",
                    display: "flex",
                    alignItems: "center"
                  }}>
                    <i className="far fa-check" style={{ color: "#AA236C", marginRight: "10px" }}></i>
                    95% Success Rate
                  </li>
                  <li style={{
                    fontSize: "clamp(14px, 2vw, 16px)",
                    color: "#333",
                    display: "flex",
                    alignItems: "center"
                  }}>
                    <i className="far fa-check" style={{ color: "#AA236C", marginRight: "10px" }}></i>
                    24/7 Client Support
                  </li>
                </ul>
              </div>
              <div style={{
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
              }}>
                <Image
                  src={fImg1}
                  alt="Immigration Consulting"
                  width={642}
                  height={445}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover"
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="xb-faq">
              <Accordion open={open} toggle={toggle} className="accordion_box">
                <AccordionItem className="block">
                  <AccordionHeader targetId="1" className="acc-btn" style={{
                    background: "white",
                    borderRadius: "10px",
                    margin: "0 0 10px 0",
                    padding: "20px",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                    border: "1px solid #eee"
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                      <h4 style={{
                        fontSize: "clamp(16px, 2.5vw, 18px)",
                        fontWeight: "600",
                        color: "#333",
                        margin: 0
                      }}>
                        What services do you offer?
                      </h4>
                      <span className="arrow" style={{
                        fontSize: "20px",
                        color: "#AA236C",
                        transform: open === "1" ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease"
                      }}></span>
                    </div>
                  </AccordionHeader>
                  <AccordionBody accordionId="1" className="acc_body" style={{
                    background: "white",
                    borderRadius: "0 0 10px 10px",
                    margin: "0 0 10px 0",
                    padding: "20px",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                    border: "1px solid #eee",
                    borderTop: "none"
                  }}>
                    <div className="content">
                      <p style={{
                        fontSize: "clamp(14px, 2vw, 16px)",
                        lineHeight: "1.6",
                        color: "#666",
                        marginBottom: "15px"
                      }}>
                        We offer comprehensive immigration and visa consulting services, including visa application assistance, document preparation, and expert guidance.
                      </p>
                      <ul style={{ listStyle: "none", padding: 0 }}>
                        <li style={{
                          fontSize: "clamp(14px, 2vw, 16px)",
                          marginBottom: "10px",
                          color: "#333",
                          display: "flex",
                          alignItems: "center"
                        }}>
                          <i className="far fa-check" style={{ color: "#AA236C", marginRight: "10px" }}></i>
                          Comprehensive Visa Assistance
                        </li>
                        <li style={{
                          fontSize: "clamp(14px, 2vw, 16px)",
                          marginBottom: "10px",
                          color: "#333",
                          display: "flex",
                          alignItems: "center"
                        }}>
                          <i className="far fa-check" style={{ color: "#AA236C", marginRight: "10px" }}></i>
                          Visa Category Expertise
                        </li>
                        <li style={{
                          fontSize: "clamp(14px, 2vw, 16px)",
                          color: "#333",
                          display: "flex",
                          alignItems: "center"
                        }}>
                          <i className="far fa-check" style={{ color: "#AA236C", marginRight: "10px" }}></i>
                          Transparency and Communication
                        </li>
                      </ul>
                    </div>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem className="block">
                  <AccordionHeader targetId="2" className="acc-btn" style={{
                    background: "white",
                    borderRadius: "10px",
                    margin: "0 0 10px 0",
                    padding: "20px",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                    border: "1px solid #eee"
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                      <h4 style={{
                        fontSize: "clamp(16px, 2.5vw, 18px)",
                        fontWeight: "600",
                        color: "#333",
                        margin: 0
                      }}>
                        What is the consultation process like?
                      </h4>
                      <span className="arrow" style={{
                        fontSize: "20px",
                        color: "#AA236C",
                        transform: open === "2" ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease"
                      }}></span>
                    </div>
                  </AccordionHeader>
                  <AccordionBody accordionId="2" className="acc_body" style={{
                    background: "white",
                    borderRadius: "0 0 10px 10px",
                    margin: "0 0 10px 0",
                    padding: "20px",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                    border: "1px solid #eee",
                    borderTop: "none"
                  }}>
                    <div className="content">
                      <p style={{
                        fontSize: "clamp(14px, 2vw, 16px)",
                        lineHeight: "1.6",
                        color: "#666",
                        marginBottom: "15px"
                      }}>
                        We offer comprehensive immigration and visa consulting services, including visa application assistance, document preparation, and expert guidance.
                      </p>
                      <ul style={{ listStyle: "none", padding: 0 }}>
                        <li style={{
                          fontSize: "clamp(14px, 2vw, 16px)",
                          marginBottom: "10px",
                          color: "#333",
                          display: "flex",
                          alignItems: "center"
                        }}>
                          <i className="far fa-check" style={{ color: "#AA236C", marginRight: "10px" }}></i>
                          Comprehensive Visa Assistance
                        </li>
                        <li style={{
                          fontSize: "clamp(14px, 2vw, 16px)",
                          marginBottom: "10px",
                          color: "#333",
                          display: "flex",
                          alignItems: "center"
                        }}>
                          <i className="far fa-check" style={{ color: "#AA236C", marginRight: "10px" }}></i>
                          Visa Category Expertise
                        </li>
                        <li style={{
                          fontSize: "clamp(14px, 2vw, 16px)",
                          color: "#333",
                          display: "flex",
                          alignItems: "center"
                        }}>
                          <i className="far fa-check" style={{ color: "#AA236C", marginRight: "10px" }}></i>
                          Transparency and Communication
                        </li>
                      </ul>
                    </div>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem className="block">
                  <AccordionHeader targetId="3" className="acc-btn" style={{
                    background: "white",
                    borderRadius: "10px",
                    margin: "0 0 10px 0",
                    padding: "20px",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                    border: "1px solid #eee"
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                      <h4 style={{
                        fontSize: "clamp(16px, 2.5vw, 18px)",
                        fontWeight: "600",
                        color: "#333",
                        margin: 0
                      }}>
                        How much do your services cost?
                      </h4>
                      <span className="arrow" style={{
                        fontSize: "20px",
                        color: "#AA236C",
                        transform: open === "3" ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease"
                      }}></span>
                    </div>
                  </AccordionHeader>
                  <AccordionBody accordionId="3" className="acc_body" style={{
                    background: "white",
                    borderRadius: "0 0 10px 10px",
                    margin: "0 0 10px 0",
                    padding: "20px",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                    border: "1px solid #eee",
                    borderTop: "none"
                  }}>
                    <div className="content">
                      <p style={{
                        fontSize: "clamp(14px, 2vw, 16px)",
                        lineHeight: "1.6",
                        color: "#666",
                        marginBottom: "15px"
                      }}>
                        We offer comprehensive immigration and visa consulting services, including visa application assistance, document preparation, and expert guidance.
                      </p>
                      <ul style={{ listStyle: "none", padding: 0 }}>
                        <li style={{
                          fontSize: "clamp(14px, 2vw, 16px)",
                          marginBottom: "10px",
                          color: "#333",
                          display: "flex",
                          alignItems: "center"
                        }}>
                          <i className="far fa-check" style={{ color: "#AA236C", marginRight: "10px" }}></i>
                          Comprehensive Visa Assistance
                        </li>
                        <li style={{
                          fontSize: "clamp(14px, 2vw, 16px)",
                          marginBottom: "10px",
                          color: "#333",
                          display: "flex",
                          alignItems: "center"
                        }}>
                          <i className="far fa-check" style={{ color: "#AA236C", marginRight: "10px" }}></i>
                          Visa Category Expertise
                        </li>
                        <li style={{
                          fontSize: "clamp(14px, 2vw, 16px)",
                          color: "#333",
                          display: "flex",
                          alignItems: "center"
                        }}>
                          <i className="far fa-check" style={{ color: "#AA236C", marginRight: "10px" }}></i>
                          Transparency and Communication
                        </li>
                      </ul>
                    </div>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem className="block">
                  <AccordionHeader targetId="4" className="acc-btn" style={{
                    background: "white",
                    borderRadius: "10px",
                    margin: "0 0 10px 0",
                    padding: "20px",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                    border: "1px solid #eee"
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                      <h4 style={{
                        fontSize: "clamp(16px, 2.5vw, 18px)",
                        fontWeight: "600",
                        color: "#333",
                        margin: 0
                      }}>
                        How do I get started with your services?
                      </h4>
                      <span className="arrow" style={{
                        fontSize: "20px",
                        color: "#AA236C",
                        transform: open === "4" ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease"
                      }}></span>
                    </div>
                  </AccordionHeader>
                  <AccordionBody accordionId="4" className="acc_body" style={{
                    background: "white",
                    borderRadius: "0 0 10px 10px",
                    margin: "0 0 10px 0",
                    padding: "20px",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                    border: "1px solid #eee",
                    borderTop: "none"
                  }}>
                    <div className="content">
                      <p style={{
                        fontSize: "clamp(14px, 2vw, 16px)",
                        lineHeight: "1.6",
                        color: "#666",
                        marginBottom: "15px"
                      }}>
                        We offer comprehensive immigration and visa consulting services, including visa application assistance, document preparation, and expert guidance.
                      </p>
                      <ul style={{ listStyle: "none", padding: 0 }}>
                        <li style={{
                          fontSize: "clamp(14px, 2vw, 16px)",
                          marginBottom: "10px",
                          color: "#333",
                          display: "flex",
                          alignItems: "center"
                        }}>
                          <i className="far fa-check" style={{ color: "#AA236C", marginRight: "10px" }}></i>
                          Comprehensive Visa Assistance
                        </li>
                        <li style={{
                          fontSize: "clamp(14px, 2vw, 16px)",
                          marginBottom: "10px",
                          color: "#333",
                          display: "flex",
                          alignItems: "center"
                        }}>
                          <i className="far fa-check" style={{ color: "#AA236C", marginRight: "10px" }}></i>
                          Visa Category Expertise
                        </li>
                        <li style={{
                          fontSize: "clamp(14px, 2vw, 16px)",
                          color: "#333",
                          display: "flex",
                          alignItems: "center"
                        }}>
                          <i className="far fa-check" style={{ color: "#AA236C", marginRight: "10px" }}></i>
                          Transparency and Communication
                        </li>
                      </ul>
                    </div>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem className="block">
                  <AccordionHeader targetId="5" className="acc-btn" style={{
                    background: "white",
                    borderRadius: "10px",
                    margin: "0 0 10px 0",
                    padding: "20px",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                    border: "1px solid #eee"
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                      <h4 style={{
                        fontSize: "clamp(16px, 2.5vw, 18px)",
                        fontWeight: "600",
                        color: "#333",
                        margin: 0
                      }}>
                        What is your success rate with visa applications?
                      </h4>
                      <span className="arrow" style={{
                        fontSize: "20px",
                        color: "#AA236C",
                        transform: open === "5" ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease"
                      }}></span>
                    </div>
                  </AccordionHeader>
                  <AccordionBody accordionId="5" className="acc_body" style={{
                    background: "white",
                    borderRadius: "0 0 10px 10px",
                    margin: "0 0 10px 0",
                    padding: "20px",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                    border: "1px solid #eee",
                    borderTop: "none"
                  }}>
                    <div className="content">
                      <p style={{
                        fontSize: "clamp(14px, 2vw, 16px)",
                        lineHeight: "1.6",
                        color: "#666",
                        marginBottom: "15px"
                      }}>
                        We offer comprehensive immigration and visa consulting services, including visa application assistance, document preparation, and expert guidance.
                      </p>
                      <ul style={{ listStyle: "none", padding: 0 }}>
                        <li style={{
                          fontSize: "clamp(14px, 2vw, 16px)",
                          marginBottom: "10px",
                          color: "#333",
                          display: "flex",
                          alignItems: "center"
                        }}>
                          <i className="far fa-check" style={{ color: "#AA236C", marginRight: "10px" }}></i>
                          Comprehensive Visa Assistance
                        </li>
                        <li style={{
                          fontSize: "clamp(14px, 2vw, 16px)",
                          marginBottom: "10px",
                          color: "#333",
                          display: "flex",
                          alignItems: "center"
                        }}>
                          <i className="far fa-check" style={{ color: "#AA236C", marginRight: "10px" }}></i>
                          Visa Category Expertise
                        </li>
                        <li style={{
                          fontSize: "clamp(14px, 2vw, 16px)",
                          color: "#333",
                          display: "flex",
                          alignItems: "center"
                        }}>
                          <i className="far fa-check" style={{ color: "#AA236C", marginRight: "10px" }}></i>
                          Transparency and Communication
                        </li>
                      </ul>
                    </div>
                  </AccordionBody>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FaqSection;
