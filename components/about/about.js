import React from 'react';
import about from '/public/images/about/about_img.png'
import Image from 'next/image';

const About = (props) => {

    return (
        <section className="about pos-rel pb-130">
            <div className="container">
                <div className="sec-title mb-55">
                    <h2 className="mb-30 wow skewIn">Dependable and Trustworthy Visa & <br/>
                        <span>Immigration Guidance</span></h2>
                    <p>Our team of seasoned professionals understands the <br/> complexities of immigration laws and visa
                        procedures.</p>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-10">
                        <div className="about__content">
                            <ul className="about-list ul_li list-unstyled">
                                <li>
                                    <div className="xb-item--inner">
                                        <div className="xb-item--number">1</div>
                                        <div className="xb-item--holder">
                                            <h3 className="xb-item--title mb-10">Choose your visa type</h3>
                                            <div className="xb-item--description">
                                                Determine the Visa type for your travel purpose.
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="xb-item--inner">
                                        <div className="xb-item--number color-2">2</div>
                                        <div className="xb-item--holder">
                                            <h3 className="xb-item--title mb-10">Contact our branches</h3>
                                            <div className="xb-item--description">
                                                Start your transaction by applying to our branches.
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="xb-item--inner">
                                        <div className="xb-item--number color-3">3</div>
                                        <div className="xb-item--holder">
                                            <h3 className="xb-item--title mb-10">Submit All Your Documents</h3>
                                            <div className="xb-item--description">
                                                Collect all the required documents the process.
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="xb-item--inner">
                                        <div className="xb-item--number color-4">4</div>
                                        <div className="xb-item--holder">
                                            <h3 className="xb-item--title mb-10">Passport delivery</h3>
                                            <div className="xb-item--description">
                                                Receive your visa, which is finalized after application,
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about__img">
                <Image src={about} alt="" />
            </div>
        </section>
    )
}

export default About;