import React, {useState} from "react";
import  "./ContactPage.css";
import ContactUsMessage from "./ContactUsMessage";

const ContactPage = () => {
    const [message, setMessage] = useState('');
    return (
    <div className="contact-page">
      <h1 className="contact-title">Contact Us:</h1>
      <div><input className="contact-form" type="contact" id="first-name" name="firstname" placeholder="Enter your first name"/></div>
      <div><input className="contact-form" type="contact" id="last-name" name="lastname" placeholder="Enter your last name" /></div>
      <div>
        <select className="contact-form" id="country" name="country">
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
          <option value="India">India</option>
          <option value="UK">UK</option>
        </select>
      </div>
      <textarea  className="contact-form" id="subject" name="subject" placeholder="Enter Subject"  style={{height: "200px"}} />
      <div className="submit">
        <button className="submit-button" type="btn" onClick={() => setMessage("You have submitted the details successfully! We will contact you shortly!!")}>Submit</button>
      </div>
        <div className="contact-mess"><ContactUsMessage message={message}/></div>
    </div>
  );
};

export default ContactPage;
