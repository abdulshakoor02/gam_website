import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import dynamic from "next/dynamic";
const NoSSR = dynamic(() => import("../modal/modal"), { ssr: false });

const Scrollbar = () => {
  const modalStyle = {
    "@media (min-width: 300px) and (max-width: 900px)": {
      position: "relative",
    },
    position: "fixed",
    top: 370,
    right: 0,
    zIndex: " 9999",
  };
  const customStyle = {
    backgroundColor: "#00cc99",
    writingMode: "vertical-rl",
    textOrientation: "upright",
    whiteSpace: "nowrap",
    minWidth: "auto", // optional: keep it compact
    padding: 1, // optional: adjust as needed
  };
  return (
    <div className="col-lg-12">
      <div className="header-menu">
        <NoSSR
          customStyle={customStyle}
          className=""
          modalStyle={modalStyle}
          modalState={true}
          buttonText="Contact Us"
        />
        <ul className="smothscroll">
          <li>
            <AnchorLink href="#__next">
              <i className="ti-arrow-up"></i>
            </AnchorLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Scrollbar;
