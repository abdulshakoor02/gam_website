import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'
import dImg1 from '/public/images/destination/img_01.jpg'
import dImg2 from '/public/images/destination/img_02.jpg'
import dImg3 from '/public/images/destination/img_03.jpg'
import dImg4 from '/public/images/destination/img_04.jpg'
import dImg5 from '/public/images/destination/img_05.jpg'
import dImg6 from '/public/images/destination/img_06.jpg'
import Image from 'next/image'


const DestinatioSection = (props) => {

    const [isOpen, setOpen] = useState(false)

    return (

        <section className="destination-section pos-rel pt-120 pb-120">
            <div className="container-fluid">
                <div className="sec-title sec-title--travel text-center mb-55">
                    <span className="subtitle">Discover New Destination</span>
                    <h2>Popular Destination</h2>
                </div>
                <div className="row gap-40 mt-none-40">
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="xb-destination mt-40">
                            <div className="xb-item--img">
                                <Image src={dImg1} alt="" />
                                <div className="xb-item--holder">
                                    <h3 className="xb-item--title">(maldives - Indonesian)</h3>
                                    <span>280 Tour Packages</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="xb-destination style-video mt-40">
                            <div className="xb-item--img">
                                <span className="popup-video" onClick={() => setOpen(true)}><Image src={dImg2} alt="" /></span>
                                <span className="xb-item--play popup-video" onClick={() => setOpen(true)}><i className="fas fa-play"></i></span>
                            </div>
                        </div>
                        <div className="xb-destination mt-40">
                            <div className="xb-item--img">
                                <Image src={dImg3} alt="" />
                                <div className="xb-item--holder">
                                    <h3 className="xb-item--title">(Chana - Rashia)</h3>
                                    <span>280 Tour Packages</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="xb-destination mt-40">
                            <div className="xb-item--img">
                                <Image src={dImg4} alt="" />
                                <div className="xb-item--holder">
                                    <h3 className="xb-item--title">(Canada - Ukraine)</h3>
                                    <span>280 Tour Packages</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <div className="xb-destination mt-40">
                            <div className="xb-item--img">
                                <Image src={dImg5} alt="" />
                                <div className="xb-item--holder">
                                    <h3 className="xb-item--title">(poland - Indonesian)</h3>
                                    <span>280 Tour Packages</span>
                                </div>
                            </div>
                        </div>
                        <div className="xb-destination style-video mt-40">
                            <div className="xb-item--img">
                                <span className="popup-video" onClick={() => setOpen(true)}><Image src={dImg6} alt="" /></span>
                                <span className="xb-item--play popup-video" onClick={() => setOpen(true)}><i className="fas fa-play"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="xb-destination__strock-text xb-strock-text">Popular Destination</h2>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="3SsK-cxlj_w" onClose={() => setOpen(false)} />
        </section>
    )
}

export default DestinatioSection;