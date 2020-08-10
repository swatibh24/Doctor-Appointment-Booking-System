import React, { useState, useEffect, useRef, useCallback,} from 'react';
import HospitalList from './HospitalList';
import {fetchHospitals} from "../Services/services";
import SearchHospitals from '../Search/SearchHospitals';
import './Hospitals.css';

const Hospitals = ({props}) => {
    const username = props.user;
    const hospitalDetailsList = useRef([]);
    const [hospitalName, setHospitalName] = useState('');
    const [hospitalList, setHospitalList] = useState([]);
    useEffect(() => {
        fetchHospitals(username)
            .then((data) => {
                hospitalDetailsList.current = data;
                setHospitalData(hospitalDetailsList.current);
            });
    }, [setHospitalData]);

    const setHospitalData = useCallback((obj) => {
        setHospitalList(obj.map((element) => (
            <HospitalList
                username={username}
                hospId={element.id}
                key={element.id}
                hospitalName={element.hospitalName}
                address={element.address}
                departments={element.departments}
                timings={element.timings}
            />
        )));
    });
    const onSearch = (data) => {
        const filterHospSearchDetails = hospitalDetailsList.current.filter((obj) => obj.hospitalName.toLowerCase().includes(data.toLowerCase()));
        setHospitalData(filterHospSearchDetails);
    };

    return (
        <div>
            <div>
                <div className="search">
                    <div className="search-description">Search hospitals by name to book your appointments</div>
                    <SearchHospitals  onSearch={onSearch} setHospitalName={setHospitalName} hospitalName={hospitalName}/>
                </div>
            </div>
            <div className="hospital">
                {hospitalList}
            </div>
        </div>
    );
};

export default Hospitals;
