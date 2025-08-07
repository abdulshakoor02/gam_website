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
                            <h3 className="widget-title" style={{
                                fontSize: "clamp(16px, 2.2vw, 18px)",
                                fontWeight: "600",
                                lineHeight: "1.4",
                                marginBottom: "15px"
                            }}>
                                Do you have questions or need more information? Contact us now
                            </h3>
                            <ul className="footer__cta list-unstyled mt-30">
                                <li className="ul_li" style={{
                                    marginBottom: "12px",
                                    fontSize: "clamp(14px, 2vw, 16px)"
                                }}>
                                    <span style={{ marginRight: "8px" }}>
                                        <Image src={icon1} alt="" width={16} height={16} />
                                    </span>
                                    +971 504 916 720
                                </li>
                                <li className="ul_li" style={{
                                    fontSize: "clamp(14px, 2vw, 16px)"
                                }}>
                                    <span style={{ marginRight: "8px" }}>
                                        <Image src={icon2} alt="" width={16} height={16} />
                                    </span>
                                    info@goabroadmigration.com
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-30 col-md-6 footer__custom-col">
                        <div className="footer__widget">
                            <h3 className="widget-title" style={{
                                fontSize: "clamp(16px, 2.2vw, 18px)",
                                fontWeight: "600",
                                marginBottom: "15px"
                            }}>
                                Explore Link
                            </h3>
                            <ul className="footer__links list-unstyled">
                                <li style={{ marginBottom: "8px" }}>
                                    <Link onClick={ClickHandler} href="/about" style={{
                                        fontSize: "clamp(14px, 2vw, 16px)",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px"
                                    }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                            viewBox="0 0 13 13" fill="none">
                                            <path d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                                                fill="#B1B4BA" />
                                        </svg>
                                        About Us
                                    </Link>
                                </li>
                                <li style={{ marginBottom: "8px" }}>
                                    <Link onClick={ClickHandler} href="/blog" style={{
                                        fontSize: "clamp(14px, 2vw, 16px)",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px"
                                    }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                            viewBox="0 0 13 13" fill="none">
                                            <path d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                                                fill="#B1B4BA" />
                                        </svg>
                                        Blog
                                    </Link>
                                </li>
                                <li style={{ marginBottom: "8px" }}>
                                    <Link onClick={ClickHandler} href="/testimonial" style={{
                                        fontSize: "clamp(14px, 2vw, 16px)",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px"
                                    }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                            viewBox="0 0 13 13" fill="none">
                                            <path d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                                                fill="#B1B4BA" />
                                        </svg>
                                        Testimonials
                                    </Link>
                                </li>
                                <li style={{ marginBottom: "8px" }}>
                                    <Link onClick={ClickHandler} href="/contact" style={{
                                        fontSize: "clamp(14px, 2vw, 16px)",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px"
                                    }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                            viewBox="0 0 13 13" fill="none">
                                            <path d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                                                fill="#B1B4BA" />
                                        </svg>
                                        Terms & Conditions
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={ClickHandler} href="/contact" style={{
                                        fontSize: "clamp(14px, 2vw, 16px)",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px"
                                    }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                            viewBox="0 0 13 13" fill="none">
                                            <path d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                                                fill="#B1B4BA" />
                                        </svg>
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-30 col-md-6 footer__custom-col">
                        <div className="footer__widget">
                            <h3 className="widget-title" style={{
                                fontSize: "clamp(16px, 2.2vw, 18px)",
                                fontWeight: "600",
                                marginBottom: "15px"
                            }}>
                                Services
                            </h3>
                            <ul className="footer__links list-unstyled">
                                {Services.slice(0, 6).map((service, srv) => (
                                    <li key={srv} style={{ marginBottom: "8px" }}>
                                        {service.title ?
                                            <Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${service.slug}`} style={{
                                                fontSize: "clamp(14px, 2vw, 16px)",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "8px"
                                            }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                    viewBox="0 0 13 13" fill="none">
                                                    <path d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                                                        fill="#B1B4BA" />
                                                </svg>
                                                {service.title}
                                            </Link>
                                            : ''}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-30 col-md-6 footer__custom-col">
                        <div className="footer__widget">
                            <h3 className="widget-title" style={{
                                fontSize: "clamp(16px, 2.2vw, 18px)",
                                fontWeight: "600",
                                marginBottom: "15px"
                            }}>
                                Our branches
                            </h3>
                            <ul className="footer__links list-unstyled">
                                {CountryList.slice(0, 5).map((country, cnt) => (
                                    <li key={cnt} style={{ marginBottom: "8px" }}>
                                        <Link onClick={ClickHandler} href={'/country-single/[slug]'} as={`/country-single/${country.slug}`} style={{
                                            fontSize: "clamp(14px, 2vw, 16px)",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "8px"
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                viewBox="0 0 13 13" fill="none">
                                                <path d="M6.5 0C6.72067 3.49437 9.5056 6.27934 13 6.5C9.5056 6.72067 6.72067 9.5056 6.5 13C6.27934 9.5056 3.49437 6.72067 0 6.5C3.49437 6.27934 6.27934 3.49437 6.5 0Z"
                                                    fill="#B1B4BA" />
                                            </svg>
                                            {country.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer__copyright ul_li_between" style={{
                    flexDirection: "column",
                    textAlign: "center",
                    gap: "15px"
                }}>
                    <div className="footer__copyright-text mt-15" style={{
                        fontSize: "clamp(12px, 1.8vw, 14px)"
                    }}>
                        Copyright © 2024 Go Abroad Migration. All rights reserved.
                    </div>
                    <div className="footer__copyright-img" style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Image src={icon3} alt="" width={120} height={40} />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;