import React, { Fragment } from "react";
import Header from "../../components/header/Header";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import { useRouter } from "next/router";
import NewsLatter from "../../components/NewsLatter/NewsLatter";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/footer/Footer";
import Australia from "../../api/australia";
import ServiceSidebar from "./sidebar";
// import eImg1 from "/public/images/visa/img_01.jpg";
import eImg1 from "/public/images/visa/australia1.jpg";
// import eImg from "/public/images/visa/img_02.jpg";
import eImg from "/public/images/visa/australia_img_2.jpg";
import eImg2 from "/public/images/icon/star.svg";
import Image from "next/image";

const ServiceSinglePage = () => {
  const router = useRouter();

  const ServiceDetails = Australia.find(
    (item) => item.slug === router.query.slug
  );

  function DynamicContent({ content }) {
    return (
      <div
        style={{ marginLeft: "5px" }}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={ServiceDetails?.title} pagesub={"Australia Visa"} />
      {/* <section className="coaching-single pt-120 pb-130"> */}
      <section className="coaching-single pt-120 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <ServiceSidebar />
            </div>
            <div className="col-lg-8">
              <div className="single-content">
                <h3>{ServiceDetails?.title}</h3>
                <DynamicContent content={ServiceDetails?.data1} />
                <h4>Australia’s Skilled Migration Pathways to Permanent Residency</h4>
                <p>
                  A <strong>{ServiceDetails?.title}</strong> opens the door to starting a new life in
                  Australia — whether you are a skilled worker, student, entrepreneur,
                  or family member. These visas provide long-term settlement opportunities
                  in one of the world’s most livable countries, known for its strong economy,
                  high quality of life, and multicultural communities.
                </p>
                <p>
                  Programs like <strong>Subclass 189</strong>, <strong>Subclass 190</strong>, and
                  <strong> Subclass 491</strong> allow eligible professionals and skilled workers to migrate through
                  Australia’s points-tested systems without needing employer sponsorship.
                </p>
                <p>
                  With transparent immigration policies, a stable political environment, and growing demand
                  for global talent, Australia remains a top choice for professionals and families. Whether
                  you're seeking better work-life balance or academic opportunities, its supportive visa ecosystem
                  helps individuals thrive. From vibrant cities to regional hubs, Australia welcomes skilled migrants
                  from around the world.
                </p>
                <div className="single-img mt-35 mb-70">
                  <Image src={eImg1} alt="Visa Process Australia" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-0 pb-70" >
        <div className="container">
          <div className="row">
            <div className="single-content">
              <h3>How the Process Works</h3>
              <ul className="about-list ul_li list-unstyled">
                <li>
                  <div className="xb-item--inner">
                    <div className="xb-item--number">1</div>
                    <div className="xb-item--holder">
                      <h3 className="xb-item--title mb-10">Select Your Visa Category</h3>
                      <div className="xb-item--description">
                        Choose based on occupation, location, or PR eligibility.
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="xb-item--inner">
                    <div className="xb-item--number color-2">2</div>
                    <div className="xb-item--holder">
                      <h3 className="xb-item--title mb-10">Submit Expression of Interest</h3>
                      <div className="xb-item--description">
                        Apply through SkillSelect and await invitation from authorities.
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="xb-item--inner">
                    <div className="xb-item--number color-3">3</div>
                    <div className="xb-item--holder">
                      <h3 className="xb-item--title mb-10">Documentation & Points Assessment</h3>
                      <div className="xb-item--description">
                        Ensure you meet points, EOI, language, and skill criteria.
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="xb-item--inner">
                    <div className="xb-item--number color-4">4</div>
                    <div className="xb-item--holder">
                      <h3 className="xb-item--title mb-10">Receive Invitation & Apply</h3>
                      <div className="xb-item--description">
                        Upon ITA, submit your PR visa application with supporting evidence.
                      </div>
                    </div>
                  </div>
                </li>
              </ul>

              {/* <h3 className="mt-70">{ServiceDetails?.title} Benefits</h3> */}
              <h3 className="mt-70">{ServiceDetails?.title} Benefits</h3>
              <p>
                An <strong>{ServiceDetails?.title}</strong> unlocks permanent residency, job flexibility, and access to Australia's
                top-tier education, healthcare, and lifestyle. It also offers multiple PR options
                for your dependents.
              </p>

              <div className="row align-items-center mt-10">
                <div className="col-lg-6 mt-30">
                  <Image src={eImg} alt="Australia Visa Benefits" />
                </div>
                <div className="col-lg-6 mt-30">
                  <ul className="single-content-list list-unstyled pl-25">
                    <li>
                      <Image src={eImg2} alt="Check" />
                      Work & Settle in Australia Permanently
                    </li>
                    <li>
                      <Image src={eImg2} alt="Check" />
                      Free Public Healthcare & Quality Education
                    </li>
                    <li>
                      <Image src={eImg2} alt="Check" />
                      PR for Spouse & Children
                    </li>
                    <li>
                      <Image src={eImg2} alt="Check" />
                      Path to Citizenship & Passport
                    </li>
                    <li>
                      <Image src={eImg2} alt="Check" />
                      Regional Nomination Incentives
                    </li>
                    <li>
                      <Image src={eImg2} alt="Check" />
                      Employer-Free Skilled Migration Options
                    </li>
                  </ul>
                </div>
              </div>

              {ServiceDetails?.data1 && (
                <>
                  <h3 className="mt-70">{ServiceDetails?.title} Overview</h3>
                  <DynamicContent content={ServiceDetails.data1} />
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <NewsLatter />
      <ContactSection />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default ServiceSinglePage;
