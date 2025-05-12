import React from 'react'
import blogs from '../../api/blogs'
import Link from 'next/link'
import icon1 from '/public/images/icon/user.svg'
import icon2 from '/public/images/icon/calendar.svg'
import icon3 from '/public/images/icon/right_arrow.svg'
import Image from 'next/image'


const BlogSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="blog pb-130">
            <div className="container">
                <div className="blog-wrap">
                    <div className="sec-title mb-60 text-center">
                        <h2 className="mb-30 wow skewIn">Cast Your Eyes Upon Our <br /> <span> Newest Article</span></h2>
                        <p>Explore the most recent addition to our informative articles</p>
                    </div>
                    <div className="row justify-content-md-center mt-none-30">
                        {blogs.slice(0, 3).map((blog, Bitem) => (
                            <div className="col-lg-4 col-md-6 mt-30" key={Bitem}>
                                <div className="xb-blog">
                                    <div className="xb-item--inner">
                                        <div className="xb-item--img">
                                            <Image src={blog.screens} alt="" />
                                        </div>
                                        <div className="xb-item--holder">
                                            <span className={`xb-item--category ${blog.style}`}>{blog.thumb}</span>
                                            <ul className="xb-item--meta ul_li mb-20">
                                                <li><Image src={icon1} alt="" />By {blog.author}</li>
                                                <li><Image src={icon2} alt="" />{blog.create_at}</li>
                                            </ul>
                                            <h3 className="xb-item--title border-effect"><Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`}>{blog.title}</Link></h3>
                                            <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`} className="xb-item--link">Read the article<span><Image
                                                src={icon3} alt="" /></span></Link>
                                        </div>
                                        <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${blog.slug}`} className="xb-overlay xb-overlay-link"></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="xb-blog-bg" style={{ backgroundImage: `url(${'/images/bg/blog_bg.png'})` }}></div>
                </div>
            </div>
        </section>
    )
}

export default BlogSection;