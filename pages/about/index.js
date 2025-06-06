import React, { Fragment } from "react";
import Link from "next/link";
import Header from "../../components/header/Header";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import StudentFunFact from "../../components/student-visa-components/StudentFunFact/StudentFunFact";
import Teams from "../../api/team";
import PartnerSection from "../../components/PartnerSection";
import ContactSection from "../../components/ContactSection";
// import aboutImg from "/public/images/about/canadapassport.jpg";
import aboutImg from "/public/images/about/about_image_discussion.jpg";
import aboutImg2 from "/public/images/bg/fm1.jpg";
import aboutImg3 from "/public/images/bg/fm2.jpg";
import NewsLatter from "../../components/NewsLatter/NewsLatter";
import Image from "next/image";

const AboutUsPage = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={"About GAM"} pagesub={"About"} />
      <section className="about pt-130">
        <div className="container">
          <div className="row mb-40 align-items-center">
            <div className="col-lg-6">
              <div className="sec-title mb-20">
                {/* <h2 className="wow skewIn">
                  Committed to Your Visa <br /> <span>Success - About us</span>
                </h2> */}
                <h2 className="wow skewIn">
                  Committed to Global Immigration <br /> <span>Success – About Us</span>
                </h2>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="sec-title mb-20">
                {/* <p>
                  We deliver budget-friendly visa solutions, removing financial
                  barriers from your journey. Our goal is to provide quality
                  services at reasonable rates.
                </p> */}
                <p>
                  Based in Dubai, we provide affordable and transparent immigration
                  services for PR, work, and study visas — including support for
                  <strong>Canada Immigration via Express Entry</strong>,
                  <strong>PNP</strong>, and <strong>visa eligibility</strong> assessments worldwide.
                </p>
              </div>
            </div>
          </div>
          <div className="xb-about__img">
            {/* <Image src={aboutImg} alt="" /> */}
            <Image src={aboutImg} alt="Global Immigration Visa Consulting" />
          </div>
        </div>
      </section>
      <StudentFunFact />
      <section className="mission pt-130 pb-130">
        <div className="container">
          <div className="row align-items-center flex-row-reverse mt-none-30">
            <div className="col-lg-6 mt-30">
              <div className="mission__img text-lg-end">
                <div
                  className="inner-img d-inline-block wow skewIn"
                  data-wow-delay="200ms"
                >
                  <Image src={aboutImg2} width={482} height={380} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-30">
              <div className="mission__content">
                <div className="sec-title">
                  <h2 className="mb-20 wow skewIn">
                    Guiding Your Path with Our <br />{" "}
                    <span>Immigration Mission</span>
                  </h2>
                  {/* <p>
                    We're here to simplify immigration complexities, guiding you
                    to success. Our mission is to unite families, open
                    opportunities, and make your journey enriching. Your dreams
                    are our focus on the path to a brighter future.
                  </p> */}
                  <p>
                    Our mission is to help individuals and families across the 
                    globe — including UAE residents — navigate complex immigration 
                    laws and achieve permanent residency. Whether it’s <strong>Canada PR requirements</strong>, 
                    <strong>Canada Express Entry</strong>, or <strong>visa documentation</strong>, we offer step-by-step support.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center mt-100">
            <div className="col-lg-6 mt-30">
              <div className="mission__img">
                <div className="inner-img d-inline-block wow skewIn">
                  <Image src={aboutImg3} width={482} height={380} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-30">
              <div className="mission__content">
                <div className="sec-title">
                  <h2 className="mb-20 wow skewIn" data-wow-delay="200ms">
                    Our Immigration <br /> <span>Service history</span>
                  </h2>
                  {/* <p>
                    Our history began with a vision to make the immigration
                    process smoother and more accessible for individuals and
                    families around the world. With a deep understanding of the
                    challenges that accompany moving to a new country,
                  </p> */}
                  <p>
                    Our journey began with a goal to simplify the <strong> Immigration process</strong> and extend expert consulting across multiple countries. With knowledge in <strong> PR process</strong>, <strong>submission of PR application</strong>, and <strong>educational credential assessment (ECA)</strong>, we continue to empower global talent from Dubai and beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="team pt-120 pb-130 bg_img"
        style={{ backgroundImage: `url(${"/images/bg/team_bg.jpg"})` }}
      >
        <div className="container">
          <div className="sec-title text-center mb-65">
            <h2 className="mb-40 wow skewIn">
              Our trusted immigration <br /> <span> support team</span>
            </h2>
            {/* <p>
              At the heart of our commitment to providing exceptional <br />{" "}
              immigration solutions stands
            </p> */}
            <p>
              Our consultants bring deep expertise in global PR programs, <br /> including <strong> Immigration Points Calculator</strong> and <strong>Express Entry eligibility</strong>, serving clients from Dubai and around the world.
            </p>
          </div>
          <div className="row mt-none-30">
            {Teams.slice(0, 8).map((team, tm) => (
              <div className="col-xl-3 col-lg-4 col-md-6 mt-30" key={tm}>
                <div className="xb-team text-center">
                  <div className="xb-item--inner" data-parallax='{"scale" : 1}'>
                    <div className="xb-item--img">
                      <Image src={team.tImg} alt="" />
                    </div>
                    <div className="xb-item--holder">
                      <h3 className="xb-item--name">
                        <Link
                          onClick={ClickHandler}
                          href={"/team-single/[slug]"}
                          as={`/team-single/${team.slug}`}
                        >
                          {team.name}
                        </Link>
                      </h3>
                      <span className="xb-item--designation">{team.title}</span>
                    </div>
                    <ul className="xb-item--social list-unstyled">
                      <li>
                        <Link
                          onClick={ClickHandler}
                          href={"/team-single/[slug]"}
                          as={`/team-single/${team.slug}`}
                        >
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={ClickHandler}
                          href={"/team-single/[slug]"}
                          as={`/team-single/${team.slug}`}
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={ClickHandler}
                          href={"/team-single/[slug]"}
                          as={`/team-single/${team.slug}`}
                        >
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <PartnerSection />
      <NewsLatter />
      <ContactSection />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default AboutUsPage;
