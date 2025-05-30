import React from "react";
import about from "/public/images/about/canada.jpg";
// import about from 'public/images/about/about_image.png'
import Image from "next/image";

const About = (props) => {
  return (
    <section className="about pos-rel pb-130">
      <div className="container">
        <div className="sec-title mb-55">
          {/* <h2 className="mb-30 wow skewIn">Dependable and Trustworthy Visa & <br/>
                        <span>Immigration Guidance</span></h2> */}
          <h2 className="mb-30 wow skewIn">
            Your Global Immigration Partner <br />
            <span>Specializing in PR, Work, and Study Visas</span>
          </h2>
          {/* <p>Our team of seasoned professionals understands the <br /> complexities of immigration laws and visa
                        procedures.</p> */}
          {/* <p>
                        Our experienced team specializes in Canada PR, Express Entry, and PNP programs. <br />
                        We simplify your journey with expert immigration guidance and legal support.
                    </p> */}
          <p>
            We offer comprehensive immigration consulting services including{" "}
            <br />
            global PR pathways like Express Entry, PNP, and skilled migration.{" "}
            <br />
            Our experts help simplify the process with accurate guidance, <br />
            eligibility assessments, and document preparation.
          </p>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-10">
            <div className="about__content">
              <ul className="about-list ul_li list-unstyled">
                <li>
                  <div className="xb-item--inner">
                    <div className="xb-item--number">1</div>
                    <div className="xb-item--holder">
                      {/* <h3 className="xb-item--title mb-10">Choose your visa type</h3> */}
                      <h3 className="xb-item--title mb-10">
                        Check PR Eligibility
                      </h3>
                      {/* <div className="xb-item--description">
                                                Determine the Visa type for your travel purpose.
                                            </div> */}
                      <div className="xb-item--description">
                        Use our immigration points calculator to check your
                        eligibility for global PR routes including Canada
                        Express Entry and other skilled programs.
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="xb-item--inner">
                    <div className="xb-item--number color-2">2</div>
                    <div className="xb-item--holder">
                      {/* <h3 className="xb-item--title mb-10">Contact our branches</h3> */}
                      <h3 className="xb-item--title mb-10">
                        Consult with Immigration Experts
                      </h3>
                      {/* <div className="xb-item--description">
                                                Start your transaction by applying to our branches.
                                            </div> */}
                      <div className="xb-item--description">
                        Connect with consultants offering visa solutions and PR
                        guidance — including Canada PR process, PNP support, and
                        international documentation.
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="xb-item--inner">
                    <div className="xb-item--number color-3">3</div>
                    <div className="xb-item--holder">
                      {/* <h3 className="xb-item--title mb-10">Submit All Your Documents</h3> */}
                      <h3 className="xb-item--title mb-10">
                        Prepare Your Application
                      </h3>
                      {/* <div className="xb-item--description">
                                                Collect all the required documents the process.
                                            </div> */}
                      <div className="xb-item--description">
                        Get help with Educational Credential Assessment (ECA),
                        visa checklists, and meeting Canada PR requirements or
                        other country-specific criteria.
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="xb-item--inner">
                    <div className="xb-item--number color-4">4</div>
                    <div className="xb-item--holder">
                      {/* <h3 className="xb-item--title mb-10">Passport delivery</h3> */}
                      <h3 className="xb-item--title mb-10">
                        Visa Approval & Journey Begins
                      </h3>
                      {/* <div className="xb-item--description">
                                                Receive your visa, which is finalized after application,
                                            </div> */}
                      <div className="xb-item--description">
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
      <div className="about__img">
        {/* <Image src={about} alt="" /> */}
        <Image src={about} alt="Immigration Consultant in Dubai" />
      </div>
    </section>
  );
};

export default About;
