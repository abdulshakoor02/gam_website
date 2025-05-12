import React from 'react';
import Link from 'next/link'
import hero1 from '/public/images/hero/img_01.png'
import shape1 from '/public/images/icon/h_star.png'
import shape2 from '/public/images/icon/arrow_right.svg'
import { Slide } from "react-awesome-reveal";
import Image from 'next/image';

const Hero2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="hero hero__style-two bg_img" style={{ backgroundImage: `url(${'/images/bg/hero_bg-2.jpg'})` }}>
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-12">
                        <div className="xb-hero-content wow text-center pos-rel">
                            <div className="xb-hero--img">
                                <Slide direction='up' triggerOnce={'false'} duration={1000}>
                                    <Image src={hero1} alt="" />
                                </Slide>
                            </div>
                            <div className="xb-hero--holder">
                                <span className="xb-hero--subtitle">
                                    <Slide direction='up' triggerOnce={'false'} duration={1500}>
                                        <span><Image src={shape1} alt="" />welcome to Visa Advisor<Image src={shape1} alt="" /></span>
                                    </Slide>
                                </span>
                                <h1 className="xb-hero--title">
                                    <span>
                                        <Slide direction='left' triggerOnce={'false'} duration={1000}>
                                            Expert
                                        </Slide>
                                    </span>
                                    <span>
                                        <Slide direction='right' triggerOnce={'false'} duration={1000}>
                                            Student
                                        </Slide>
                                    </span>
                                </h1>
                                <h1 className="xb-hero--title2">Visa Help</h1>
                                <div className="xb-hero--btn">
                                    <Slide direction='up' triggerOnce={'false'} duration={1500}>
                                        <Link onClick={ClickHandler} className="grd-btn" href="/contact">Book Appintment today<span><Image src={shape2} alt="" /></span></Link>
                                    </Slide>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero2;