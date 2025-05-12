import React from 'react'
import Link from 'next/link'
import icon1 from '/public/images/icon/f_call.svg'
import icon2 from '/public/images/icon/f_mail.svg'
import icon3 from '/public/images/icon/card_img.png'
import Services from '../../api/service'
import CountryList from '../../api/country'
import Image from 'next/image'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Footer = (props) => {
    return (
        <footer className="site-footer gray-bg pt-65">
            <div className="container">
                <div className="row mt-none-30 pb-60">
                    <div className="col-lg-3 mt-30 col-md-6 footer__custom-col">
                        <div className="footer__widget">
                            <h3 className="widget-title">Do you have questions or went more information? Contact us now</h3>
                            <ul className="footer__cta list-unstyled mt-50">
                                <li className="ul_li"><span><Image src={icon1} alt="" /></span>+91590 088 55
                                </li>
                                <li className="ul_li"><span><Image src={icon2} alt="" /></span>e.visa@gmail.com
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-30 col-md-6 footer__custom-col">
                        <div className="footer__widget">
                            <h3 className="widget-title">Explore Link</h3>
                            <ul className="footer__links list-unstyled">
                                <li><Link onClick={ClickHandler} href="/about"><span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13"
                                    viewBox="0 0 13 13" fill="none">
                                    <path d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                                        fill="#B1B4BA" />
                                </svg></span>About Us</Link></li>
                                <li><Link onClick={ClickHandler} href="/blog"><span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13"
                                    viewBox="0 0 13 13" fill="none">
                                    <path d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                                        fill="#B1B4BA" />
                                </svg></span>Blog</Link></li>
                                <li><Link onClick={ClickHandler} href="/testimonial"><span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13"
                                    viewBox="0 0 13 13" fill="none">
                                    <path d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                                        fill="#B1B4BA" />
                                </svg></span>Testimonials</Link></li>
                                <li><Link onClick={ClickHandler} href="/contact"><span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13"
                                    viewBox="0 0 13 13" fill="none">
                                    <path d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                                        fill="#B1B4BA" />
                                </svg></span>Terms & Conditions</Link></li>
                                <li><Link onClick={ClickHandler} href="/contact"><span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13"
                                    viewBox="0 0 13 13" fill="none">
                                    <path d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                                        fill="#B1B4BA" />
                                </svg></span>Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-30 col-md-6 footer__custom-col">
                        <div className="footer__widget">
                            <h3 className="widget-title">Services</h3>
                            <ul className="footer__links list-unstyled">
                                {Services.slice(0, 6).map((service, srv) => (
                                    <li key={srv}>
                                        {service.title ?
                                            <Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${service.slug}`}><span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13"
                                                viewBox="0 0 13 13" fill="none">
                                                <path d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                                                    fill="#B1B4BA" />
                                            </svg></span>{service.title}</Link>
                                            : ''}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-30 col-md-6 footer__custom-col">
                        <div className="footer__widget">
                            <h3 className="widget-title">Our branches</h3>
                            <ul className="footer__links list-unstyled">
                                {CountryList.slice(0, 5).map((country, cnt) => (
                                    <li key={cnt}><Link onClick={ClickHandler} href={'/country-single/[slug]'} as={`/country-single/${country.slug}`}><span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13"
                                        viewBox="0 0 13 13" fill="none">
                                        <path d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                                            fill="#B1B4BA" />
                                    </svg></span>{country.title}</Link></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer__copyright ul_li_between">
                    <div className="footer__copyright-text mt-15">
                        Copyright © 2024 e.visa All rights reserved.
                    </div>
                    <div className="footer__copyright-img mt-20">
                        <Image src={icon3} alt="" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;