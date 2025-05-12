import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import CoachingSection from '../../components/CoachingSection/CoachingSection';
import ContactSection from '../../components/ContactSection';
import PartnerSection from '../../components/PartnerSection';
import NewsLatter from '../../components/NewsLatter/NewsLatter';
import Footer from '../../components/footer/Footer';

const CoachingPage = (props) => {

    return (
        <Fragment>
            <Header />
            <PageTitle pageTitle={'Coaching'} pagesub={'Coaching'} />
            <CoachingSection />
            <PartnerSection />
            <NewsLatter />
            <ContactSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default CoachingPage;
