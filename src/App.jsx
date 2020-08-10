import React, { useState } from 'react';
import {BrowserRouter as Router,Switch,Link,Route } from "react-router-dom";
import Hospitals from './Hospitals/Hospitals';
import HospitalPage from './Hospitals/HospitalPage';
import HomePage from "./HomePage/HomePage.jsx";
import AboutPage from "./AboutPage/AboutPage.jsx";
import ContactPage from "./ContactPage/ContactPage.jsx";
import BookingPage from "./Booking/BookingPage";
import Login from './Login/login';
import Logout from "./Logout/logout";
import ViewBookings from "./ViewBooking/ViewBooking";
import  "./navbar.css";
import './App.css'
let App = props => {
    const [user, setUser] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    if(user !== ""){
        return (
            <Router>
                <header>
                    <nav>
                        <Link className="nav-tab" to="/about">About Us</Link>
                        <Link className="nav-tab" to="/contact">Contact Us</Link>
                        <Link className="nav-tab" to="/hospitals">Hospital List</Link>
                        <Link className="nav-tab" to="/view-bookings">View Bookings</Link>
                        <Link className="nav-tab" to="/logout">Logout</Link>
                    </nav>
                </header>
                <Switch>
                    <Route path="/about" exact component={AboutPage} />
                    <Route path="/contact" exact component={ContactPage} />
                    <Route path="/view-bookings" render={(props) => (<ViewBookings {...props} props={{user:user,setUser:setUser}} />)} />
                    <Route path="/logout" render={(props) => (<Logout {...props} props={{user:user,setUser:setUser,isLoggedIn:false,setIsLoggedIn:setIsLoggedIn}} />)} />
                </Switch>
                <Route exact path="/hospitals" render={(routerProps) => {
                    return <Hospitals {...routerProps} props={{user:user,setUser:setUser}} />}} />
                <Route exact path='/hospital/:hospId/:username' render={routerProps => {
                    const hospId = routerProps.match.params.hospId;
                    const username = routerProps.match.params.username;
                    return <HospitalPage {...routerProps} props={{hospId,username}} />;}}/>
                <Route path="/doctors/:hospId/:docId/:username" render={routerProps => {
                    const hospId = routerProps.match.params.hospId;
                    const docId = routerProps.match.params.docId;
                    const username = routerProps.match.params.username;
                    return <BookingPage {...routerProps} props={{hospId,docId,username}} />;
                }}/>
            </Router>
        );
    }else{
        return (
            <Router>
                <header>
                    <nav>
                        <Link to="/home"><img className="logo" src="/images/logo.jpg" alt="Appointment Plus"/></Link>
                        <Link className="title" to="/">Appointment Plus</Link>
                        <Link className="nav-tab" to="/about">About Us</Link>
                        <Link className="nav-tab" to="/contact">Contact Us</Link>
                        <Link className="nav-tab" to="/login">Login</Link>
                    </nav>
                </header>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/about" exact component={AboutPage} />
                    <Route path="/contact" exact component={ContactPage} />
                    <Route path="/login" render={(props) => (<Login {...props} props={{user:user,setUser:setUser,isLoggedIn:true,setIsLoggedIn:setIsLoggedIn}} />)} />
                </Switch>
            </Router>
        );
    }
}

export default App;

