import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import mara from "/public/images/brand/maralogo.jpg";
import canada from "/public/images/brand/iccrc-logo.png";
import oisc from "/public/images/brand/oisc.jpg";
import ielts from "/public/images/brand/ielts.jpg";
import khaleej from "/public/images/brand/khaleej.jpg";
import idp from "/public/images/brand/idp.jpg";
import bc from "/public/images/brand/bc.jpg";
import Image from "next/image";

const partners = [
  {
    pImg: mara,
  },
  {
    pImg: canada,
  },
  {
    pImg: oisc,
  },
  {
    pImg: ielts,
  },
  {
    pImg: khaleej,
  },
  {
    pImg: idp,
  },
  {
    pImg: bc,
  },
];

const PartnerSection = (props) => {
  var settings = {
    dots: false,
    arrows: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="brand pt-110 pb-90">
      <div className="container">
        <h2 className="brand-title text-center mb-50">
          <span>
            <span>We're proud to work with our preferred partners</span>
          </span>
        </h2>
        <div className="xb-swiper-sliders brand-slider">
          <div className="xb-carousel-inner">
            <div className="xb-swiper-container">
              <div className="xb-swiper-wrapper">
                <Slider {...settings}>
                  {partners.map((partner, pitem) => (
                    <div className="xb-swiper" key={pitem}>
                      <Link href="/">
                        <Image src={partner.pImg} alt="" />
                      </Link>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
