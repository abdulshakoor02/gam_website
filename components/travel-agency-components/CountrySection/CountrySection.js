import React from 'react'
import fIcon1 from '/public/images/country/trv_flag_01.png'
import fIcon2 from '/public/images/country/trv_flag_02.png'
import fIcon3 from '/public/images/country/trv_flag_03.png'
import fIcon4 from '/public/images/country/trv_flag_04.png'

import icon1 from '/public/images/icon/cs_01.png'
import icon2 from '/public/images/icon/cs_02.png'
import icon3 from '/public/images/icon/cs_03.png'
import icon4 from '/public/images/icon/cs_04.png'
import Image from 'next/image'


const Features = [
    {
        title: 'Germany',
        icon: fIcon1,
    },
    {
        title: 'Belgium',
        icon: fIcon2,
    },
    {
        title: 'Switzerland',
        icon: fIcon3,
    },
    {
        title: 'Vietnam',
        icon: fIcon4,
    },

]


const CountrySection = (props) => {

    return (

        <section className="country pt-md-100 pos-rel pt-170 pb-120">
            <div className="xb-country3__wrap ul_li_between">
                {Features.map((features, fitem) => (
                    <div className="xb-country3" key={fitem}>
                        <div className="xb-item--inner">
                            <div className="xb-item--flag">
                                <Image src={features.icon} alt="" />
                            </div>
                            <h3 className="xb-item--title">{features.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
            <div className="country-shape" style={{ backgroundImage: `url(${'/images/shape/country_shape.png'})` }}></div>
            <h2 className="xb-strock-text-cat xb-strock-text">Popular Destination</h2>
            <div className="country-icon-shape">
                <div className="shape shape--1">
                    <Image src={icon1} alt="" />
                </div>
                <div className="shape shape--2">
                    <Image src={icon2} alt="" />
                </div>
                <div className="shape shape--3">
                    <Image src={icon3} alt="" />
                </div>
                <div className="shape shape--4">
                    <Image src={icon4} alt="" />
                </div>
            </div>
        </section>
    )
}

export default CountrySection;