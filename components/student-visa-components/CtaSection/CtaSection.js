import React from 'react';
import Link from 'next/link'
import aIcon1 from '/public/images/icon/h_star.png'
import aIcon2 from '/public/images/icon/arrow_right.svg'
import Image from 'next/image';


const CtaSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="cta">
            <div className="container">
                <div className="xb-cta__wrap pos-rel bg_img" style={{ backgroundImage: `url(${'/images/bg/cta_shape.png'})` }}>
                    <div className="row">
                        <div className="col-lg-7 offset-lg-5">
                            <div className="xb-cta">
                                <div className="sec-title sec-title--white style-2 mb-20">
                                    <span className="sec-title--sub"><Image src={aIcon1} alt="" />Free Visa<Image src={aIcon1} alt="" /></span>
                                    <h3 className="sec-title--heading">Students and Experts Love Us <br/> 100% Success Rate</h3>
                                </div>
                                <Link onClick={ClickHandler} href="/contact" className="xb-tran-btn">apply today<span><Image src={aIcon2} alt=""/></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="xb-cta__img" style={{ backgroundImage: `url(${'/images/bg/cta_img.jpg'})` }}></div>
                </div>
            </div>
        </section>
    )
}

export default CtaSection;