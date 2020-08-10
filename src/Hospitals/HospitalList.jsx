import React, {useState} from 'react';
import './Hospitals.css';
import {useHistory}  from "react-router-dom";
import Error from "../Error/Error";
import  "../Error/ErrorMessages";
const HospitalList = (props) => {
    const {hospId, hospitalName,address, timings,username} = props;
    const [message, setMessage] = useState('');
    let {departments} = props;
    const history = useHistory();
    departments = departments.map((department) => (
        <div key={department} className="dept-shape">{department}</div>
    ));

    return (
        <div className="hospital-list">
            <div className="row">
                <div className="left-list">
                    <div className="name"> {hospitalName} </div>
                    <div className="address"> {address} </div>
                    <div className="dept">{departments} </div>
                </div>
                <div className="right-list">
                    <div className="timings">{timings} </div>
                    <button type="btn" className="book-btn" onClick={() => history.push(`/hospital/${hospId}/${username}`)}>Book Appointment</button>
                </div>
                <div className="error-mess"><Error message={message}/></div>
            </div>
        </div>
    );
};


export default HospitalList;
