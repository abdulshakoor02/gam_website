import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import icon1 from '/public/images/icon/c_user.svg'
import icon2 from '/public/images/icon/c_mail.svg'
import icon3 from '/public/images/icon/c_select.svg'
import icon4 from '/public/images/icon/c_call.svg'
import icon5 from '/public/images/icon/c_message.svg'
import Image from 'next/image';

const ContactForm = (props) => {

    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            setForms({
                name: '',
                email: '',
                subject: '',
                phone: '',
                message: ''
            })
        } else {
            validator.showMessages();
        }
    };

    return (

        <form className="xb-item--form contact-from" onSubmit={(e) => submitHandler(e)}>
            <div className="row">
                <div className="col-lg-6">
                    <div className="xb-item--field">
                        <span><Image src={icon1} alt="" /></span>
                        <input
                            value={forms.name}
                            type="text"
                            name="name"
                            className="form-control"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Goladria Gomez" />
                        {validator.message('name', forms.name, 'required|alpha_space')}
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="xb-item--field">
                        <span><Image src={icon2} alt="" /></span>
                        <input
                            value={forms.email}
                            type="email"
                            name="email"
                            className="form-control"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="e.visa@services.com" />
                        {validator.message('email', forms.email, 'required|email')}
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="xb-item--field">
                        <span><Image src={icon3} alt="" /></span>
                        <select
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            value={forms.subject}
                            type="text"
                            className="form-control"
                            name="subject">
                            <option>Student Visa</option>
                            <option>Tourist Visa</option>
                            <option>Commercial Visa</option>
                            <option>Residence Visa</option>
                            <option>Working Visa</option>
                        </select>
                        {validator.message('subject', forms.subject, 'required')}
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="xb-item--field">
                        <span><Image src={icon4} alt="" /></span>
                        <input
                            value={forms.phone}
                            type="phone"
                            name="phone"
                            className="form-control"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="+888 -8867 3333" />
                        {validator.message('phone', forms.phone, 'required|phone')}
                    </div>
                </div>
                <div className="col-12">
                    <div className="xb-item--field">
                        <span><Image src={icon5} alt="" /></span>
                        <textarea
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            value={forms.message}
                            type="text"
                            name="message"
                            className="form-control"
                            placeholder="Write Your Message...">
                        </textarea>
                        {validator.message('message', forms.message, 'required')}
                    </div>
                </div>
                <div className="col-12">
                    <button className="thm-btn" type="submit">Send Message</button>
                </div>
            </div>
        </form>
    )
}

export default ContactForm;