import React, { useEffect, useState } from 'react';
import './Hospitals.css';
import {fetchHospitalsDetails} from "../Services/services";
import {useHistory}  from "react-router-dom";
import ErrorMessages from "../Error/ErrorMessages";
import Error from "../Error/Error";

const HospitalDetails = (props) => {
    const {hospId,username} = props.match.params;
    const [hospitalName, setHospitalName] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [map, setMapUrl] = useState('');
    const [departmentsArray, setDepartmentsArray] = useState([]);
    const history=useHistory();
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchHospitalsDetails(hospId,username)
            .then((data) => {
                setAddress(data[0].address);
                setHospitalName(data[0].hospitalName);
                setNumber(data[0].contactNumber);
                setMapUrl(data[0].locationLink);
                const {departments} = data[0];
                setDepartmentsArray(departments.map((department) => (
                    <div key={department} className="dept-shape">
                        {department}
                    </div>
                )));
            })
            .catch((err) => setMessage(ErrorMessages[err.code] || err.code || ErrorMessages['DEFAULT']));}, [hospId]);

    return (
        <div className="hospital-details-container">
            <div className="left">
                <div className="hospital-name">
                    {hospitalName}
                </div>
                <div className="hospital-address">
                    {address}
                </div>
                <div className="dept-array">
                    {departmentsArray}
                </div>
                <div className="back-btn">
                   <button type="btn" onClick={() => history.push(`/hospitals`)} >Back to hospital list</button>
                </div>
            </div>
            <div className="right">
                <div className="call-now">
                    <a href={`tel:${number}`}><button className="call-now-btn" type="btn">Click here to call </button></a>
                </div>
                <div className="direction">
                   <a href={map} rel="noopener noreferrer" target="_blank"><button className="get-directions-btn" type="btn">Get Directions</button></a>
                </div>
            </div>
            <div className="error-mess"><Error message={message}/></div>
        </div>
    );
};

export default HospitalDetails;
