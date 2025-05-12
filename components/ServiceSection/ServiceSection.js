import React from 'react';
import Services from '../../api/service'
import Link from "next/link";
import Image from 'next/image';

const ServiceSection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="visa type pb-135">
            <div className="container">
                <div className="service-wrap pos-rel">
                    <div className="service-img-wrap">
                        <div className="service-bg" style={{ backgroundImage: `url(${'/images/bg/service_bg.png'})` }}></div>
                        <div className="service-img" style={{ backgroundImage: `url(${'/images/service/img_01.jpg'})` }}></div>
                    </div>
                    <div className="sec-title wow skewIn pt-120">
                        <h2 className="mb-60">Visa types and eligibility <br /> <span>assessment</span></h2>
                    </div>
                    <div className="row justify-content-md-center mt-none-30">
                        {Services.slice(0, 6).map((service, srv) => (
                            <div className={"col-lg-4 col-md-6 mt-30"} key={srv}>
                                {service.title ?
                                    <div className="xb-service">
                                        <div className="xb-item--inner">
                                            <div className={`xb-item--icon mb-50 ${service.iconColor}`}>
                                                <Image src={service.sIcon} alt="" />
                                            </div>
                                            <div className="xb-item--holder">
                                                <h3 className="xb-item--title mb-20"><Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${service.slug}`}>{service.title}</Link>
                                                </h3>
                                                <div className="xb-item--description">
                                                    {service.description}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    : ''}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceSection;