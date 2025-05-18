import React from 'react';
import Slider from "react-slick";
import logo from '/public/images/icon/trustpilot.png'
import rating from '/public/images/icon/tr_rattig.png'
import Image from 'next/image';



const testimonial = [
    {
        id: '01',
        // Des: "From start to finish, evisa made my visa application a breeze.Their expertise and friendly guidance turned a complex process into a walk in the park. Grateful for their seamless service!",
        Des: "I received expert guidance throughout the Canada PR process. From understanding Express Entry to submitting my PNP application, everything was smooth and professional.",
        Title: 'Goladria Gomez',
    },
    {
        id: '02',
        // Des: "From start to finish, evisa made my visa application a breeze.Their expertise and friendly guidance turned a complex process into a walk in the park. Grateful for their seamless service!",
        Des: "Their immigration consultants provided clear instructions and handled my Educational Credential Assessment (ECA) quickly. Highly recommend for global PR services.",
        Title: 'Adam Pedro',
    },
    {
        id: '03',
        // Des: "From start to finish, evisa made my visa application a breeze.Their expertise and friendly guidance turned a complex process into a walk in the park. Grateful for their seamless service!",
        Des: "Excellent support on Canada Immigration via Express Entry. They also helped track my application and kept me updated on the latest Canada draws in 2024.",
        Title: 'Alkira Jemin',
    }
]

const Testimonial = () => {

    const settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 2,
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
        <section className="testimonial bg_img pt-130 pb-130" style={{ backgroundImage: `url(${'/images/bg/tm_bg.png'})` }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <div className="sec-title margin-none-md mb-30-xs mb-125">
                            {/* <h2 className="mb-70 wow skewIn">Happy Clients Reflect on Their <br />
                                <span> Journey with Us</span></h2> */}
                            <h2 className="mb-70 wow skewIn">
                                Success Stories from Clients <br />
                                <span>Immigrating Worldwide</span>
                            </h2>
                            {/* <p>Embark on a Global Exploration: <br /> Experience Joy in 190+ Countries <br /> and Across the
                                World</p> */}
                            <p>
                                Hear from individuals who secured visas through Express Entry, Canada PNP, and other global PR pathways — with expert guidance on Canada PR requirements, eligibility, and submission.
                            </p>
                        </div>
                        <div className="xb-testimonial__nav ul_li">
                            <div className="tm-nav-item tm-button-prev" onClick={() => slider?.current?.slickPrev()}></div>
                            <div className="tm-nav-item tm-button-next" onClick={() => slider?.current?.slickNext()}></div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="xb-swiper-sliders">
                            <div className="xb-carousel-inner">
                                <div className="xb-testimonial-slider xb-swiper-container">
                                    <Slider ref={slider} {...settings}>
                                        {testimonial.map((testimonial, tsm) => (
                                            <div className="xb-testimonial" key={tsm}>
                                                <div className="xb-item--inner text-center">
                                                    <div className="xb-item--img">
                                                        <Image src={logo} alt="" />
                                                    </div>
                                                    <div className="xb-item--content">
                                                        "{testimonial.Des}"
                                                    </div>
                                                    <div className="xb-item--bottom">
                                                        <div className="xb-item--ratting">
                                                            <Image src={rating} alt="" />
                                                        </div>
                                                        <h3 className="xb-item--title">{testimonial.Title}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;