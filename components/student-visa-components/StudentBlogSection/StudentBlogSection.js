import React from 'react'
import blogs from '../../../api/blogs'
import Link from 'next/link'
import rating from '/public/images/icon/h_star.png'
import icon1 from '/public/images/icon/cat.svg'
import icon2 from '/public/images/icon/calendar2.svg'
import icon3 from '/public/images/icon/comment.svg'

import shape1 from '/public/images/shape/b_shape1.png'
import shape2 from '/public/images/shape/b_shape2.png'
import Image from 'next/image'


const StudentBlogSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="blog pos-rel pt-120 pb-120">
            <div className="container">
                <div className="sec-title style-2 text-center mb-60">
                    <span className="sec-title--sub"><Image src={rating} alt="" />latest news<Image src={rating} alt="" /></span>
                    <h3 className="sec-title--heading">Latest Blog & Article</h3>
                </div>
                <div className="row mt-none-30">
                    {blogs.slice(3, 4).map((blog, Bitem) => (
                        <div className="col-lg-8 mt-30" key={Bitem}>
                            <div className="xb-blog2 xb-blog2--big">
                                <div className="xb-item--inner">
                                    <div className="xb-item--img">
                                        <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}><Image src={blog.screens} alt="" /></Link>
                                    </div>
                                    <div className="xb-item--holder">
                                        <div className="xb-item--meta">
                                            <span className="xb-item--dots"><span></span><span></span><span></span></span>
                                            <ul className="ul_li">
                                                <li><span><Image src={icon1} alt="" /></span>{blog.thumb}</li>
                                                <li><span><Image src={icon2} alt="" /></span>{blog.create_at}</li>
                                                <li><span><Image src={icon3} alt="" /></span>{blog.comment}</li>
                                            </ul>
                                        </div>
                                        <h2 className="xb-item--title border-effect"><Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}>{blog.title}</Link></h2>
                                        <p className="xb-item--content">{blog.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="col-lg-4 mt-30">
                        <div className="xb-blog-list">
                            {blogs.slice(4, 7).map((blog, Bitem) => (
                                <div className="xb-blog2" key={Bitem}>
                                    <div className="xb-item--inner">
                                        <div className="xb-item--holder">
                                            <div className="xb-item--meta">
                                                <span className="xb-item--dots"><span></span><span></span><span></span></span>
                                                <ul className="ul_li">
                                                    <li><span><Image src={icon1} alt="" /></span>{blog.thumb}</li>
                                                </ul>
                                            </div>
                                            <h2 className="xb-item--title border-effect"><Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}>{blog.title}</Link></h2>
                                            <p className="xb-item--content">{blog.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="blog-shape">
                <div className="shape shape--1">
                    <div className="shape-inner" data-parallax='{"x":-50,"y":-70}'>
                        <Image src={shape1} alt="" />
                    </div>
                </div>
                <div className="shape shape--2">
                    <div className="shape-inner" data-parallax='{"x":50,"y":-80}'>
                        <Image src={shape2} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StudentBlogSection;