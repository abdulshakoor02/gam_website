import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import icon1 from '/public/images/icon/star-2.svg'
import icon4 from '/public/images/icon/search.svg'
import icon5 from '/public/images/icon/us_flag.png'
import icon6 from '/public/images/icon/arrow_down.svg'
import logo from '/public/images/logo/logo.svg'
import MobileMenu from '../MobileMenu/MobileMenu'
import Image from 'next/image';

const Header3 = (props) => {

    const [searchActive, setSearchState] = useState(false);
    const [mobailActive, setMobailState] = useState(false);
    const [sitebarActive, setSitebarState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <header className="site-header header-style-three">
            <div className={`header__wrap stricky  ${isSticky ? 'stricked-menu stricky-fixed' : ''}`}>
                <div className="container">
                    <div className="header__inner ul_li_between">
                        <div className="header__logo">
                            <Link onClick={ClickHandler} href="/"><Image src={logo} alt="" /></Link>
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
                            <div className="header__language">
                                <ul>
                                    <li><Link onClick={ClickHandler} href="/" className="lang-btn">
                                        <div className="flag"><Image src={icon5} alt="" /></div>
                                        English
                                        <div className="arrow_down"><Image src={icon6} alt="" /></div>
                                    </Link>
                                        <ul className="lang_sub_list">
                                            <li><Link onClick={ClickHandler} href="/">English</Link></li>
                                            <li><Link onClick={ClickHandler} href="/">Arabic</Link></li>
                                            <li><Link onClick={ClickHandler} href="/">Bangla</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="header__action ul_li">
                            <button className="header__search header-search-btn" onClick={() => setSearchState(!searchActive)}>
                                <Image src={icon4} alt="" />
                            </button>
                            <button className="header__bar offcanvas-sidebar-btn" onClick={() => setSitebarState(!sitebarActive)}>
                                <div className="header__bar-icon">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </button>
                        </div>
                        <div className="xb-hamburger-menu">
                            <div className="xb-nav-mobile">
                                <div className="xb-nav-mobile-button" onClick={() => setMobailState(!mobailActive)}><i className="fal fa-bars"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="xb-header-wrap">
                <div className={`xb-header-menu ${mobailActive ? "active" : ""}`}>
                    <div className="xb-header-menu-scroll">
                        <div className="xb-menu-close xb-hide-xl xb-close" onClick={() => setMobailState(!mobailActive)}></div>
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

            <div className={`header-search-form-wrapper ${searchActive ? "open" : ""}`}>
                <div className="xb-search-close xb-close" onClick={() => setSearchState(!searchActive)}></div>
                <div className="header-search-container">
                    <form role="search" className="search-form" onSubmit={SubmitHandler}>
                        <input type="search" className="search-field" placeholder="Search …" name="s" />
                    </form>
                </div>
            </div>
            <div className={`offcanvas-sidebar ${sitebarActive ? "active" : ""}`}>
                <div className="sidebar-menu-close">
                    <button className="xb-close" onClick={() => setSitebarState(false)}></button>
                </div>
                <div className="sidebar-top mb-130">
                    <div className="sidebar-logo mb-40">
                        <a href="index.html">
                            <Image src={logo} alt="logo"/>
                        </a>
                    </div>
                    <div className="sidebar-content">
                        Book your Dream Vacation Today and Let the Journey of a Lifetime Begin & Create Memory
                    </div>
                </div>

                <div className="sidebar-contact-info mb-150">
                    <h4 className="sidebar-heading">Contact Information</h4>
                    <ul className="sidebar-info-list list-unstyled">
                        <li><span><Image src={icon1} alt=""/></span>Wasington SY, UK, NY 12099</li>
                        <li><Link onClick={ClickHandler} href="/"><span><Image src={icon1} alt=""/></span>+81 800 123 06 78</Link></li>
                        <li><Link onClick={ClickHandler} href="/"><span><Image src={icon1} alt=""/></span>evisamail@gmail.com</Link></li>
                    </ul>
                </div>

                <div className="sidebar-newsletter">
                    <h4 className="sidebar-heading">Get Regular Updated</h4>
                    <form className="sidebar-newsletter-from" onSubmit={SubmitHandler}>
                        <input type="text" placeholder="Enter your email"/>
                            <button><i className="fas fa-paper-plane"></i></button>
                    </form>
                </div>
            </div>
            <div className={`body-overlay ${sitebarActive ? "active" : ""}`}></div>
            <div className={`body-overlay ${searchActive ? "active" : ""}`}></div>
        </header>
    )
}

export default Header3;