import React from 'react'
import Bg from '/public/images/bg/newsletter_img.png'
import Image from 'next/image'


const SubmitHandler = (e) => {
    e.preventDefault()
}


const NewsLatter = (props) => {
    return (
        <section className="newsletter">
            <div className="container">
                <div className="xb-newsletter pos-rel">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="xb-item--inner">
                                <div className="xb-item--holder mb-30">
                                    <span>newsletter</span>
                                    <h3>Subscribe to the free newsletter to receive the latest <br/> news & case studies!
                                    </h3>
                                </div>
                                <form className="xb-item--form" onSubmit={SubmitHandler}>
                                    <input type="text" placeholder="Your e-mail address"/>
                                    <button className="thm-btn">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="xb-newsletter__img">
                        <Image src={Bg} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsLatter;