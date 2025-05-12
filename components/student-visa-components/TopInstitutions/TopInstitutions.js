import React from "react";
import rating from '/public/images/icon/h_star.png'
import Link from 'next/link'
import pimg1 from '/public/images/brand/br_01.png'
import pimg2 from '/public/images/brand/br_02.png'
import pimg3 from '/public/images/brand/br_03.png'
import pimg4 from '/public/images/brand/br_04.png'
import pimg5 from '/public/images/brand/br_05.png'
import pimg6 from '/public/images/brand/br_06.png'
import pimg7 from '/public/images/brand/br_07.png'
import pimg8 from '/public/images/brand/br_08.png'

import shape1 from '/public/images/shape/b_shape1.png'
import shape2 from '/public/images/shape/b_shape2.png'
import Image from "next/image";

const partners = [
    {
        pImg: pimg1,
    },
    {
        pImg: pimg2,
    },
    {
        pImg: pimg3,
    },
    {
        pImg: pimg4,
    },
    {
        pImg: pimg5,
    },
    {
        pImg: pimg6,
    },
    {
        pImg: pimg7,
    },
    {
        pImg: pimg8,
    },
]


const TopInstitutions = (props) => {

    return (

        <section className="brand gray-bg-2 pos-rel pt-120 pb-120">
            <div className="container">
                <div className="sec-title style-2 text-center mb-60">
                    <span className="sec-title--sub"><Image src={rating} alt="" />top institutions<Image src={rating} alt="" /></span>
                </div>
                <div className="xb-brand xb-brand1 ul_li">
                    {partners.map((partner, pitem) => (
                        <div className="xb-item--item" key={pitem}>
                            <Link href="/" className="xb-item--inner"><Image src={partner.pImg} alt="" /></Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="brand-shape">
                <div className="shape shape--1">
                    <div className="shape-inner" data-parallax='{"x":-50,"y":-70}'>
                        <Image src={shape1} alt="" />
                    </div>
                </div>
                <div className="shape shape--2">
                    <div className="shape-inner" data-parallax='{"x":50,"y":80}'>
                        <Image src={shape2} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TopInstitutions;