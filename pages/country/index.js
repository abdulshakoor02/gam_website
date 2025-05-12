import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import CountrySection from '../../components/CountrySection/CountrySection';
import ContactSection from '../../components/ContactSection';
import PartnerSection from '../../components/PartnerSection';
import NewsLatter from '../../components/NewsLatter/NewsLatter';
import Footer from '../../components/footer/Footer';

const CountryPage = (props) => {

    return (
        <Fragment>
            <Header />
            <PageTitle pageTitle={'Country'} pagesub={'Country'} />
            <CountrySection pClass={'pb-0'}/>
            <PartnerSection />
            <NewsLatter />
            <ContactSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default CountryPage;
