import React from 'react'
import blogs from '../../../api/blogs'
import Slider from "react-slick";
import Link from 'next/link'
import icon1 from '/public/images/icon/user.svg'
import icon2 from '/public/images/icon/calendar.svg'

import shape1 from '/public/images/shape/blog_shape.png'
import Image from 'next/image';


const TravelBlogSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const slider = React.useRef(null);

    const settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className="blog travel-blog pos-rel pt-125 pb-125">
            <div className="container">
                <div className="sec-title sec-title--travel text-center mb-60">
                    <span className="subtitle">Blog & Article</span>
                    <h2>Blog & Article</h2>
                </div>
                <div className="xb-swiper-sliders">
                    <div className="xb-carousel-inner">
                        <div className="xb-testimonial-slider">
                            <Slider ref={slider} {...settings}>
                                {blogs.slice(7, 10).map((blog, Bitem) => (
                                    <div className="xb-blog xb-blog3" key={Bitem}>
                                        <div className="xb-item--inner">
                                            <div className="xb-item--img">
                                                <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}><Image src={blog.screens} alt="" /></Link>
                                            </div>
                                            <div className="xb-item--holder">
                                                <ul className="xb-item--meta ul_li mb-20">
                                                    <li><Image src={icon1} alt="" />By {blog.author}</li>
                                                    <li><Image src={icon2} alt="" />{blog.create_at}</li>
                                                </ul>
                                                <h2 className="xb-item--title border-effect"><Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}>{blog.title}</Link></h2>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                    <div className="ul_li_center mt-40">
                        <div className="xb-blog__nav ul_li_center mt-20">
                            <div className="nav-item tm-button-prev" onClick={() => slider?.current?.slickPrev()}><i className="far fa-long-arrow-left"></i></div>
                            <div className="nav-item tm-button-next" onClick={() => slider?.current?.slickNext()}><i className="far fa-long-arrow-right"></i></div>
                        </div>
                        <Link onClick={ClickHandler} className="thm-btn thm-btn--white thm-btn--trv mt-20" href="/blog">More blog<span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                            <path d="M6.68164 13.28L11.5716 8.9333C12.1491 8.41997 12.1491 7.57997 11.5716 7.06664L6.68164 2.71997" stroke="#0F172A" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg></span></Link>
                    </div>
                </div>
            </div>
            <div className="xb-blog-shape">
                <Image src={shape1} alt="" />
            </div>
        </section>
    )
}

export default TravelBlogSection;