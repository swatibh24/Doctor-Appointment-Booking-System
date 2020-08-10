import React from 'react';

const DoctorDetails = (props) => {
    const {username,history,hospId,docId, name, description, experience,timings, degrees, daysAvailable, department, bookBtnHide, imgUrl} = props;
    return (
        <div className="details">
                <div className="img-div"><img src={imgUrl} className="doc-img" alt="image" /> </div>
                <div className="detail-div">
                    <div className="detail-body">
                        <h5 className="doctor-title">{name}</h5>
                        <p className="detail-text">{degrees}</p>
                        <div className="detail-text ">Department:{department} </div>
                        <p className="detail-text">Experience:{experience}</p>
                        <p className="detail-text">{description}</p>
                        <p className="detail-text">Days Available:{' '}{daysAvailable}<br />Timings: {' '}{timings}</p>
                        {bookBtnHide ? null : <button type="btn" onClick={() => history.push(`/doctors/${hospId}/${docId}/${username}`)}>Book Appointment</button>}
                    </div>
                </div>
        </div>
    );
};

DoctorDetails.defaultProps = {
    bookBtnHide: false,
};

export default DoctorDetails;
