import React from "react";
import Slider from "react-slick";
import Link from 'next/link'
import pimg1 from '/public/images/brand/trv_brand_01.png'
import pimg2 from '/public/images/brand/trv_brand_02.png'
import pimg3 from '/public/images/brand/trv_brand_03.png'
import pimg4 from '/public/images/brand/trv_brand_02.png'
import Image from "next/image";

const partners = [
    {
        pImg: pimg1,
    },
    {
        pImg: pimg2,
    },
    {
        pImg: pimg3,
    },
    {
        pImg: pimg4,
    },
    {
        pImg: pimg1,
    },
    {
        pImg: pimg2,
    },
    {
        pImg: pimg3,
    },
    {
        pImg: pimg4,
    },
]


const PartnerSection = (props) => {

    var settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (

        <section className="brand brand-pb z-1 pos-rel" data-bg-color="#F0F2F6">
            <div className="sec-title sec-title--travel text-center mb-20">
                <span className="subtitle">Our Brand Alliances</span>
                <h2>Elevating Travel Experiences</h2>
            </div>
            <div className="xb-category-slider swiper-container">
                <Slider {...settings}>
                    {partners.map((partner, pitem) => (
                        <div className="swiper-slide xb-brand xb-brand2" key={pitem}>
                            <Link href="/home-travel-agency" className="xb-item--inner"><Image src={partner.pImg} alt="" /></Link>
                        </div>
                    ))}
                </Slider>
            </div>
            <h2 className="xb-strock-text-brand xb-strock-text">Pick Tour Categories</h2>
        </section >
    );
}

export default PartnerSection;