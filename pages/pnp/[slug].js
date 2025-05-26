import React, { Fragment } from "react";
import Header from "../../components/header/Header";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import { useRouter } from "next/router";
import NewsLatter from "../../components/NewsLatter/NewsLatter";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/footer/Footer";
import Pnp from "../../api/pnp";
import ServiceSidebar from "./sidebar";
import eImg1 from "/public/images/visa/canada1.png";
import eImg from "/public/images/visa/img_02.jpg";
import eImg2 from "/public/images/icon/star.svg";
import Image from "next/image";

const ServiceSinglePage = (props) => {
  const router = useRouter();

  function DynamicContent({ content }) {
    return (
      <div
        style={{ marginLeft: "5px" }}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }
  function LoadContent({ content }) {
    return content;
  }
  const ServiceDetails = Pnp.find((item) => item.slug === router.query.slug);

  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={ServiceDetails?.title} pagesub={"Project"} />
      <section className="coaching-single pt-120 pb-10">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <ServiceSidebar />
            </div>
            <div className="col-lg-8">
              <div className="single-content">
                <h3>{ServiceDetails?.title}</h3>
                <DynamicContent content={ServiceDetails?.data1} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-20">
        <div className="container">
          <ul className="about-list ul_li list-unstyled">
            <li>
              <div className="xb-item--inner">
                <div className="xb-item--number">1</div>
                <div className="xb-item--holder">
                  <h3 className="xb-item--title mb-10">
                    Choose your visa type
                  </h3>
                  <div className="xb-item--description">
                    Determine the Visa type for your travel
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="xb-item--inner">
                <div className="xb-item--number color-2">2</div>
                <div className="xb-item--holder">
                  <h3 className="xb-item--title mb-10">Contact our branches</h3>
                  <div className="xb-item--description">
                    Start your transaction by applying..
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="xb-item--inner">
                <div className="xb-item--number color-3">3</div>
                <div className="xb-item--holder">
                  <h3 className="xb-item--title mb-10">
                    Submit All Your Documents
                  </h3>
                  <div className="xb-item--description">
                    Collect all the required documents the..
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="xb-item--inner">
                <div className="xb-item--number color-4">4</div>
                <div className="xb-item--holder">
                  <h3 className="xb-item--title mb-10">Passport delivery</h3>
                  <div className="xb-item--description">
                    Receive your visa, which is finalized..
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <h3 className="mt-70">Benifits of Canada PR</h3>
          <p>
            Canada Permanent Residency (PR) offers a wide range of benefits that
            make it an attractive choice for immigrants. PR holders enjoy access
            to free healthcare and education, the ability to live and work
            anywhere in Canada, and the opportunity to sponsor family members.
            They also receive social benefits, protection under Canadian law,
            and a clear pathway to citizenship. With a strong economy, high
            quality of life, and a welcoming, multicultural society, Canada
            provides an ideal environment for individuals and families to build
            a secure and prosperous future.
          </p>
          <div className="row align-items-center mt-10">
            <div className="col-lg-5 mt-30">
              <Image src={eImg1} alt="" />
            </div>
            <div className="col-lg-6 mt-30">
              <p>
                In addition to stability and access to essential services,
                Canada PR offers long-term security through permanent resident
                status, allowing individuals to stay indefinitely as long as
                residency obligations are met. PR holders can also travel freely
                in and out of Canada and may be eligible for visa-free or
                visa-on-arrival access to several countries. Furthermore,
                Canada’s strong labor laws and inclusive social policies ensure
                equal rights and protections, while its supportive environment
                encourages career growth, entrepreneurship, and personal
                development.
              </p>
              <ul className="single-content-list list-unstyled pl-15 mt-20">
                <li>
                  <Image src={eImg2} alt="" />
                  Free Healthcare
                </li>
                <li>
                  <Image src={eImg2} alt="" />
                  Free Education
                </li>
                <li>
                  <Image src={eImg2} alt="" />
                  Social Benefits
                </li>
                <li>
                  <Image src={eImg2} alt="" />
                  Path to Citizenship
                </li>
                <li>
                  <Image src={eImg2} alt="" />
                  High Quality Life
                </li>
              </ul>
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
