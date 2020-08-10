import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <section className="about-page">
      <img className="about-img" src="/images/homepage.jpg" alt="homepage" />
      <h1 className="about-title">About us</h1>
      <p className="about-detail">
          We are your partner in total health and wellness, 24/7.
          We are your partner in total health and wellness. And we’re here for you 24/7 – caring for your body and mind.
          As a global health service company, Appointment Plus mission is to improve the health, well-being, and peace of mind.
          We make it easy to get care – letting you choose how, when, and where you want it.
          By using this app you can book appointment with your recommended doctor 24/7.
          Our values are the core of our culture.
      </p>
      <h2 className="about-title">Customer and Patients</h2>
      <p className="about-detail">
          We care deeply about our customers, patients, and coworkers
          Our Health Accelerated: Life ConnectedSM approach integrates the physical, emotional, financial, social, and environmental aspects of health and well-being.
      </p>
       <h2 className="about-title">We create a better future–together</h2>
        <p className="about-detail">
            Through Appointment Plus, we help the underserved overcome barriers to health and improve access to care.
        </p>
    </section>
  );
};

export default AboutPage;
