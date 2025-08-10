import React, { Fragment } from 'react';
import Link from "next/link";
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import ContactSection from '../../components/ContactSection';
import NewsLatter from '../../components/NewsLatter/NewsLatter';
import Footer from '../../components/footer/Footer';
import cimg1 from '/public/images/country/img_01.png'
import cimg2 from '/public/images/country/img_02.png'
import cimg3 from '/public/images/country/img_03.png'
import contactHero from '/public/images/contact/contact-hero.jpg'
import Image from 'next/image';


const ContactPage = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <Fragment>
            <Header />
            <PageTitle pageTitle={'Contact'} pagesub={'Contact'} />
            <section className="contact pt-120 pb-120">
                <div className="container">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                        Your Journey to Global Opportunities Starts Here
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        At Go Abroad Migration, we are dedicated to making your international dreams a reality.
                        With years of expertise in immigration and visa consulting, we have helped thousands
                        of students and professionals successfully navigate the complex process of studying
                        and working abroad.

                        <Image
                            style={{ paddingTop: '30px', paddingBottom: '20px' }}
                            src={contactHero}
                            alt="International Education and Migration"
                            className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                        />
                    </p>
                </div>
            </section>
            <NewsLatter />
            <ContactSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default ContactPage;
