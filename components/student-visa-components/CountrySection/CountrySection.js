import React from 'react';
import CountryList from '../../../api/country'
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import aIcon1 from '/public/images/icon/h_star.png'
import Image from 'next/image';


const CountrySection = (props) => {

    var settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
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


    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="country pt-120 pb-120">
            <div className="container">
                <div className="sec-title style-2 text-center mb-55">
                    <span className="sec-title--sub"><Image src={aIcon1} alt="" />countries<Image src={aIcon1} alt="" /></span>
                    <h3 className="sec-title--heading">Best Countries to Study <br /> Abroad</h3>
                </div>
                <div className="xb-country-slide">
                    <div className="">
                        <div className="">
                            <Slider {...settings}>
                                {CountryList.slice(18, 24).map((country, cnt) => (
                                    <div className="xb-country2" key={cnt}>
                                        <div className="xb-item--inner text-center">
                                            <div className="xb-item--flag mb-20">
                                                <Image src={country.sIcon} alt="" />
                                            </div>
                                            <h3 className="xb-item--title">{country.title}</h3>
                                            <Link onClick={ClickHandler} href={'/country-single/[slug]'} as={`/country-single/${country.slug}`} className="xb-item--link"></Link>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CountrySection;