import React from 'react';
import about from '/public/images/about/about_image.png'
// import about from 'public/images/about/about_image.png'
import Image from 'next/image';

const About = (props) => {

    return (
        <section className="about pos-rel pb-130">
            <div className="container">
                <div className="sec-title mb-55">
                    {/* <h2 className="mb-30 wow skewIn">Dependable and Trustworthy Visa & <br/>
                        <span>Immigration Guidance</span></h2> */}
                    <h2 className="mb-30 wow skewIn">
                        Trusted Canada PR & <br />
                        <span>Immigration Consultants in Dubai</span>
                    </h2>
                    {/* <p>Our team of seasoned professionals understands the <br /> complexities of immigration laws and visa
                        procedures.</p> */}
                    <p>
                        Our experienced team specializes in Canada PR, Express Entry, and PNP programs. <br />
                        We simplify your journey with expert immigration guidance and legal support.
                    </p>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-10">
                        <div className="about__content">
                            <ul className="about-list ul_li list-unstyled">
                                <li>
                                    <div className="xb-item--inner">
                                        <div className="xb-item--number">1</div>
                                        <div className="xb-item--holder">
                                            {/* <h3 className="xb-item--title mb-10">Choose your visa type</h3> */}
                                            <h3 className="xb-item--title mb-10">Check Canada PR Eligibility</h3>
                                            {/* <div className="xb-item--description">
                                                Determine the Visa type for your travel purpose.
                                            </div> */}
                                            <div className="xb-item--description">
                                                Use our CRS points calculator to determine your eligibility for Express Entry or PNP.
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="xb-item--inner">
                                        <div className="xb-item--number color-2">2</div>
                                        <div className="xb-item--holder">
                                            {/* <h3 className="xb-item--title mb-10">Contact our branches</h3> */}
                                            <h3 className="xb-item--title mb-10">Connect with Immigration Experts</h3>
                                            {/* <div className="xb-item--description">
                                                Start your transaction by applying to our branches.
                                            </div> */}
                                            <div className="xb-item--description">
                                                Speak with trusted Canadian immigration consultants based in Dubai.
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="xb-item--inner">
                                        <div className="xb-item--number color-3">3</div>
                                        <div className="xb-item--holder">
                                            {/* <h3 className="xb-item--title mb-10">Submit All Your Documents</h3> */}
                                            <h3 className="xb-item--title mb-10">Prepare Required Documents</h3>
                                            {/* <div className="xb-item--description">
                                                Collect all the required documents the process.
                                            </div> */}
                                            <div className="xb-item--description">
                                                Get assistance with Educational Credential Assessment (ECA) and other PR requirements.
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="xb-item--inner">
                                        <div className="xb-item--number color-4">4</div>
                                        <div className="xb-item--holder">
                                            {/* <h3 className="xb-item--title mb-10">Passport delivery</h3> */}
                                            <h3 className="xb-item--title mb-10">Visa Approval & Passport Delivery</h3>
                                            {/* <div className="xb-item--description">
                                                Receive your visa, which is finalized after application,
                                            </div> */}
                                            <div className="xb-item--description">
                                                Once approved, receive your Canada PR visa and begin your immigration journey.
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
                {/* <Image src={about} alt="" /> */}
                <Image src={about} alt="Canada Immigration Consultant in Dubai" />
            </div>
        </section>
    )
}

export default About;