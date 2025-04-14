import React, { useRef, useState } from "react";
import { GeneralUserStyled } from "./GeneralUserStyled";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_cwus9fq", "template_ghpnnnj", form.current, {
        publicKey: "ZeFxLHqGZuM1QZMF4",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("message sent successfully");
          setEmail("");
          setName("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <GeneralUserStyled>
      <div className="contactWrapper">
        <div className="header">
          <div className="head">Contact Us</div>
        </div>
        <div className="body">
          <div className="contactSection">
            <div className="contantName">
              If you guys have any queries, can you please post email!!
            </div>
            <form onSubmit={sendEmail} ref={form}>
              <div className="content">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  name="user_name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="content">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="content">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  value={message}
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="submitBtn">
                <button type="submit" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </GeneralUserStyled>
  );
};

export default ContactUs;
