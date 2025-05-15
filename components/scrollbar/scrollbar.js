import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import dynamic from "next/dynamic";
const NoSSR = dynamic(() => import("../modal/modal"), { ssr: false });

const Scrollbar = () => {
  return (
    <div className="col-lg-12">
      <div className="header-menu">
        <NoSSR />
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
