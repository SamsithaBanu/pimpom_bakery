import React, { useRef } from "react";
import { ContactUsStyled } from "./ContactUsStyled";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";

const ContactUs = ({ isOpen, toggleSidebar }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_cwus9fq', 'template_ghpnnnj', form.current, {
        publicKey: 'ZeFxLHqGZuM1QZMF4',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('message sent successfully');
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error( error.text)
        },
      );
  };
  return (
    <ContactUsStyled>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="header">
        <i className="contact">Contact Us</i>
          <button className="close-btn" onClick={toggleSidebar}>
           X
          </button>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="email">
            <label>User Name</label>
            <input className="inputemail" type="text" name="user_name" />
          </div>
          <div className="email">
            <label>Email Address</label>
            <input className="inputemail" type="email" name="user_email" />
          </div>
          <div className="email">
            <label>Message</label>
            <textarea name="message"  className="inputmail"/>
          </div>
            <input type="submit" value="Send" className="buttonCta"/>
        </form>
      </div>
      <div
        className={`backdrop ${isOpen ? "active" : ""}`}
        onClick={toggleSidebar}
      ></div>
    </ContactUsStyled>
  );
};

export default ContactUs;
