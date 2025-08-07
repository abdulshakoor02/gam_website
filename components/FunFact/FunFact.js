import React from "react";
import CountUp, { useCountUp } from "react-countup";
import sIcon1 from "/public/images/icon/c_01.svg";
import sIcon2 from "/public/images/icon/c_02.svg";
import sIcon3 from "/public/images/icon/c_03.svg";
import sIcon4 from "/public/images/icon/c_04.svg";
import Image from "next/image";
import GifBackground from "../gifBackground/gif";
import world from "../../assets/lottie/world.json";

const FunFact = [
  {
    title: "20",
    // subTitle: 'Visa Categories',
    subTitle: "Canada Immigration Visa Categories",
    symbol: "+",
    icon: sIcon1,
  },
  {
    title: "30",
    // subTitle: 'Visa Process',
    subTitle: "Express Entry Program Submissions",
    symbol: "K+",
    icon: sIcon2,
    style: "style-2",
  },
  {
    title: "40",
    // subTitle: 'Successful Project',
    subTitle: "Approved Canada PNP Applications",
    symbol: "K+",
    icon: sIcon3,
    style: "style-3",
  },
  {
    title: "180",
    // subTitle: 'Pro Consultants',
    subTitle: "Immigration Consultants for Global PR",
    symbol: "K+",
    icon: sIcon4,
    style: "style-4",
  },
];

const FunFactSection = (props) => {
  useCountUp({
    end: "56656",
    ref: "counter",
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });

  return (
    <section
      className="counter pt-80 pb-80 bg_img"
      style={{
        backgroundImage: `url(${"/images/bg/counter_image.png"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="container">
        <div className="sec-title mb-40 text-center">
          {/* <h2 className="mb-40 wow skewIn">Discovering Our Biggest Successes: The Stories <br/> <span> Behind Our Great Achievements</span>
                    </h2> */}
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 36px)",
            fontWeight: "700",
            color: "#333",
            lineHeight: "1.3",
            marginBottom: "20px"
          }}>
            Real Success Stories from Around the World <br />
            <span style={{ color: "#AA236C" }}>Led by Trusted PR & Immigration Advisors</span>
          </h2>
          {/* <p>Embarking on a journey to reunite families, we recently had the privilege of assisting a <br/>
                        couple in securing their spouse's visa. </p> */}
          <p style={{
            fontSize: "clamp(16px, 2.2vw, 18px)",
            lineHeight: "1.6",
            color: "#666",
            maxWidth: "700px",
            margin: "0 auto"
          }}>
            Canada, Australia, New Zealand, Europe and UK, our
            global team simplifies the immigration process and beyond — helping clients from
            the UAE.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="xb-counter ul_li" style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "30px",
              padding: "0 20px"
            }}>
              {FunFact.map((funfact, fitem) => (
                <div
                  key={fitem}
                  style={{
                    background: "white",
                    borderRadius: "15px",
                    padding: "30px 20px",
                    textAlign: "center",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    borderLeft: `5px solid ${fitem === 0 ? '#AA236C' : fitem === 1 ? '#F28735' : fitem === 2 ? '#4CAF50' : '#2196F3'}`
                  }}
                >
                  <div style={{
                    width: "80px",
                    height: "80px",
                    margin: "0 auto 20px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <Image
                      src={funfact.icon}
                      alt={funfact.subTitle}
                      width={40}
                      height={40}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div style={{ marginBottom: "15px" }}>
                    <h2 style={{
                      fontSize: "clamp(32px, 5vw, 48px)",
                      fontWeight: "700",
                      color: "#333",
                      marginBottom: "5px",
                      lineHeight: "1"
                    }}>
                      <span className="xbo">
                        <CountUp end={funfact.title} enableScrollSpy />
                      </span>
                      <span style={{
                        fontSize: "clamp(18px, 3vw, 24px)",
                        color: "#666",
                        marginLeft: "5px"
                      }}>
                        {funfact.symbol}
                      </span>
                    </h2>
                  </div>
                  <h5 style={{
                    fontSize: "clamp(14px, 2vw, 16px)",
                    color: "#666",
                    lineHeight: "1.4",
                    fontWeight: "500"
                  }}>
                    {funfact.subTitle}
                  </h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <span id="counter" className="d-none" />
    </section>
  );
};

export default FunFactSection;
