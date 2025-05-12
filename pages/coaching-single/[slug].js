import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useRouter } from 'next/router'
import NewsLatter from '../../components/NewsLatter/NewsLatter';
import ContactSection from '../../components/ContactSection';
import Footer from '../../components/footer/Footer';
import Coaching from '../../api/coaching'
import ServiceSidebar from './sidebar';
import eImg from '/public/images/visa/img_02.jpg'
import eImg2 from '/public/images/icon/star.svg'
import Image from 'next/image';

const CoachingSinglePage = (props) => {

    const router = useRouter()

    const CoachingDetails = Coaching.find(item => item.slug === router.query.slug)

    return (
        <Fragment>
            <Header />
            <PageTitle pageTitle={CoachingDetails?.title} pagesub={'Coaching'} />
            <section className="coaching-single pt-120 pb-130">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <ServiceSidebar />
                        </div>
                        <div className="col-lg-8">
                            <div className="single-content">
                                <h3>{CoachingDetails?.title}</h3>
                                <h4>The United Kingdom Offers Effortless Business Setup in the Country</h4>
                                <p>A {CoachingDetails?.title} stands as a gateway to building a new life in a foreign land. It's more than just a permit; it's an opportunity to immerse yourself in a new culture, embrace fresh opportunities, and become an integral part of a different community</p>
                                <p>In the realm of global communication, a strong command of the English language is a bridge that connects cultures, , and aspirations. The International English.</p>
                                <div className="single-img mt-35 mb-70">
                                    <Image src={CoachingDetails?.pImg} alt="" />
                                </div>
                                <h3>How e.visa work</h3>
                                <ul className="about-list ul_li list-unstyled">
                                    <li>
                                        <div className="xb-item--inner">
                                            <div className="xb-item--number">1</div>
                                            <div className="xb-item--holder">
                                                <h3 className="xb-item--title mb-10">Choose your visa type</h3>
                                                <div className="xb-item--description">
                                                    Determine the Visa type for your travel
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
                                                    Start your transaction by applying..
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
                                                    Collect all the required documents  the..
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
                                                    Receive your visa, which is finalized..
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                                <h3 className="mt-70">{CoachingDetails?.title} benefits</h3>
                                <p>A {CoachingDetails?.title} isn't merely a document; it's a key to unlocking a world of opportunities and experiences. With its myriad benefits, a residence visa opens, Here's a closer look at the remarkable advantages that a residence visa brings:</p>
                                <div className="row align-items-center mt-10">
                                    <div className="col-lg-6 mt-30">
                                        <Image src={eImg} alt="" />
                                    </div>
                                    <div className="col-lg-6 mt-30">
                                        <ul className="single-content-list list-unstyled pl-25">
                                            <li><Image src={eImg2} alt="" />Cultural Enrichmen</li>
                                            <li><Image src={eImg2} alt="" />Language Proficiency</li>
                                            <li><Image src={eImg2} alt="" />Quality of Life</li>
                                            <li><Image src={eImg2} alt="" />Career Opportunities</li>
                                            <li><Image src={eImg2} alt="" />Business Setup</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <NewsLatter />
            <ContactSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default CoachingSinglePage;
