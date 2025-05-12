import React from 'react';
import Link from 'next/link'


const CtaSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="cta bg-white">
            <div className="container">
                <div className="xb-brand2__mt">
                    <div className="xb-cta2 ul_li_between" style={{ backgroundImage: `url(${'/images/bg/cta_bg.jpg'})` }}>
                        <div className="sec-title sec-title--white sec-title--travel mt-20">
                            <span className="subtitle">Wanna travel with evisa?</span>
                            <h2>Create Unforgettable <br/> Moments with Us</h2>
                        </div>
                        <Link onClick={ClickHandler} href="/contact" className="thm-btn thm-btn--white thm-btn--trv mt-20">Book a Appointment's<span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                            <path d="M6.68164 13.28L11.5716 8.9333C12.1491 8.41997 12.1491 7.57997 11.5716 7.06664L6.68164 2.71997" stroke="#0F172A" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg></span></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CtaSection;