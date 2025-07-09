import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ThreeDMarquee } from "../ui/3d-marquee"; // Adjusted import path

// Image imports (ensure these paths are correct)
import mara from "/public/images/brand/maralogo.jpg";
import canada from "/public/images/brand/iccrc-logo.png";
import oisc from "/public/images/brand/oisc.jpg";
import ielts from "/public/images/brand/ielts.jpg";
import khaleej from "/public/images/brand/khaleej.jpg";
import idp from "/public/images/brand/idp.jpg";
import bc from "/public/images/brand/bc.jpg";

// Add more imports if you have more than 7 images, up to 16 for optimal display in 4 columns
import br_01 from "/public/images/brand/br_01.png";
import br_02 from "/public/images/brand/br_02.png";
import br_03 from "/public/images/brand/br_03.png";
import br_04 from "/public/images/brand/br_04.png";
import br_05 from "/public/images/brand/br_05.png";
import br_06 from "/public/images/brand/br_06.png";
import br_07 from "/public/images/brand/br_07.png";
import br_08 from "/public/images/brand/br_08.png";


const partnerImageSources = [
  mara.src,
  canada.src,
  oisc.src,
  ielts.src,
  khaleej.src,
  idp.src,
  bc.src,
  // Add up to 16 images for the marquee
  br_01.src,
  br_02.src,
  br_03.src,
  br_04.src,
  br_05.src,
  br_06.src,
  br_07.src,
  br_08.src,
  // If you have fewer than 16, you can repeat some or ensure your CSS handles it gracefully
];

const PartnerSection = (props) => {
  return (
    <section className="brand pt-110 pb-90">
      <div className="container">
        <h2 className="brand-title text-center mb-50">
          <span>
            <span>We're proud to work with our preferred partners</span>
          </span>
        </h2>
        {/* Ensure there are enough images for the marquee,
            the component expects images to be split into 4 columns.
            A minimum of 4 images is required. For best results, use a multiple of 4.
        */}
        {partnerImageSources.length >= 4 ? (
          <ThreeDMarquee images={partnerImageSources} className="[--duration:20s]" />
        ) : (
          <p className="text-center text-red-500">Not enough images for the 3D Marquee effect. Please add at least 4 images.</p>
        )}
      </div>
    </section>
  );
};

export default PartnerSection;
