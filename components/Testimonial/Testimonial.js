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
        <section className="testimonial bg_img pt-100 pb-100" style={{
            backgroundImage: `url(${'/images/bg/tm_bg.png'})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
        }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="sec-title text-center mb-60">
                            <h2 style={{
                                fontSize: "clamp(28px, 4vw, 36px)",
                                fontWeight: "700",
                                color: "#333",
                                lineHeight: "1.3",
                                marginBottom: "20px"
                            }}>
                                Success Stories from Clients <br />
                                <span style={{ color: "#AA236C" }}>Immigrating Worldwide</span>
                            </h2>
                            <p style={{
                                fontSize: "clamp(16px, 2.2vw, 18px)",
                                lineHeight: "1.6",
                                color: "#666",
                                maxWidth: "800px",
                                margin: "0 auto"
                            }}>
                                Hear from individuals who secured visas through Express Entry, Canada PNP, and other global PR pathways — with expert guidance on Canada PR requirements, eligibility, and submission.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="xb-swiper-sliders">
                            <div className="xb-carousel-inner">
                                <div className="xb-testimonial-slider xb-swiper-container">
                                    <Slider ref={slider} {...settings}>
                                        {testimonial.map((testimonial, tsm) => (
                                            <div className="xb-testimonial" key={tsm}>
                                                <div className="xb-item--inner text-center" style={{
                                                    background: "white",
                                                    borderRadius: "20px",
                                                    padding: "40px 30px",
                                                    margin: "0 15px",
                                                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                                                    border: "1px solid rgba(170, 35, 108, 0.1)"
                                                }}>
                                                    <div className="xb-item--img" style={{
                                                        marginBottom: "25px",
                                                        width: "80px",
                                                        height: "80px",
                                                        margin: "0 auto 25px",
                                                        borderRadius: "50%",
                                                        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center"
                                                    }}>
                                                        <Image src={logo} alt="" width={40} height={40} />
                                                    </div>
                                                    <div className="xb-item--content" style={{
                                                        fontSize: "clamp(16px, 2.2vw, 18px)",
                                                        lineHeight: "1.6",
                                                        color: "#333",
                                                        fontStyle: "italic",
                                                        marginBottom: "25px",
                                                        position: "relative"
                                                    }}>
                                                        <span style={{
                                                            fontSize: "clamp(24px, 3vw, 36px)",
                                                            color: "#AA236C",
                                                            marginRight: "5px"
                                                        }}>"</span>
                                                        {testimonial.Des}
                                                        <span style={{
                                                            fontSize: "clamp(24px, 3vw, 36px)",
                                                            color: "#AA236C",
                                                            marginLeft: "5px"
                                                        }}>"</span>
                                                    </div>
                                                    <div className="xb-item--bottom">
                                                        <div className="xb-item--ratting" style={{ marginBottom: "15px" }}>
                                                            <Image src={rating} alt="" width={120} height={20} />
                                                        </div>
                                                        <h3 className="xb-item--title" style={{
                                                            fontSize: "clamp(18px, 2.5vw, 22px)",
                                                            color: "#333",
                                                            fontWeight: "600",
                                                            margin: 0
                                                        }}>
                                                            {testimonial.Title}
                                                        </h3>
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