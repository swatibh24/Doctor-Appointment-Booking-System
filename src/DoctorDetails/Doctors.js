import React, { useState, useEffect } from 'react';
import DoctorDetails from './DoctorDetails';
import {fetchDoctorDetails} from "../Services/services";
import './Doctors.css';
import ErrorMessages from "../Error/ErrorMessages";

const Doctors = (props) => {
    const {history, match } = props;
    const {hospId ,username} = match.params;
    const [message, setMessage] = useState('');
    const [doctorsDetailsArray, setDoctorsDetailArray] = useState([]);
    useEffect(() => {
        fetchDoctorDetails(hospId,username)
            .then((data) => {
                const detailsArray = data.map((object) => {
                    return (
                    <DoctorDetails
                            username={username}
                            history={history}
                            hospId={hospId}
                            docId={object.id}
                            name={object.name}
                            imgUrl={object.imgUrl}
                            degrees={object.degrees}
                            department={object.department}
                            experience={object.experience}
                            description={object.description}
                            daysAvailable={object.daysAvailable}
                            timings={object.timings}
                        />
                    );
                });
                setDoctorsDetailArray(detailsArray);

            }) .catch((err) => setMessage(ErrorMessages[err.code] || err.code || ErrorMessages['DEFAULT']));
    }, [hospId, history]);

   return (
        <div className="doctors-details">
            <div className="heading">Doctors</div>
            <div className="subheading">List of all doctors available in this hospital </div>
                 {doctorsDetailsArray}
        </div>

    );
};

export default Doctors;
