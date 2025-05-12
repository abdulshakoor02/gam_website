import React from 'react';
import Link from "next/link";
import Coaching from '../../api/coaching'
import sicon from '/public/images/icon/arrow_up.svg'
import sicon2 from '/public/images/icon/pdf.svg'
import sicon3 from '/public/images/icon/b_icon.png'
import Image from 'next/image';


const ServiceSidebar = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="sidebar-widget">
            <div className="widget">
                <ul className="widget-category list-unstyled">
                    {Coaching.slice(0, 8).map((coaching, Pitem) => (
                        <li key={Pitem}>
                            {coaching.title ?
                                <Link onClick={ClickHandler} href={'/coaching-single/[slug]'} as={`/coaching-single/${coaching.slug}`}>{coaching.title}<span><Image src={sicon} alt="" /></span></Link>
                                : ''}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="widget">
                <h3>Downloads</h3>
                <ul className="widget-download ul_li_between list-unstyled">
                    <li>
                        <Link onClick={ClickHandler} href="/contact">
                            <div className="xb-download">
                                <div className="xb-item--inner">
                                    <div className="xb-item--icon">
                                        <Image src={sicon2} alt="" />
                                    </div>
                                    <h4 className="xb-item--title">TOEFL <br /> Application Form</h4>
                                    <div className="xb-item--size">
                                        3.9 KB
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={ClickHandler} href="/contact">
                            <div className="xb-download">
                                <div className="xb-item--inner">
                                    <div className="xb-item--icon">
                                        <Image src={sicon2} alt="" />
                                    </div>
                                    <h4 className="xb-item--title">Terms & <br /> Conditions</h4>
                                    <div className="xb-item--size">
                                        3.9 KB
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="widget widget-banner text-center bg_img" style={{ backgroundImage: `url(${'/images/bg/b_bg.jpg'})` }}>
                <Image className="mb-40" src={sicon3} alt="" />
                <h4>Assured Approval – <br /> Guaranteed</h4>
                <Link onClick={ClickHandler} className="thm-btn" href="/contact">Get in Touch</Link>
            </div>
        </div>
    )

}

export default ServiceSidebar;
