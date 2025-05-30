import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import FaqSection from '../../components/FaqSection/FaqSection';
import ContactSection from '../../components/ContactSection';
import NewsLatter from '../../components/NewsLatter/NewsLatter';
import Footer from '../../components/footer/Footer';

const FaqPage = (props) => {

    return (
        <Fragment>
            <Header />
            <PageTitle pageTitle={'FAQ’s'} pagesub={'FAQ’s'} />
            <FaqSection/>
            <NewsLatter />
            <ContactSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default FaqPage;
