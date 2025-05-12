import React, { Fragment } from 'react';
import Header3 from '../../components/header3/Header3';
import Hero3 from '../../components/hero3/hero3';
import BookingForm from '../../components/travel-agency-components/BookingForm/BookingForm';
import About from '../../components/travel-agency-components/about/about';
import PopularPakage from '../../components/travel-agency-components/PopularPakage/PopularPakage';
import CountrySection from '../../components/travel-agency-components/CountrySection/CountrySection';
import DestinatioSection from '../../components/travel-agency-components/DestinatioSection/DestinatioSection';
import CategorySection from '../../components/travel-agency-components/CategorySection/CategorySection';
import TravelTestimonial from '../../components/travel-agency-components/TravelTestimonial/TravelTestimonial';
import TravelBlogSection from '../../components/travel-agency-components/TravelBlogSection/TravelBlogSection';
import PartnerSection from '../../components/travel-agency-components/PartnerSection';
import CtaSection from '../../components/travel-agency-components/CtaSection/CtaSection';
import TravelBlogFooter from '../../components/travel-agency-components/TravelBlogFooter/TravelBlogFooter';
import Scrollbar from '../../components/scrollbar/scrollbar';


const HomePage3 = () => {

    return (
        <Fragment>
            <div className='demo-travel-agency'>
                <Header3 />
                <Hero3 />
                <BookingForm />
                <About />
                <PopularPakage />
                <CountrySection />
                <DestinatioSection />
                <CategorySection />
                <TravelTestimonial />
                <TravelBlogSection />
                <PartnerSection />
                <CtaSection />
                <TravelBlogFooter />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default HomePage3;