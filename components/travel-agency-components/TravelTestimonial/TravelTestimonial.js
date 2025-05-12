import React from 'react';
import Slider from "react-slick";
import TravelFunFact from '../TravelFunFact/TravelFunFact';
import logo from '/public/images/icon/trustpilot.png'
import avatar1 from '/public/images/testimonial/tm_avatar1.png'
import avatar2 from '/public/images/testimonial/tm_avatar2.png'
import avatar3 from '/public/images/testimonial/tm_avatar3.png'
import Image from 'next/image';



const testimonial = [
    {
        id: '01',
        Des: "From start to finish, evisa made my visa application a breeze.Their expertise and friendly guidance turned a complex process into a walk in the park. Grateful for their seamless service!",
        Title: 'Goladria Gomez',
        avatar:avatar1,
    },
    {
        id: '02',
        Des: "From start to finish, evisa made my visa application a breeze.Their expertise and friendly guidance turned a complex process into a walk in the park. Grateful for their seamless service!",
        Title: 'Adam Pedro',
        avatar:avatar2,
    },
    {
        id: '03',
        Des: "From start to finish, evisa made my visa application a breeze.Their expertise and friendly guidance turned a complex process into a walk in the park. Grateful for their seamless service!",
        Title: 'Alkira Jemin',
        avatar:avatar3,
    },
    {
        id: '04',
        Des: "From start to finish, evisa made my visa application a breeze.Their expertise and friendly guidance turned a complex process into a walk in the park. Grateful for their seamless service!",
        Title: 'Adam Pedro',
        avatar:avatar2,
    }
]

const TravelTestimonial = () => {

    const settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const slider = React.useRef(null);



    return (
        <section className="testimonial travel pt-125 pb-130 bg_img" style={{ backgroundImage: `url(${'/images/bg/testimonial_bg.jpg'})` }}>
            <div className="container">
                <div className="sec-title sec-title--travel text-center mb-60">
                    <span className="subtitle">Client Feedback</span>
                    <h2>Our Clients' Experiences</h2>
                </div>
                <div className="xb-carousel-inner">
                    <div className="xb-testimonial-slider2 xb-swiper-container">
                        <div className="swiper-wrapper">
                            <Slider ref={slider} {...settings}>
                                {testimonial.map((testimonial, tsm) => (
                                    <div className="xb-testimonial4" key={tsm}>
                                        <div className="xb-item--inner">
                                            <div className="xb-item--author ul_li mb-100">
                                                <div className="xb-item--avatar">
                                                    <Image src={testimonial.avatar} alt="" />
                                                </div>
                                                <h3 className="xb-item--name">{testimonial.Title}</h3>
                                            </div>
                                            <div className="xb-item--content mb-100">
                                                “ {testimonial.Des} ”
                                            </div>
                                            <div className="xb-item--bottom ul_li_between">
                                                <div className="xb-item--ratting">
                                                    <Image src={logo} alt="" />
                                                </div>
                                                <ul className="xb-star-rating">
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
                <TravelFunFact/>
            </div>
        </section>
    );
}

export default TravelTestimonial;