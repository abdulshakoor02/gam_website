import React, { Fragment } from 'react';
import Header2 from '../../components/Header2/Header2';
import Hero2 from '../../components/hero2/hero2';
import FeaturesSection from '../../components/student-visa-components/FeaturesSection/FeaturesSection';
import About from '../../components/student-visa-components/about/about';
import FeaturesSectionS2 from '../../components/student-visa-components/FeaturesSectionS2/FeaturesSectionS2';
import ServiceSection from '../../components/student-visa-components/ServiceSection/ServiceSection';
import CtaSection from '../../components/student-visa-components/CtaSection/CtaSection';
import StudentFunFact from '../../components/student-visa-components/StudentFunFact/StudentFunFact';
import CountrySection from '../../components/student-visa-components/CountrySection/CountrySection';
import StudentFaqSection from '../../components/student-visa-components/StudentFaqSection/StudentFaqSection';
import StudentTestimonial from '../../components/student-visa-components/StudentTestimonial/StudentTestimonial';
import StudentBlogSection from '../../components/student-visa-components/StudentBlogSection/StudentBlogSection';
import TopInstitutions from '../../components/student-visa-components/TopInstitutions/TopInstitutions';
import StudentContactSection from '../../components/student-visa-components/StudentContactSection/StudentContactSection';
import StudentFooter from '../../components/student-visa-components/StudentFooter/StudentFooter';
import Scrollbar from '../../components/scrollbar/scrollbar';


const HomePage2 = () => {

    return (
        <Fragment>
            <div className='demo-studient-visa'>
                <Header2 />
                <Hero2 />
                <FeaturesSection />
                <About />
                <FeaturesSectionS2 />
                <ServiceSection />
                <CtaSection />
                <StudentFunFact />
                <CountrySection />
                <StudentFaqSection />
                <StudentTestimonial />
                <StudentBlogSection />
                <TopInstitutions />
                <StudentContactSection />
                <StudentFooter /> 
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default HomePage2;