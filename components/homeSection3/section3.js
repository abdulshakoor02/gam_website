import React from "react";
import Image from "next/image"; // Import next/image
import Link from "next/link";
import dynamic from "next/dynamic";
const NoSSR = dynamic(() => import("../modal/modal"), { ssr: false });

// Removed unused imports: Slide, dynamic, NoSSR, GifBackground, places, Lottie

const Section3 = () => { // Renamed component to Section3
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const customStyle = {
    background: "linear-gradient(90deg,#AA236C 0%, #F28735 100%)",
  };

  // Placeholder image URLs - replace with actual URLs later
  const placeholderImage1 = "/images/section3/canadalogo.png";
  const placeholderImage2 = "/images/section3/auslogo.png";

  return (
    <section
      style={{
        // backgroundImage: `url(${"/images/bg/hero_bg.jpg"})`, // Kept original background for now, can be changed
        marginTop: "20px",
        paddingTop: "40px", // Added padding for better spacing
        paddingBottom: "40px", // Added padding for better spacing
        background: "linear-gradient(90deg,#AA236C 0%, #F28735 100%)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between", // Distribute space between left and right
            gap: "30px", // Add some space between the two divs
            flexWrap: "wrap",
          }}
          className="pt-20 pb-50" // Keep existing padding classes if they are useful
        >
          {/* Left Side */}
          <div
            style={{
              flex: 1, // Take up available space
              display: "flex",
              justifyContent: "center", // Horizontally center content
              alignItems: "center", // Vertically center content (optional)
              textAlign: "center",
              marginBottom: "30px",
            }}
          >
            <h3 style={{
              margin: 0,
              fontSize: "clamp(24px, 4vw, 44px)",
              fontWeight: "bold",
              color: "white",
              lineHeight: "1.3"
            }}> {/* Adjusted styling for visibility */}
              Check your eligibility Now
            </h3>
          </div>

          {/* Right Side */}
          <div
            style={{
              flex: 1, // Take up available space
              display: "flex",
              flexDirection: { xs: "column", sm: "row" }, // Stack items vertically on mobile
              alignItems: "center", // Center items horizontally
              gap: "30px", // Space between images and button
              justifyContent: "center",
            }}
          >
            <div style={{ display: "flex", gap: "30px", alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}> {/* Container for image-button pairs */}
              {/* Image 1 and Button 1 */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "15px" }}>
                <div style={{ position: "relative", width: "180px", height: "90px" }}>
                  <Image
                    src={placeholderImage1}
                    alt="Placeholder Image 1"
                    fill
                    style={{ objectFit: "cover", borderRadius: "8px" }}
                  />
                </div>
                <NoSSR
                  customStyle={{
                    ...customStyle,
                    padding: "12px 24px",
                    fontSize: "14px",
                    borderRadius: "25px",
                    minWidth: "140px",
                    textAlign: "center",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
                  }}
                  modalState={false}
                  buttonText="Check Now"
                />
              </div>

              {/* Image 2 and Button 2 */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "15px" }}>
                <div style={{ position: "relative", width: "180px", height: "90px" }}>
                  <Image
                    src={placeholderImage2}
                    alt="Placeholder Image 2"
                    fill
                    style={{ objectFit: "cover", borderRadius: "8px" }}
                  />
                </div>
                <NoSSR
                  customStyle={{
                    ...customStyle,
                    padding: "12px 24px",
                    fontSize: "14px",
                    borderRadius: "25px",
                    minWidth: "140px",
                    textAlign: "center",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
                  }}
                  modalState={false}
                  buttonText="Check Now"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3; // Export the modified component
