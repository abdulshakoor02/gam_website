import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useRouter } from 'next/router'
import Link from "next/link";
import Teams from '../../api/team'
import NewsLatter from '../../components/NewsLatter/NewsLatter';
import ContactSection from '../../components/ContactSection';
import Footer from '../../components/footer/Footer';
import CountUp from 'react-countup';
import star from '/public/images/icon/star.svg'
import icon1 from '/public/images/icon/c_user.svg'
import icon2 from '/public/images/icon/c_mail.svg'
import tdImg from '/public/images/team/team-sinlge.png'
import Image from 'next/image';


const TeamSinglePage = (props) => {
    const router = useRouter()

    const TeamDetails = Teams.find(item => item.slug === router.query.slug)

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const SubmitHandler = (e) => {
        e.preventDefault()
    }


    return (
        <Fragment>
            <Header />
            <PageTitle pageTitle={TeamDetails?.name} pagesub={'Team'} />
            <section className="team-signle pt-120 pb-120">
                <div className="container">
                    <div className="team-single__inner">
                        <div className="team-single__wrap">
                            <div className="row align-items-end">
                                <div className="col-xl-7 col-lg-6">
                                    <div className="team-single__img text-center">
                                        <Image src={tdImg} alt="" />
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-6">
                                    <div className="team-single__info">
                                        <h3 className="title">{TeamDetails?.name}</h3>
                                        <ul className="info list-unstyled mb-60">
                                            <li><strong>Responsibility:</strong>{TeamDetails?.title}</li>
                                            <li><strong>Experience:</strong>18 Years</li>
                                            <li><strong>Email:</strong>nathaniel@example.com</li>
                                            <li><strong>Phone::</strong>+91590 088 55</li>
                                        </ul>
                                        <div className="team-single__social">
                                            <h4>Social Media</h4>
                                            <ul className="social ul_li list-unstyled">
                                                <li><Link onClick={ClickHandler} href="/"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link onClick={ClickHandler} href="/"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link onClick={ClickHandler} href="/"><i className="fab fa-linkedin-in"></i></Link></li>
                                                <li><Link onClick={ClickHandler} href="/"><i className="fab fa-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="team-single__content">
                            <h3>Personal experience</h3>
                            <p>Since embarking on my journey as an Immigration Visa Specialist at e.visa in 2005 my professional expertise has expanded across a vast spectrum of intricacies within this dynamic field. As a dedicated immigration visa specialist, my focal point revolves around harnessing a multitude of skills to extend comprehensive guidance and support to individuals embarking.. </p>
                            <p>So, welcome to this expedition—an expedition fueled by dedication, a panoramic view of expertise, and an unrelenting determination to escort individuals through the intricate passages of immigration. This journey shares a common thread with web design—precision. Just as web designers carefully .</p>
                            <h3>Professional skills</h3>
                            <p>As an Immigration Visa Specialist, my career has been built upon a solid foundation of expertise and proficiency in guiding individuals through the intricate landscape of immigration.</p>
                            <div className="row mt-none-30 mb-80">
                                <div className="col-lg-3 col-md-6 mt-30">
                                    <div className="team-skills">
                                        <div className="xb-item--inner">
                                            <h2 className="xb-item--number"><span className="xbo" data-count="90"><CountUp end={90} enableScrollSpy /></span><span className="suffix">%</span></h2>
                                            <h4 className="xb-item--title">Communication Skills</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mt-30">
                                    <div className="team-skills style-2">
                                        <div className="xb-item--inner">
                                            <h2 className="xb-item--number"><span className="xbo" data-count="80"><CountUp end={80} enableScrollSpy /></span><span className="suffix">%</span></h2>
                                            <h4 className="xb-item--title">Problem-Solving</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mt-30">
                                    <div className="team-skills style-3">
                                        <div className="xb-item--inner">
                                            <h2 className="xb-item--number"><span className="xbo" data-count="89"><CountUp end={89} enableScrollSpy /></span><span className="suffix">%</span></h2>
                                            <h4 className="xb-item--title">Cultural Sensitivity</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mt-30">
                                    <div className="team-skills style-4">
                                        <div className="xb-item--inner">
                                            <h2 className="xb-item--number"><span className="xbo" data-count="70"><CountUp end={70} enableScrollSpy /></span><span className="suffix">%</span></h2>
                                            <h4 className="xb-item--title">Passion for Helping</h4>
                                        </div>
                                    </div>
                                </div>
                                <span id="counter" className='d-none' />
                            </div>
                            <h3>Career guidelines</h3>
                            <p>Education and Specialization: Begin your journey by obtaining a relevant educational foundation. Pursue a degree in fields such as law, international relations, or immigration studies.</p>
                            <ul className="list-unstyled">
                                <li><span><Image src={star} alt="" /></span>Strong attention to detail</li>
                                <li><span><Image src={star} alt="" /></span>Excellent communication skills</li>
                                <li><span><Image src={star} alt="" /></span>Ability to work under pressure</li>
                                <li><span><Image src={star} alt="" /></span>Good organizational skills</li>
                                <li><span><Image src={star} alt="" /></span>Cultural sensitivity</li>
                                <li><span><Image src={star} alt="" /></span>Language proficiency</li>
                            </ul>
                            <div className="team-single__contact mt-100">
                                <h3 className="title">Contact Me</h3>
                                <p>Your email address will not be published. Required fields are marked *</p>
                                <form className="contact-from" onSubmit={SubmitHandler}>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="xb-item--field">
                                                <label for="name">Name</label>
                                                <div className="field-inner pos-rel">
                                                    <span className="icon"><Image src={icon1} alt="" /></span>
                                                    <input id="name" type="text" placeholder="Goladria Gomez" required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="xb-item--field">
                                                <label for="email">Email</label>
                                                <div className="field-inner pos-rel">
                                                    <span className="icon"><Image src={icon2} alt="" /></span>
                                                    <input id="email" type="email" placeholder="e.visa@services.com" required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="xb-item--field">
                                                <label for="message2">Message</label>
                                                <div className="field-inner pos-rel">
                                                    <span className="icon"><Image src={icon2} alt="" /></span>
                                                    <textarea name="message" id="message2" cols="30" rows="10" placeholder="Simultaneously we had a problem..."></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-button text-center">
                                            <button className="thm-btn" type="submit">Send a Message</button>
                                        </div>
                                    </div>
                                </form>
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
export default TeamSinglePage;