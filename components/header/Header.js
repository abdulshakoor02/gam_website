import React, { useState, useEffect } from "react";
import Link from "next/link";
import icon1 from "/public/images/icon/n_pad.svg";
import icon2 from "/public/images/icon/time.svg";
import icon3 from "/public/images/icon/location.svg";
import icon4 from "/public/images/icon/search.svg";
import icon5 from "/public/images/icon/us_flag.png";
import icon6 from "/public/images/icon/arrow_down.svg";
import logo from "/public/images/logo/logo.svg";
import MobileMenu from "../MobileMenu/MobileMenu";
import Image from "next/image";
import { useRouter } from "next/router";
import metaData from "../../api/meta";
import Head from "next/head";

const Header = (props) => {
  const [searchActive, setSearchState] = useState(false);
  const [mobailActive, setMobailState] = useState(false);
  const [meta, setMeta] = useState({ title: "", desc: "" });
  const router = useRouter();

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    if (metaData[router.pathname]) {
      setMeta(metaData[router.pathname]);
    } else {
      setMeta(metaData["/"]);
    }
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="site-header header-style-one">
      <Head>
        <title>{meta.title || "Go Abroad Migration"}</title>
        <meta
          name="description"
          content={
            meta.description || "Immigration and visa consulting services."
          }
        />
      </Head>
      <div
        className="header__top-wrap gray-bg"
        style={{ backgroundColor: "#b9ffed" }}
      >
        <div className="container">
          <div className="header__top ul_li_between">
            <div className="header__top-cta">
              <Image src={icon1} alt="" />
              <span>Help Desk :</span> +91 590 088 55
            </div>
            <ul className="header__top-info ul_li">
              <li>
                <Image src={icon2} alt="" />
                Monday - Friday 09:00 am - 05:00 Pm
              </li>
              <li>
                <Image src={icon3} alt="" />
                456 Elm Avenue Springfield, IL 62701
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`header__wrap stricky  ${
          isSticky ? "stricked-menu stricky-fixed" : ""
        }`}
        style={{ backgroundColor: "#00cc99" }}
      >
        <div className="container">
          <div className="header__inner ul_li_between">
            <div className="header__logo">
              <Link onClick={ClickHandler} href="/">
                <Image src={logo} alt="" />
              </Link>
            </div>
            <div className="main-menu__wrap ul_li navbar navbar-expand-lg">
              <nav className="main-menu collapse navbar-collapse">
                <ul>
                  <li className="active">
                    <Link onClick={ClickHandler} href="/">
                      <span>Home</span>
                    </Link>
                    {/* 

                    <ul className="submenu">
                      <li>
                        <Link onClick={ClickHandler} href="/">
                          <span>Immigration</span>
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} href="/home-studient-visa">
                          <span>Studient Visa</span>
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} href="/home-travel-agency">
                          <span>Travel Agency</span>
                        </Link>
                      </li>
                    </ul>
*/}
                  </li>
                  <li className="menu-item-has-children">
                    <Link onClick={ClickHandler} href="/">
                      <span>Services</span>
                    </Link>
                    <ul
                      className="submenu"
                      style={{ backgroundColor: "#00cc99" }}
                    >
                      <li className="menu-item-has-children">
                        <Link
                          onClick={ClickHandler}
                          href="/canada/Express-Entry"
                        >
                          <span>Canada Visa</span>
                        </Link>

                        <ul
                          className="submenu"
                          style={{ backgroundColor: "#00cc99" }}
                        >
                          <li>
                            <Link
                              onClick={ClickHandler}
                              href="/canada/Express-Entry"
                            >
                              <span>Express Entry</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={ClickHandler}
                              href="/canada/pilot_program"
                            >
                              <span>Pilot Program</span>
                            </Link>
                          </li>

                          <li>
                            <Link onClick={ClickHandler} href="/canada/PNP">
                              <span>Provincial Nomination Program</span>
                            </Link>
                          </li>

                          <li>
                            <Link
                              onClick={ClickHandler}
                              href="/canada/Student-Visa"
                            >
                              <span>Student Visa</span>
                            </Link>
                          </li>

                          <li>
                            <Link
                              onClick={ClickHandler}
                              href="/canada/Visit-Visa"
                            >
                              <span>Visit Visa</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link
                          onClick={ClickHandler}
                          href="/australia/Express-Entry"
                        >
                          <span>Australia Visa</span>
                        </Link>

                        <ul
                          className="submenu"
                          style={{ backgroundColor: "#00cc99" }}
                        >
                          <li>
                            <Link
                              onClick={ClickHandler}
                              href="/australia/Express-Entry"
                            >
                              <span>Subclass 189/190</span>
                            </Link>
                          </li>

                          <li>
                            <Link
                              onClick={ClickHandler}
                              href="/australia/Regional-State-Nomination"
                            >
                              <span>Regional State Nomination</span>
                            </Link>
                          </li>

                          <li>
                            <Link
                              onClick={ClickHandler}
                              href="/australia/Global-Talent-Visa"
                            >
                              <span>Global Talent Visa</span>
                            </Link>
                          </li>

                          <li>
                            <Link
                              onClick={ClickHandler}
                              href="/australia/Student-Visa"
                            >
                              <span>Student Visa</span>
                            </Link>
                          </li>

                          <li>
                            <Link
                              onClick={ClickHandler}
                              href="/australia/Visit-Visa"
                            >
                              <span>Visit Visa</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      {/* 

                      <li>
                        <Link onClick={ClickHandler} href="/services">
                          <span>Services</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={ClickHandler}
                          href="/service-single/Tourist-Visa"
                        >
                          <span>Service Details</span>
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} href="/coaching">
                          <span>Coaching</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={ClickHandler}
                          href="/coaching-single/Take-IELTS"
                        >
                          <span>Coaching Details</span>
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} href="/visa">
                          <span>Visa</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={ClickHandler}
                          href="/visa-single/Commercial-Visa"
                        >
                          <span>Visa Details</span>
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} href="/team">
                          <span>Team</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={ClickHandler}
                          href="/team-single/Esther-Howard"
                        >
                          <span>Team Details</span>
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} href="/testimonial">
                          <span>Testimonials</span>
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} href="/faq">
                          <span>FAQ</span>
                        </Link>
                      </li>
                      <li>
                        <Link onClick={ClickHandler} href="/404">
                          <span>404</span>
                        </Link>
                      </li>
*/}
                    </ul>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/about">
                      <span>About us</span>
                    </Link>
                  </li>
                  <li>
                    {/*  <li className="menu-item-has-children"> */}
                    <Link onClick={ClickHandler} href="/testimonial">
                      <span>Testimonials</span>
                    </Link>
                    {/*

                    <ul className="submenu">
                      <li>
                        <Link onClick={ClickHandler} href="/country">
                          <span>Country</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={ClickHandler}
                          href="/country-single/Australia"
                        >
                          <span>Country Details</span>
                        </Link>
                      </li>
                    </ul>
*/}
                  </li>
                  <li className="menu-item-has-children">
                    <Link onClick={ClickHandler} href="/">
                      <span>Blog</span>
                    </Link>
                    <ul className="submenu">
                      <li>
                        <Link onClick={ClickHandler} href="/blog">
                          <span>Blog</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={ClickHandler}
                          href="/blog-single/Cultural-adjustment-thriving-in-a-new-country"
                        >
                          <span>Blog Details</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} href="/contact">
                      <span>Contact</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="xb-hamburger-menu">
              <div className="xb-nav-mobile">
                <div
                  className="xb-nav-mobile-button"
                  onClick={() => setMobailState(!mobailActive)}
                >
                  <i className="fal fa-bars"></i>
                </div>
              </div>
            </div>
            <ul className="header__action ul_li">
              {/*
              <li>
                <span
                  className="header__search header-search-btn"
                  onClick={() => setSearchState(!searchActive)}
                >
                  <Image src={icon4} alt="" />
                  Search
                </span>
              </li>
 
*/}
              <li>
                <div className="header__language">
                  <ul>
                    <li>
                      <Link
                        onClick={ClickHandler}
                        href="/"
                        className="lang-btn"
                      >
                        <div className="flag">
                          <Image src={icon5} alt="" />
                        </div>
                        English
                        <div className="arrow_down">
                          <Image src={icon6} alt="" />
                        </div>
                      </Link>
                      <ul className="lang_sub_list">
                        <li>
                          <Link onClick={ClickHandler} href="/">
                            English
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href="/">
                            Arabic
                          </Link>
                        </li>
                        {/*

                        <li>
                          <Link onClick={ClickHandler} href="/">
                            Bangla
                          </Link>
                        </li>
*/}
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="xb-header-wrap">
        <div className={`xb-header-menu ${mobailActive ? "active" : ""}`}>
          <div className="xb-header-menu-scroll">
            <div
              className="xb-menu-close xb-hide-xl xb-close"
              onClick={() => setMobailState(!mobailActive)}
            ></div>
            <div className="xb-logo-mobile xb-hide-xl">
              <Link onClick={ClickHandler} href="/" rel="home">
                <Image src={logo} alt="" />
              </Link>
            </div>
            <div className="xb-header-mobile-search xb-hide-xl">
              <form role="search" onSubmit={SubmitHandler}>
                <input
                  type="text"
                  placeholder="Search..."
                  name="s"
                  className="search-field"
                />
                <button type="submit" className="search-submit"></button>
              </form>
            </div>
            <nav className="xb-header-nav">
              <MobileMenu />
            </nav>
          </div>
        </div>
        <div
          className="xb-header-menu-backdrop"
          onClick={() => setMobailState(false)}
        ></div>
      </div>

      <div
        className={`header-search-form-wrapper ${searchActive ? "open" : ""}`}
      >
        <div
          className="xb-search-close xb-close"
          onClick={() => setSearchState(!searchActive)}
        ></div>
        <div className="header-search-container">
          <form role="search" className="search-form" onSubmit={SubmitHandler}>
            <input
              type="search"
              className="search-field"
              placeholder="Search …"
              name="s"
            />
          </form>
        </div>
      </div>
      <div className={`body-overlay ${searchActive ? "active" : ""}`}></div>
    </header>
  );
};

export default Header;
