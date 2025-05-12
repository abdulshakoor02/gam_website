import React from 'react'
import Link from 'next/link'
import shape1 from '/public/images/shape/br_shape1.png'
import shape2 from '/public/images/shape/br_shape2.png'
import Image from 'next/image'


const PageTitle = (props) => {
    return (
        <section className="breadcrumb pos-rel bg_img" style={{ backgroundImage: `url(${'/images/bg/breadcrumb_bg.jpg'})` }}>
            <div className="container">
                <div className="breadcrumb__content">
                    <h2 className="breadcrumb__title">{props.pageTitle}</h2>
                    <ul className="breadcrumb__list clearfix">
                        <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                        <li className="breadcrumb-item">{props.pagesub}</li>
                    </ul>
                </div>
            </div>
            <div className="breadcrumb__circle">
                <span className="big" data-parallax='{"y" : 100, "scale" : 0.1}'></span>
                <span className="small" data-parallax='{"y" : 100, "scale" : 0.1}'></span>
            </div>
            <div className="breadcrumb__shape">
                <div className="shape shape--1">
                    <div className="shape-inner" data-parallax='{"x":-50,"y":80}'>
                        <Image src={shape1} alt="" />
                    </div>
                </div>
                <div className="shape shape--2">
                    <div className="shape-inner" data-parallax='{"x":50,"y":-90}'>
                        <Image src={shape2} alt="" />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default PageTitle;