import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import dynamic from "next/dynamic";
import { Phone } from "@mui/icons-material";
import Fab from "@mui/material/Fab";
import { WhatsApp } from "@mui/icons-material";
import { Toaster } from "react-hot-toast";

const NoSSR = dynamic(() => import("../modal/modal"), { ssr: false });

const Scrollbar = () => {
  const phoneNumber = "+971504916720"; // UAE phone number format
  const whatsappNumber = "+971504916720"; // Same number for WhatsApp

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsAppClick = () => {
    // Remove '+' and spaces from number for WhatsApp
    // const cleanNumber = whatsappNumber.replace(/[+ ]/g, '');
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappUrl, '_blank');
  };

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
    background: 'linear-gradient(90deg,#AA236C 0%, #F28735 100%)',
    writingMode: "vertical-rl",
    textOrientation: "upright",
    whiteSpace: "nowrap",
    minWidth: "auto", // optional: keep it compact
    padding: 1, // optional: adjust as needed
  };
  return (
    <div className="col-lg-12">
      <div className="header-menu">
        <Toaster />
        <Fab
          sx={{
            "@media (min-width: 300px) and (max-width: 900px)": {
              position: "relative",
            },
            position: "fixed",
            top: 470,
            left: 0,
            zIndex: " 9999",
            backgroundColor: "#47e621",
            // backgroundColor: "#AA236C",
          }}
          aria-label="add"
        >
          <WhatsApp sx={{ color: "white" }} fontSize="large" />
        </Fab>

        <Fab
          sx={{
            position: "fixed",
            top: 410,
            left: 0,
            zIndex: " 9999",
          }}
          color="primary"
          aria-label="add"
        >
          <Phone fontSize="large" />
        </Fab>
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
