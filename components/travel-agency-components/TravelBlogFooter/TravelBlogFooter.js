import React from 'react'
import CountryList from '../../../api/country'
import Link from 'next/link'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const SubmitHandler = (e) => {
    e.preventDefault()
}


const TravelBlogFooter = (props) => {
    return (
        <footer className="site-footer bg-white footer-style-three pt-80 pb-70">
            <div className="container">
                <div className="footer-newsletter ul_li_between pb-45">
                    <div className="newsletter-title mb-40">
                        <span>newsletter</span>
                        <h3>Subscribe to the free newsletter to receive the <br /> latest news & case studies!</h3>
                    </div>
                    <form onSubmit={SubmitHandler} className="footer-newsletter-form mb-20">
                        <input type="text" placeholder="infomail@gmail.com" />
                        <button className="thm-btn thm-btn--trv">Subscribe</button>
                    </form>
                </div>
                <div className="xb-footer-widget-wrap ul_li">
                    <div className="footer__widget">
                        <h3 className="widget-title">Contact Information</h3>
                        <ul className="footer__links">
                            <li><Link onClick={ClickHandler} href="/about">About Us</Link></li>
                            <li><Link onClick={ClickHandler} href="/home-travel-agency">Company Profile</Link></li>
                            <li><Link onClick={ClickHandler} href="/team">Team Members</Link></li>
                            <li><Link onClick={ClickHandler} href="/contact">Support</Link></li>
                            <li><Link onClick={ClickHandler} href="/home-travel-agency">Career</Link></li>
                        </ul>
                    </div>
                    <div className="footer__widget">
                        <h3 className="widget-title">Top Destination</h3>
                        <ul className="footer__links">
                            <li><Link onClick={ClickHandler} href="/home-travel-agency">New York  Kow City</Link></li>
                            <li><Link onClick={ClickHandler} href="/home-travel-agency">London</Link></li>
                            <li><Link onClick={ClickHandler} href="/home-travel-agency">Romenia</Link></li>
                            <li><Link onClick={ClickHandler} href="/home-travel-agency">Mascot Burz</Link></li>
                            <li><Link onClick={ClickHandler} href="/home-travel-agency">Dhaka Bangladesh</Link></li>
                        </ul>
                    </div>
                    <div className="footer__widget">
                        <h3 className="widget-title">Useful Links</h3>
                        <ul className="footer__links">
                            <li><Link onClick={ClickHandler} href="/about">About Us</Link></li>
                            <li><Link onClick={ClickHandler} href="/home-travel-agency">Company Profile</Link></li>
                            <li><Link onClick={ClickHandler} href="/team">Team Members</Link></li>
                            <li><Link onClick={ClickHandler} href="/contact">Support</Link></li>
                            <li><Link onClick={ClickHandler} href="/home-travel-agency">Career</Link></li>
                        </ul>
                    </div>
                    <div className="footer__widget">
                        <h3 className="widget-title">Our branches</h3>
                        <ul className="footer__links">
                            {CountryList.slice(0, 5).map((country, cnt) => (
                                <li key={cnt}><Link onClick={ClickHandler} href={'/country-single/[slug]'} as={`/country-single/${country.slug}`}>{country.title}</Link></li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="copyright-area ul_li_between">
                    <div className="copyright-text mt-20">
                        Copyright © 2024 e.visa. <span>All rights reserved.</span>
                    </div>
                    <ul className="footer-links ul_li_right mt-20">
                        <li><Link onClick={ClickHandler} href="/contact">Terms & Conditions</Link></li>
                        <li><Link onClick={ClickHandler} href="/contact">Privacy Policy</Link></li>
                        <li><Link onClick={ClickHandler} href="/contact">Cookies</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default TravelBlogFooter;