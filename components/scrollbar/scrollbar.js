import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import dynamic from "next/dynamic";
import { Phone } from "@mui/icons-material";
import Fab from "@mui/material/Fab";
import { WhatsApp } from "@mui/icons-material";
import { Toaster } from "react-hot-toast";

const NoSSR = dynamic(() => import("../modal/modal"), { ssr: false });

const Scrollbar = () => {
  const phoneNumber = "+97151234352"; // UAE phone number format
  const whatsappNumber = "+97155135325"; // Same number for WhatsApp

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
      top: "auto",
      right: "auto",
      bottom: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 9999,
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
    padding: 1, // optional: adjust as needed,
    "@media (max-width: 768px)": {
      writingMode: "horizontal-tb",
      textOrientation: "auto",
      whiteSpace: "normal",
      padding: "12px 24px",
      borderRadius: "25px",
      fontSize: "clamp(14px, 2vw, 16px)",
    }
  };
  return (
    <div className="col-lg-12">
      <div className="header-menu">
        <Toaster />
        <Fab
          sx={{
            "@media (max-width: 768px)": {
              position: "fixed",
              top: "80px",
              left: "20px",
              zIndex: 9999,
              backgroundColor: "#47e621",
              width: 56,
              height: 56,
              "&:hover": {
                backgroundColor: "#45b620",
              },
            },
            position: "fixed",
            top: 350,
            left: 0,
            zIndex: " 9999",
            backgroundColor: "#47e621",
            "&:hover": {
              backgroundColor: "#45b620",
            },
          }}
          aria-label="WhatsApp"
          onClick={handleWhatsAppClick}
        >
          <WhatsApp sx={{ color: "white", fontSize: { xs: "24px", sm: "28px" } }} />
        </Fab>

        <Fab
          sx={{
            "@media (max-width: 768px)": {
              position: "fixed",
              top: "150px",
              left: "20px",
              zIndex: 9999,
              width: 56,
              height: 56,
              "&:hover": {
                backgroundColor: "#1976d2",
              },
            },
            position: "fixed",
            top: 410,
            left: 0,
            zIndex: " 9999",
            "&:hover": {
              backgroundColor: "#1976d2",
            },
          }}
          color="primary"
          aria-label="Phone"
          onClick={handlePhoneClick}
        >
          <Phone sx={{ fontSize: { xs: "24px", sm: "28px" } }} />
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
