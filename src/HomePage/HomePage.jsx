import React from "react";
import  "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <img
        className="home-img" src="/images/homepage.jpg"  alt="homepage"  />
      <h1 className="home-title">Welcome to Virtual Doctor Appointment Booking System!!!</h1>
      <p className="home-text">
       We are here to help you 24/7.
      </p>
      <p className="home-text">Book appointment with your recommended doctor</p>
    </div>
  );
};

export default HomePage;
