import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useRouter } from 'next/router'
import CountryList from '../../api/country'
import ServiceSidebar from './sidebar';
import NewsLatter from '../../components/NewsLatter/NewsLatter';
import ContactSection from '../../components/ContactSection';
import Footer from '../../components/footer/Footer';
import eImg1 from '/public/images/country/single.jpg'
import eImg from '/public/images/icon/global.svg'
import eImg2 from '/public/images/icon/profile-2user-2.svg'
import eImg3 from '/public/images/icon/teacher.svg'
import eImg4 from '/public/images/icon/home-trend-up.svg'
import eImg5 from '/public/images/country/single2.jpg'
import eImg6 from '/public/images/icon/star.svg'
import Image from 'next/image';

const CountrySinglePage = (props) => {
    const router = useRouter()

    const CountryDetails = CountryList.find(item => item.slug === router.query.slug)

    return (
        <Fragment>
            <Header />
            <PageTitle pageTitle={CountryDetails?.title} pagesub={'Country'} />
            <section className="coaching-single pt-120 pb-130">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <ServiceSidebar />
                        </div>
                        <div className="col-lg-8">
                            <div className="single-content">
                                <h3>The {CountryDetails?.title}</h3>
                                <h4>Score 8+ Bands with Certified and experienced e.visa Coach</h4>
                                <p>When it comes to world-class education, {CountryDetails?.title} stands as a beacon of excellence, offering a welcoming environment, top-tier institutions, and a diverse cultural tapestry. Studying in Canada isn't just about gaining a degree. </p>
                                <p> It's about immersing yourself in an enriching educational experience that prepares you for global success. Here's a glimpse into what makes studying in Canada .</p>
                                <div className="single-img mt-35 mb-70">
                                    <Image src={eImg1} alt="" />
                                </div>
                                <h3>Why choose us?</h3>
                                <div className="single-content__feature ul_li">
                                    <div className="single-content-feature">
                                        <div className="xb-item--inner ul_li">
                                            <div className="xb-item--icon">
                                                <Image src={eImg} alt="" />
                                            </div>
                                            <h3 className="xb-item--title">Supportive Environment</h3>
                                        </div>
                                    </div>
                                    <div className="single-content-feature">
                                        <div className="xb-item--inner color-2 ul_li">
                                            <div className="xb-item--icon">
                                                <Image src={eImg2} alt="" />
                                            </div>
                                            <h3 className="xb-item--title">Student-Friendly Policies</h3>
                                        </div>
                                    </div>
                                    <div className="single-content-feature">
                                        <div className="xb-item--inner color-3 ul_li">
                                            <div className="xb-item--icon">
                                                <Image src={eImg3} alt="" />
                                            </div>
                                            <h3 className="xb-item--title">Quality Higher Educations</h3>
                                        </div>
                                    </div>
                                    <div className="single-content-feature">
                                        <div className="xb-item--inner color-4 ul_li">
                                            <div className="xb-item--icon">
                                                <Image src={eImg4} alt="" />
                                            </div>
                                            <h3 className="xb-item--title">Opportunities for Growth</h3>
                                        </div>
                                    </div>
                                </div>

                                <h3>Top institutes</h3>
                                <p>Canada's educational landscape shines with a constellation of top-tier universities that have garnered global recognition for their academic prowess, research contributions, and commitment to innovation. </p>
                                <div className="row align-items-center mt-10">
                                    <div className="col-lg-6 mt-30">
                                        <Image src={eImg5} alt="" />
                                    </div>
                                    <div className="col-lg-6 mt-30">
                                        <ul className="single-content-list list-unstyled pl-25">
                                            <li><Image src={eImg6} alt="" />University of Toronto</li>
                                            <li><Image src={eImg6} alt="" />University of British Columbia</li>
                                            <li><Image src={eImg6} alt="" />University of Montreal</li>
                                            <li><Image src={eImg6} alt="" />University of Waterloo</li>
                                            <li><Image src={eImg6} alt="" />Queen's University</li>
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
export default CountrySinglePage;
