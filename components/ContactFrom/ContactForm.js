import React, { useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import icon1 from "/public/images/icon/c_user.svg";
import icon2 from "/public/images/icon/c_mail.svg";
import icon3 from "/public/images/icon/c_select.svg";
import icon4 from "/public/images/icon/c_call.svg";
import icon5 from "/public/images/icon/c_message.svg";
import Image from "next/image";
import toast from "react-hot-toast";

const ContactForm = (props) => {
  const [forms, setForms] = useState({
    fullname: "",
    email: "",
    destination: "",
    mobile: "",
    message: "",
    age: "",
    education: "",
  });
  const [validator] = useState(
    new SimpleReactValidator({
      className: "errorMessage",
    }),
  );
  const changeHandler = (e) => {
    setForms({ ...forms, [e.target.name]: e.target.value });
    if (validator.allValid()) {
      validator.hideMessages();
    } else {
      validator.showMessages();
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (validator.allValid()) {
      validator.hideMessages();
      toast.success("capturing your details you be notified on success");
      let response = await fetch("/api/sendmail", {
        method: "POST",
        body: JSON.stringify(forms),
      });
      response = await response.json();
      toast.success(response.message);
      setForms({
        fullname: "",
        email: "",
        destination: "",
        mobile: "",
        message: "",
        age: "",
        education: "",
      });
    } else {
      validator.showMessages();
    }
  };

  return (
    <form
      className="xb-item--form contact-from"
      onSubmit={(e) => submitHandler(e)}
    >
      <div className="row">
        <div className="col-lg-6">
          <div className="xb-item--field">
            <span>
              <Image src={icon1} alt="" />
            </span>
            <input
              value={forms.fullname}
              type="text"
              name="fullname"
              className="form-control"
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              placeholder="Goladria Gomez"
            />
            {validator.message("fullname", forms.fullname, "required")}
          </div>
        </div>
        <div className="col-lg-6">
          <div className="xb-item--field">
            <span>
              <Image src={icon2} alt="" />
            </span>
            <input
              value={forms.email}
              type="email"
              name="email"
              className="form-control"
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              placeholder="e.visa@services.com"
            />
            {validator.message("email", forms.email, "required|email")}
          </div>
        </div>
        <div className="col-lg-6">
          <div className="xb-item--field">
            <span>
              <Image src={icon3} alt="" />
            </span>
            <select
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              value={forms.destination}
              type="text"
              className="form-control"
              name="destination"
            >
              <option>Student Visa</option>
              <option>Tourist Visa</option>
              <option>Commercial Visa</option>
              <option>Residence Visa</option>
              <option>Working Visa</option>
            </select>
            {validator.message("destination", forms.destination, "required")}
          </div>
        </div>
        <div className="col-lg-6">
          <div className="xb-item--field">
            <span>
              <Image src={icon4} alt="" />
            </span>
            <input
              value={forms.mobile}
              type="phone"
              name="mobile"
              className="form-control"
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              placeholder="+888 -8867 3333"
            />
            {validator.message("mobile", forms.mobile, "required|phone")}
          </div>
        </div>

        <div className="col-lg-6">
          <div className="xb-item--field">
            <span>
              <Image src={icon1} alt="" />
            </span>
            <input
              value={forms.age}
              type="text"
              name="age"
              className="form-control"
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              placeholder="27"
            />
            {validator.message("name", forms.age, "required|alpha_space")}
          </div>
        </div>

        <div className="col-lg-6">
          <div className="xb-item--field">
            <span>
              <Image src={icon1} alt="" />
            </span>
            <input
              value={forms.education}
              type="text"
              name="education"
              className="form-control"
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              placeholder="BTech"
            />
            {validator.message("name", forms.education, "required|alpha_space")}
          </div>
        </div>
        <div className="col-12">
          <div className="xb-item--field">
            <span>
              <Image src={icon5} alt="" />
            </span>
            <textarea
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              value={forms.message}
              type="text"
              name="message"
              className="form-control"
              placeholder="Write Your Message..."
            ></textarea>
            {validator.message("message", forms.message, "required")}
          </div>
        </div>
        <div className="col-12">
          <button className="thm-btn" type="submit">
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
