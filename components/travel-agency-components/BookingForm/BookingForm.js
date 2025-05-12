import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import icon1 from '/public/images/icon/location-2.svg'
import icon2 from '/public/images/icon/arrow-right.svg'
import Image from "next/image";


const BookingForm = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const [startDate, setStartDate] = useState(new Date());
    const [startDate2, setStartDate2] = useState(new Date());


    return (

        <section className="book-form">
            <div className="xb-book-form__wrap">
                <div className="container">
                    <form className="xb-book-form ul_li_between" onSubmit={SubmitHandler}>
                        <div className="xb-item--field">
                            <label htmlFor="dest">Destination</label>
                            <input id="dest" type="text" placeholder="Location"/>
                            <span className="icon"><Image src={icon1} alt=""/></span>
                        </div>
                        <div className="xb-item--field">
                            <label htmlFor="check-in">Check In</label>
                            <DatePicker id="check-in" className="datepicker" selected={startDate} onChange={(date) => setStartDate(date)} />
                            <span className="icon"><Image src={icon1} alt=""/></span>
                        </div>
                        <div className="xb-item--field">
                            <label htmlFor="check-out">Check Out</label>
                            <DatePicker id="check-out" className="datepicker" selected={startDate2} onChange={(date) => setStartDate2(date)} />
                            <span className="icon"><Image src={icon1} alt=""/></span>
                        </div>
                        <div className="xb-item--field">
                            <label htmlFor="guest">Guests</label>
                            <input id="guest" type="text" placeholder="Guests"/>
                            <span className="icon"><Image src={icon1} alt=""/></span>
                        </div>
                        
                        <div className="xb-item--btn">
                            <button className="thm-btn thm-btn--trv">Book Now<span><Image src={icon2} alt=""/></span></button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default BookingForm;