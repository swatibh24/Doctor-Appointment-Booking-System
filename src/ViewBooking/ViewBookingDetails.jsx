import React, {useState} from 'react';
import '../ViewBooking/ViewBookings.css';
import {fetchBookings, fetchCancelBooking} from "../Services/services";
import Error from "../Error/Error";

const ViewBookingDetails = (props) => {
    const {username,patientName,hospitalName,doctorName,timings,docId,updateBookingData,bookingList} = props;
    const [errorMes, setErrorMes] = useState([]);
    const [message, setMessage] = useState('');
    if(docId === '' || docId === 0  || docId === null){
        setMessage('No Bookings Found')
    }
    const cancelBooking = function(docId){
        setMessage('');
        fetchCancelBooking(username,docId)
            .then(function(response){
                setMessage('Your booking has been cancelled.');
            }).catch(error => {setErrorMes(error.message)});
        fetchBookings(username)
            .then((data) => {
                if(data){
                    bookingList.current = data;
                    updateBookingData(bookingList.current);
                }else{
                    setMessage('No Bookings Found')
                }});
       };
    return (
        <div className="hospital-list">
            <div className="row">
                <div className="left-list">
                    <div className="booking-user">User Name: {username} </div>
                    <div className="booking-hospital">Hospital Name: {hospitalName} </div>
                    <div className="booking-doctor">Doctor Name: {doctorName} </div>
                    <div className="booking-timing">Timings: {timings} </div>
                    <button type="btn" data-id="${docId}" className="cancel-booking" onClick={() => cancelBooking(docId)}>Cancel Booking</button>
                    <div className="error-mess"><Error message={message}/></div>
                </div>
            </div>
        </div>
    );
};

export default ViewBookingDetails;
