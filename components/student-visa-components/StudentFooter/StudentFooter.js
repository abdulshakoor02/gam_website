import React from 'react'
import Link from 'next/link'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const StudentFooter = (props) => {
    return (
        <footer className="site-footer footer-style-two bg_img pb-90" style={{ backgroundImage: `url(${'/images/bg/footer_bg.jpg'})` }}>
            <div className="container">
                <div className="row mt-none-30">
                    <div className="col-lg-3 col-md-6 footer__custom-col mt-30">
                        <div className="footer__widget">
                            <h4>our address</h4>
                            <p>Sunshine Business park, Floor <br/> No 05A,Sector-94,Ukrine</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 footer__custom-col mt-30">
                        <div className="footer__widget">
                            <h4>OPENING HOURS</h4>
                            <p>Monday - Saturday <br/> 11:00 AM - 10:00 PM</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 footer__custom-col mt-30">
                        <div className="footer__widget">
                            <h4>off day</h4>
                            <p>Saturday <br/> 11:00 AM - 10:00 PM</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 footer__custom-col mt-30">
                        <div className="footer__widget text-lg-end">
                            <h4>follow us</h4>
                            <ul className="footer__social ul_li_right">
                                <li><Link onClick={ClickHandler} href="/home-studient-visa"><i className="fab fa-twitter"></i></Link></li>
                                <li><Link onClick={ClickHandler} href="/home-studient-visa"><i className="fab fa-facebook-f"></i></Link></li>
                                <li><Link onClick={ClickHandler} href="/home-studient-visa"><i className="fab fa-linkedin-in"></i></Link></li>
                                <li><Link onClick={ClickHandler} href="/home-studient-visa"><i className="fab fa-instagram"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <ul className="footer__nav ul_li_center">
                        <li><Link onClick={ClickHandler} href="/services">Our services</Link></li>
                        <li><Link onClick={ClickHandler} href="/about">About us</Link></li>
                        <li><Link onClick={ClickHandler} href="/home-studient-visa">How its work</Link></li>
                        <li><Link onClick={ClickHandler} href="/contact">Contact us</Link></li>
                    </ul>
                </div>
                <div className="copyright-area mt-30 ul_li_between">
                    <div className="copyright-text mt-20">
                        Copyright © 2024 e.visa. <span>All rights reserved.</span>
                    </div>
                    <ul className="footer-links ul_li_right mt-20">
                        <li><Link onClick={ClickHandler} href="/contact">Privacy Policy</Link></li>
                        <li><Link onClick={ClickHandler} href="/contact">Cookies</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default StudentFooter;