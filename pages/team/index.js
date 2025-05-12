import React, { Fragment } from 'react';
import Link from "next/link";
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Teams from '../../api/team'
import PartnerSection from '../../components/PartnerSection';
import ContactSection from '../../components/ContactSection';
import NewsLatter from '../../components/NewsLatter/NewsLatter';
import Image from 'next/image';


const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const TeamPage = (props) => {

    return (
        <Fragment>
            <Header />
            <PageTitle pageTitle={'Teams'} pagesub={'team'} />
            <section className="team pt-120 pb-130 bg_img" style={{ backgroundImage: `url(${'/images/bg/team_bg.jpg'})` }}>
                <div className="container">
                    <div className="sec-title text-center mb-65">
                        <h2 className="mb-40 wow skewIn">Our trusted immigration <br /> <span> support team</span></h2>
                        <p>At the heart of our commitment to providing exceptional <br /> immigration solutions stands</p>
                    </div>
                    <div className="row mt-none-30">
                        {Teams.slice(0, 8).map((team, tm) => (
                            <div className="col-xl-3 col-lg-4 col-md-6 mt-30" key={tm}>
                                <div className="xb-team text-center">
                                    <div className="xb-item--inner" data-parallax='{"scale" : 1}'>
                                        <div className="xb-item--img">
                                            <Image src={team.tImg} alt="" />
                                        </div>
                                        <div className="xb-item--holder">
                                            <h3 className="xb-item--name"><Link onClick={ClickHandler} href={'/team-single/[slug]'} as={`/team-single/${team.slug}`}>{team.name}</Link></h3>
                                            <span className="xb-item--designation">{team.title}</span>
                                        </div>
                                        <ul className="xb-item--social list-unstyled">
                                            <li><Link onClick={ClickHandler} href={'/team-single/[slug]'} as={`/team-single/${team.slug}`}><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link onClick={ClickHandler} href={'/team-single/[slug]'} as={`/team-single/${team.slug}`}><i className="fab fa-linkedin-in"></i></Link></li>
                                            <li><Link onClick={ClickHandler} href={'/team-single/[slug]'} as={`/team-single/${team.slug}`}><i className="fab fa-facebook-f"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <PartnerSection />
            <NewsLatter />
            <ContactSection />
            <Footer />
            <Scrollbar />
        </Fragment >
    )
};
export default TeamPage;
