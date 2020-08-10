import React, { useState, useEffect } from 'react';
import {fetchBookingPage,submitAppointment} from "../Services/services";
import {useHistory}  from "react-router-dom";
import DoctorDetails from "../DoctorDetails/DoctorDetails";
import Error from "../Error/Error"
import  '../Error/Error.css'
import './BookingPage.css';
import DataValidator from "../Validator/DataValidator"
import ErrorMessages from "../Error/ErrorMessages";

const BookingPage = (props) => {
    const { hospId, docId ,username} = props.match.params;
    const history=useHistory();
    const [patientName, setPatientName] = useState('');
    const [address, setAddress] = useState('');
    const [age, setAge] = useState('');
    const [dateOfApt, setDateOfApt] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [doctorName, setDoctorName] = useState('');
    const [description, setDescription] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [qualification, setQualification] = useState('');
    const [timings, setTimings] = useState('');
    const [experience, setExperience] = useState('');
    const [daysAvailable, setDaysAvailable] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [message, setMessage] = useState('');
    const [department,setDepartment] = useState('');
    const [hospitalName, setHospitalName] = useState('');
    const onInputChange = (event, setValue) => {
        setValue(event.target.value);
    };

    useEffect(() => {
        fetchBookingPage(hospId,docId,username)
         .then((data) => {
                setDoctorName(data.doctor[0].name);
                setExperience(data.doctor[0].experience);
                setImgUrl(data.doctor[0].imgUrl);
                setQualification(data.doctor[0].qualification);
                setDescription(data.doctor[0].description);
                setTimings(data.doctor[0].timings);
                setDepartment(data.doctor[0].department);
                setDaysAvailable(data.doctor[0].daysAvailable);
                setHospitalName(data.hospital[0].hospitalName);
         });
    }, [docId, hospId]);

    const bookAppointment = () => {
        if (DataValidator(patientName,age,address,contactNo,emailAddress,dateOfApt,setMessage)) {
            setMessage('Booking Appointment. Please wait..');
            submitAppointment(hospId,docId,username,patientName,address,age,emailAddress,contactNo,dateOfApt,hospitalName,doctorName,timings)
               .then((data) => {
                   if (data === 'success'){
                       setMessage('Your appointment has been booked successfully. Please check your email for confirmation');
                       setPatientName('');
                       setAge('');
                       setAddress('');
                       setContactNo('');
                       setDateOfApt('');
                       setEmailAddress('');
                   }else{
                       setMessage('There was some problem while sending email please try again.');
                   }
                }) .catch((err) => setMessage(ErrorMessages[err.code] || err.code || ErrorMessages['DEFAULT']));}
    };
    return (
        <div className="patient-booking-form">
            <DoctorDetails history={history}  id={docId}   key={docId}  name={doctorName}  degrees={qualification}  department={department}
             experience={experience}  description={description} daysAvailable={daysAvailable}  timings={timings} imgUrl={imgUrl}  bookBtnHide />
            <div className="heading">Enter Patients Booking Details:* </div>
            <div className="app-heading" >You are booking an appointment for doctor working in hospital: &nbsp;{hospitalName}</div>
            <div className="label-date">Enter Patient's name:*</div>
            <div><input type="text" className="input-text-field" placeholder="name: "  value={patientName} onChange={(event) => { onInputChange(event, setPatientName); }}/></div>
            <div className="label-date">Enter patient's age:*</div>
            <div><input type="text" placeholder="age: " className="input-text-field" value={age} onChange={(event) => { onInputChange(event, setAge); }}/></div>
            <div className="label-date">Enter Patient's Address:*</div>
            <div><input type="text" placeholder="address: " className="input-text-field" value={address} onChange={(event) => { onInputChange(event, setAddress); }}/></div>
            <div className="label-date">Enter Contact Number:*</div>
            <div><input type="text" placeholder="number:" className="input-text-field" value={contactNo} onChange={(event) => { onInputChange(event, setContactNo); }}/></div>
            <div className="label-date">Enter Email Address:*</div>
            <div><input type="text" placeholder="email address:" className="input-text-field" value={emailAddress} onChange={(event) => { onInputChange(event, setEmailAddress); }}/></div>
            <div className="label-date">Please Select Date of Appointment:*</div>
            <div><input type="date" className="date-text-field" value={dateOfApt} onChange={(event) => {onInputChange(event, setDateOfApt); }}/></div>
            <div className="error-mess"><Error message={message}/></div>
            <div className="button-book-apt">
                <div><button type="btn" className="book-apt" onClick={bookAppointment}>Book Appointment</button></div>
                <div><button type="btn" onClick={() => history.push(`/hospitals`)} >Back to hospital list</button></div>
            </div>
        </div>
    );
};

export default BookingPage;
