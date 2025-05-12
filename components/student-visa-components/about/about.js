import React from 'react';
import Link from 'next/link'
import aIcon1 from '/public/images/icon/h_star.png'
import aIcon2 from '/public/images/icon/arrow_right.svg'
import about from '/public/images/about/about_img2.png'
import shape1 from '/public/images/shape/a_shape1.png'
import shape2 from '/public/images/shape/a_shape2.png'
import Image from 'next/image';


const About = (props) => {
    
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="about pos-rel pb-90 pt-120">
            <div className="container">
                <div className="sec-title sec-title--big style-2 mb-20">
                    <span className="sec-title--sub"><Image src={aIcon1} alt=""/>about us<Image src={aIcon1} alt="" /></span>
                    <h3 className="sec-title--heading mb-30">Since 1998 - Unparalleled Comprehensive <br /> Student Visa Guide</h3>
                    <p>Expert advice, step-by-step instructions, and insider tips to help you navigate the student visa application process with <br /> confidence and success Simplified Steps, Proven Strategies, Unwavering Support!"</p>
                </div>
                <div className="row align-items-center mt-none-30">
                    <div className="col-xl-3 col-lg-4 mt-30">
                        <div className="about-btn">
                            <Link onClick={ClickHandler}  className="grd-btn" href="/about">e.visa Histoy<span><Image src={aIcon2} alt="" /></span></Link>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-4 mt-30">
                        <div className="xb-about-content">
                            <p>Unlock Your Educational Journey Abroad: The Essential Student Visa GuideYour Gateway to Global Learning</p>
                            <Link onClick={ClickHandler} href="/about">Explore More Insight About us<i className="far fa-long-arrow-right"></i></Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 mt-30">
                        <div className="xb-about-img">
                            <Image src={about} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-shape">
                <div className="shape shape--1">
                    <div className="shape-inner" data-parallax='{"x":-50,"y":-80}'>
                        <Image src={shape1} alt="" />
                    </div>
                </div>
                <div className="shape shape--2">
                    <div className="shape-inner" data-parallax='{"x":50,"y":-80}'>
                        <Image src={shape2} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;