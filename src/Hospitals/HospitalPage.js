import React from 'react';
import HospitalDetails from '../Hospitals/HospitalDetails';
import Doctors from '../DoctorDetails/Doctors';

const HospitalPage = (props) => {
    const { history, match ,username} = props;
    return (
        <div>
            <HospitalDetails match={match}  username={username} />
            <Doctors history={history} match={match} username={username} />
        </div>
    );
};

export default HospitalPage;
