const convertServiceError = (err) => Promise.reject(err);
export const fetchLoginStatus = () => {
    return fetch('/session', {
        method: 'GET',
    })
        .catch( () => {
            return Promise.reject({code: 'NETWORK_ERROR'});
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(convertServiceError);
            }
            return response.json();
        });
};
export const fetchLogin = ({username}) => {
    return fetch('/loginUser', {
        method: 'POST',
        headers: new Headers({
            'content-type': 'application/json',
        }),
        body: JSON.stringify({ username }),
    })
        .catch( () => {
            return Promise.reject({code: 'NETWORK_ERROR'});
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(convertServiceError);
            }
            return response.json();
        });
};

export const fetchLogout = (username, setIsLoggedin) => {
    return fetch('/session', {
        method: 'DELETE',
    })
        .catch( (err) => {
            return Promise.reject({code: 'NETWORK_ERROR'});
        })        .then(response => {
            return response.ok;
        });
};
export const fetchHospitals = (name) => {
        return fetch('/hospitals', {
        method: 'GET',
    }).catch( () => {
            return Promise.reject({code: 'NETWORK_ERROR'});
        }).then(response => {
            if (!response.ok) {
                return response.json().then(convertServiceError);
            }return response.json();
    });
};
export const fetchHospitalsDetails = (hospId,name) => {
     return fetch(`/hospital/${hospId}/${name}`, {
        method: 'GET',
    }).catch( () => {
        return Promise.reject({code: 'NETWORK_ERROR'});
    }).then(response => {
        if (!response.ok) {
            return response.json().then(convertServiceError);
        }return response.json();
    });
};

export const fetchDoctorDetails = (hospId,name) => {
    return fetch(`/doctors/${hospId}/${name}`, {
        method: 'GET',
    }).catch( () => {
        return Promise.reject({code: 'NETWORK_ERROR'});
    }).then(response => {
        if (!response.ok) {
            return response.json().then(convertServiceError);
        }return response.json();
    });
};

export const fetchBookingPage = (hospId,docId,name) => {
    return fetch(`/doctors/${hospId}/${docId}/${name}`, {
        method: 'GET',
    }).catch( () => {
        return Promise.reject({code: 'NETWORK_ERROR'});
    }).then(response => {
        if (!response.ok) {
            return response.json().then(convertServiceError);
        }return response.json();
    });
};

export const submitAppointment = (hospId,docId,username,patientName,address,age,emailAddress,contactNo,dateOfApt,hospitalName,doctorName,timings) => {
    return fetch(`/book-appointment/${hospId}/${docId}/${username}`, {
        method: 'POST',
        headers: new Headers({
            'content-type': 'application/json',
        }),
        body: JSON.stringify({
            patientName: patientName,
            address,
            age,
            emailAddress,
            contactNo: contactNo,
            date: dateOfApt,
            hospitalName:hospitalName,
            doctorName:doctorName,
            timings:timings,
        }),
    }) .catch( (err) => {
        return Promise.reject({code: 'NETWORK_ERROR'});
    }) .then(response => {
        if (!response.ok) {
            return response.json().then(convertServiceError);
        }return response.json();
    });
};

export const fetchBookings = (name) => {
    return fetch('/bookings/'+name, {
        method: 'GET',
    }).catch( () => {
        return Promise.reject({code: 'NETWORK_ERROR'});
    }).then(response => {
        return response.json();
    });
};

export const fetchCancelBooking = (name, docId) => {
    return fetch(`/cancel-booking/${name}/${docId}`, {
        method: 'DELETE',
    }).catch( (err) => {
            return Promise.reject({code: 'NETWORK_ERROR'});
        })        .then(response => {
            return response.ok;
        });
};






