import React, { useState, useEffect, useRef, useCallback} from 'react';
import { fetchBookings } from "../Services/services";
import ViewBookingDetails from '../ViewBooking/ViewBookingDetails'
import Error from "../Error/Error";
import  "./ViewBookings.css";

const ViewBookings = ({props}) => {
    const user = props.user;
    const bookingList = useRef([]);
    const [hospitalName, setHospitalName] = useState('');
    const [bookings, setBookings] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchBookings(user)
            .then((data) => {
                if(data){
                    bookingList.current = data;
                    updateBookingData(bookingList.current);
                }else{
                    setMessage('No Bookings Found')
                }});
    }, [updateBookingData]);

    const updateBookingData = useCallback((obj) => {
        setBookings(obj.map((element) => (
            <ViewBookingDetails
                username={user}
                patientName={user}
                doctorName={element.doctor[0].name}
                timings={element.doctor[0].timings}
                docId={element.doctor[0].id}
                hospitalName={element.doctor[0].hospitalName}
                updateBookingData={updateBookingData}
                bookingList={bookingList}
            />)));
    });
    return (
        <div>
            <div className="Booking History: ">
                 {bookings == '' ? <div className="error-mess"><Error message={"No bookings found"}/></div> :bookings}
            </div>

        </div>
    );
};

export default ViewBookings;
