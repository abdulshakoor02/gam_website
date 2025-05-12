import React, { Fragment } from 'react';
import Link from 'next/link'
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle'
import ContactSection from '../../components/ContactSection';
import NewsLatter from '../../components/NewsLatter/NewsLatter';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import icon from '/public/images/icon/hand.svg'
import Image from 'next/image';


const ErrorPage = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <Fragment>
            <div className='page-wrapper'>
                <Header />
                <PageTitle pageTitle='404' pagesub={'404'} />
                <div className="error-page">
                    <div className="container not-found-content">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="contant-wrapper text-center">
                                    <div className="error-page__text">
                                        <h2>404</h2>
                                    </div>
                                    <div className="error-page__content mb-50">
                                        <h2>Hi <Image draggable="false" role="img" className="emoji" alt="" src={icon} /> Sorry We Can’t Find That Page!</h2>
                                        <p>Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>

                                        <div className="error-page-button">
                                            <Link onClick={ClickHandler} className="thm-btn" href="/">Go Back Home</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <NewsLatter />
                <ContactSection />
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default ErrorPage;

