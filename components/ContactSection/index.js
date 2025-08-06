import React from 'react'
import ContactForm from '../ContactFrom/ContactForm'
import shape from '/public/images/icon/n_pad.svg'
import Image from 'next/image'


const ContactSection = (props) => {
    return (
        <section className="contact contact-pt gray-bg">
            <div className="container">
                <div className="xb-contact pos-rel">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="xb-item--inner">
                                <div className="xb-item--holder mb-25">
                                    <span><Image src={shape} alt="" />Contact Us</span>
                                    <h3>Do you have questions or went more <br /> information?</h3>
                                </div>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                    <div className="google-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.238923724942!2d55.28195627534988!3d25.2288764776906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42ef0c76dd9d%3A0xa1a3515c191b500e!2sSama%20Tower!5e0!3m2!1sen!2sae!4v1754500456313!5m2!1sen!2sae"></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection;