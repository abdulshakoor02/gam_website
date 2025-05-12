import React from 'react'
import Link from 'next/link'
import pImg1 from '/public/images/package/img_01.jpg'
import pImg2 from '/public/images/package/img_02.jpg'
import pImg3 from '/public/images/package/img_03.jpg'
import pImg4 from '/public/images/package/img_04.jpg'
import pImg5 from '/public/images/package/img_05.jpg'
import pImg6 from '/public/images/package/img_06.jpg'

import fIcon1 from '/public/images/country/img_01.png'
import fIcon2 from '/public/images/country/img_02.png'
import fIcon3 from '/public/images/country/img_03.png'
import fIcon4 from '/public/images/country/img_04.png'
import fIcon5 from '/public/images/country/img_05.png'
import fIcon6 from '/public/images/country/img_06.png'

import fhIcon1 from '/public/images/icon/clock.svg'
import fhIcon2 from '/public/images/icon/user-2.svg'
import Image from 'next/image'




const Pakage = [
    {
        title: 'Discover the Wonders of Paris: A French Escapade',
        country: 'Canda',
        rating: '4.8',
        pImg: pImg1,
        flag: fIcon1,
        day: '02',
        night: '1',
        people: '10',
        price: '299',
    },
    {
        title: 'Unearth the Treasures of Egypt: A Pharaohs Journey',
        country: 'Belgium',
        rating: '4.5',
        pImg: pImg2,
        flag: fIcon2,
        day: '03',
        night: '2',
        people: '15',
        price: '288',
    },
    {
        title: 'Roam the Streets of Rome: An Italian Odyssey',
        country: 'Denmark',
        rating: '4.9',
        pImg: pImg3,
        flag: fIcon3,
        day: '05',
        night: '6',
        people: '18',
        price: '300',
    },
    {
        title: 'The Beauty of Budapest: A Hungarian Sojourn',
        country: 'Australia',
        rating: '4.7',
        pImg: pImg4,
        flag: fIcon4,
        day: '01',
        night: '1',
        people: '2',
        price: '150',
    },
    {
        title: 'Historic Charms of Athens: A Greek Getaway',
        country: 'France',
        rating: '4.3',
        pImg: pImg5,
        flag: fIcon5,
        day: '05',
        night: '4',
        people: '18',
        price: '315',
    },
    {
        title: 'Tropical Paradise: Escape to Bali, Indonesia',
        country: 'France',
        rating: '4.9',
        pImg: pImg6,
        flag: fIcon6,
        day: '06',
        night: '7',
        people: '12',
        price: '920',
    },

]


const PopularPakage = (props) => {

    return (
        <section className="package package-bg pos-rel pb-120" style={{ backgroundImage: `url(${'/images/bg/package_bg.jpg'})` }}>
            <div className="container">
                <div className="sec-title sec-title--travel text-center mb-55">
                    <span className="subtitle">Popular Package</span>
                    <h2>Popular Packages</h2>
                </div>
                <div className="row mt-none-30">
                    {Pakage.map((pakage, pitem) => (
                        <div className="col-lg-4 col-md-6" key={pitem}>
                            <div className="xb-package mt-30">
                                <div className="xb-item--inner">
                                    <div className="xb-item--img">
                                        <Image src={pakage.pImg} alt="" />
                                    </div>
                                    <div className="xb-item--holder">
                                        <div className="xb-item--meta ul_li_between mb-15">
                                            <div className="xb-item--country ul_li">
                                                <Image src={pakage.flag} alt="" />
                                                <span>{pakage.country}</span>
                                            </div>
                                            <div className="xb-item--rating ul_li">
                                                <span>{pakage.rating}</span>
                                                <ul className="xb-star-rating">
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="far fa-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h2 className="xb-item--title"><Link href="/home-travel-agency">{pakage.title}</Link></h2>
                                        <ul className="xb-item--info ul_li_between">
                                            <li><Image src={fhIcon1} alt="" /> {pakage.night} Days {pakage.day} Night</li>
                                            <li><Image src={fhIcon2} alt="" />{pakage.people} People</li>
                                        </ul>
                                        <Link href="/home-travel-agency" className="xb-item--btn">Package Start with - <span>${pakage.price}</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <h2 className="xb-strock-text">Adventure world</h2>
        </section>
    )
}

export default PopularPakage;