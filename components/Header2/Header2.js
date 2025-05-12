import React, { useState } from 'react'
import Link from 'next/link'
import logo from '/public/images/logo/logo-2.svg'
import logo2 from '/public/images/logo/logo-black.svg'
import MobileMenu from '../MobileMenu/MobileMenu';
import icon1 from '/public/images/icon/mail-2.svg'
import icon2 from '/public/images/icon/h_call.svg'
import icon3 from '/public/images/icon/h_search.svg'
import Image from 'next/image';

const Header2 = (props) => {
    const [mobailActive, setMobailState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const SubmitHandler = (e) => {
        e.preventDefault()
    }
    

    return (
        <header className="site-header header-style-two">
            <div className="xb-header-top">
                <div className="container">
                    <div className="xb-item--inner ul_li_between">
                        <div className="header__logo">
                            <Link onClick={ClickHandler} href="/"><Image src={logo} alt="" /></Link>
                        </div>
                        <ul className="xb-item--info ul_li">
                            <li><span className="gradient-bg"><Image src={icon1} alt="" /></span>infoe.visa@gmail.com</li>
                            <li><span className="gradient-bg"><Image src={icon2} alt="" /></span>+91-2054875454</li>
                        </ul>
                        <ul className="xb-item--social ul_li">
                            <li><Link onClick={ClickHandler} href="/"><i className="fab fa-facebook-f"></i></Link></li>
                            <li><Link onClick={ClickHandler} href="/"><i className="fab fa-instagram"></i></Link></li>
                            <li><Link onClick={ClickHandler} href="/"><i className="fab fa-linkedin-in"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="header__wrap stricky original">
                <div className="container">
                    <div className="header__inner ul_li_between">
                        <div className="header__logo">
                            <Link onClick={ClickHandler} href="/"><Image src={logo2} alt="" /></Link>
                        </div>
                        <div className="main-menu__wrap ul_li navbar navbar-expand-lg">
                            <nav className="main-menu collapse navbar-collapse">
                                <ul>
                                    <li className="menu-item-has-children active"><Link onClick={ClickHandler} href="/"><span>Home</span></Link>
                                        <ul className="submenu">
                                            <li><Link onClick={ClickHandler} href="/"><span>Immigration</span></Link></li>
                                            <li><Link onClick={ClickHandler} href="/home-studient-visa"><span>Studient Visa</span></Link></li>
                                            <li><Link onClick={ClickHandler} href="/home-travel-agency"><span>Travel Agency</span></Link></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <Link onClick={ClickHandler} href="/"><span>Pages</span></Link>
                                        <ul className="submenu">
                                            <li><Link onClick={ClickHandler} href="/services"><span>Services</span></Link></li>
                                            <li><Link onClick={ClickHandler} href="/service-single/Tourist-Visa"><span>Service Details</span></Link></li>
                                            <li><Link onClick={ClickHandler} href="/coaching"><span>Coaching</span></Link></li>
                                            <li><Link onClick={ClickHandler} href="/coaching-single/Take-IELTS"><span>Coaching Details</span></Link></li>
                                            <li><Link onClick={ClickHandler} href="/visa"><span>Visa</span></Link></li>
                                            <li><Link onClick={ClickHandler} href="/visa-single/Commercial-Visa"><span>Visa Details</span></Link></li>
                                            <li><Link onClick={ClickHandler} href="/team"><span>Team</span></Link></li>
                                            <li><Link onClick={ClickHandler} href="/team-single/Esther-Howard"><span>Team Details</span></Link></li>
                                            <li><Link onClick={ClickHandler} href="/testimonial"><span>Testimonials</span></Link></li>
                                            <li><Link onClick={ClickHandler} href="/faq"><span>FAQ</span></Link></li>
                                            <li><Link onClick={ClickHandler} href="/404"><span>404</span></Link></li>
                                        </ul>
                                    </li>
                                    <li><Link onClick={ClickHandler} href="/about"><span>About us</span></Link></li>
                                    <li className="menu-item-has-children">
                                        <Link onClick={ClickHandler} href="/"><span>Country</span></Link>
                                        <ul className="submenu">
                                            <li><Link onClick={ClickHandler} href="/country"><span>Country</span></Link></li>
                                            <li><Link onClick={ClickHandler} href="/country-single/Australia"><span>Country Details</span></Link></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <Link onClick={ClickHandler} href="/"><span>Blog</span></Link>
                                        <ul className="submenu">
                                            <li><Link onClick={ClickHandler} href="/blog"><span>Blog</span></Link></li>
                                            <li><Link onClick={ClickHandler} href="/blog-single/Cultural-adjustment-thriving-in-a-new-country"><span>Blog Details</span></Link></li>
                                        </ul>
                                    </li>
                                    <li><Link onClick={ClickHandler} href="/contact"><span>Contact</span></Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="xb-hamburger-menu">
                            <div className="xb-nav-mobile">
                                <div className="xb-nav-mobile-button" onClick={() => setMobailState(!mobailActive)}><i className="fal fa-bars"></i></div>
                            </div>
                        </div>
                        <div className="header-search">
                            <span><Image src={icon3} alt="" /></span>
                            <input type="text" placeholder="what're you looking for ?" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="xb-header-wrap">
                <div className={`xb-header-menu ${mobailActive ? "active" : ""}`}>
                    <div className="xb-header-menu-scroll">
                        <div className="xb-menu-close xb-hide-xl xb-close" onClick={() => setMobailState(false)}></div>
                        <div className="xb-logo-mobile xb-hide-xl">
                            <Link onClick={ClickHandler} href="/" rel="home"><Image src={logo} alt="" /></Link></div>
                        <div className="xb-header-mobile-search xb-hide-xl">
                            <form role="search" onSubmit={SubmitHandler}>
                                <input type="text" placeholder="Search..." name="s" className="search-field" />
                                <button type="submit" className="search-submit">
                                </button>
                            </form>
                        </div>
                        <nav className="xb-header-nav">
                            <MobileMenu />
                        </nav>
                    </div>
                </div>
                <div className="xb-header-menu-backdrop" onClick={() => setMobailState(false)}></div>
            </div>
        </header>
    )
}

export default Header2;