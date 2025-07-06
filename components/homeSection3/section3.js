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
        paddingTop: "50px", // Added padding for better spacing
        paddingBottom: "50px", // Added padding for better spacing
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between", // Distribute space between left and right
            gap: "20px", // Add some space between the two divs
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
            }}
          >
            <h3 style={{ margin: 0, fontSize: "44px", fontWeight: "bold" }}> {/* Adjusted styling for visibility */}
              Check your eligibility Now
            </h3>
          </div>

          {/* Right Side */}
          <div
            style={{
              flex: 1, // Take up available space
              display: "flex",
              flexDirection: "column", // Stack items vertically
              alignItems: "center", // Center items horizontally
              gap: "10px", // Space between images and button
            }}
          >
            <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}> {/* Container for image-button pairs */}
              {/* Image 1 and Button 1 */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                <Image
                  src={placeholderImage1}
                  alt="Placeholder Image 1"
                  width={200} // Specify width
                  height={100} // Specify height
                  style={{ objectFit: "cover" }} // Ensure image covers the dimensions
                />
                <div style={{paddingTop:"10px",paddingRight:"30px"}}>
                <NoSSR
                  customStyle={customStyle}
                  modalState={false}
                  buttonText="Check Now"
                />
                </div>
              </div>

              {/* Image 2 and Button 2 */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                <Image
                  src={placeholderImage2}
                  alt="Placeholder Image 2"
                  width={200} // Specify width
                  height={100} // Specify height
                  style={{ objectFit: "cover" }} // Ensure image covers the dimensions
                />
                <div style={{paddingTop:"10px",paddingRight:"30px"}}>
                <NoSSR
                  customStyle={customStyle}
                  modalState={false}
                  buttonText="Check Now"
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3; // Export the modified component
