export const fetchPatientLogIn = (username) => {
    return fetch('/sessionPatient', {
        method: 'POST',
        headers: new Headers({
            'content-type': 'application/json',
        }),
        body: JSON.stringify({
            username
        }),
    })
        .catch(() => {
            return Promise.reject({
                code: 'network-error'
            });
        })
        .then((response) => {
            if (!response.ok) {
                return response.json().then(result => Promise.reject(result));
            }
            return response.json();
        });
};

export const fetchDoctorLogIn = (username) => {
    return fetch('/sessionDoctor', {
        method: 'POST',
        headers: new Headers({
            'content-type': 'application/json',
        }),
        body: JSON.stringify({
            username
        }),
    })
        .catch(() => {
            return Promise.reject({
                code: 'network-error'
            });
        })
        .then((response) => {
            if (!response.ok) {
                return response.json().then(result => Promise.reject(result));
            }
            return response.json();
        });
};

export const fetchLoginStatus = () => {
    return fetch('/session', {
        method: 'GET',
    })
        .catch(() => {
            return Promise.reject({
                code: 'network-error'
            });
        })
        .then((response) => {
            if (!response.ok) {
                return Promise.reject({
                    code: 'login-invalid'
                });
            }
            return response.json();
        });
};


export const fetchLogOut = () => {
    return fetch('/session', {
        method: 'DELETE'
    })
        .catch(() => {
            return Promise.reject({
                code: 'network-error'
            });
        })
        .then((response) => {
            if (!response.ok) {
                return response.json().then(result => Promise.reject(result));
            }
            return response.json();
        });
};

export const fetchSendTip = (healthTip) => {
    return fetch('/tips', {
        method: 'POST',
        headers: new Headers({
            'content-type': 'application/json',
        }),
        body: JSON.stringify({
            healthTip
        }),
    })
        .catch(() => Promise.reject({
            error: 'network-error'
        }))
        .then((response) => {
            if (!response.ok) {
                return response.json().then(result => Promise.reject(result));
            }
            return response.json();
        });

};

export const fetchGetTips = () => {
    return fetch('/tips', {
        method: 'GET',
    })
        .catch(() => {
            return Promise.reject({
                code: 'network-error'
            });
        })
        .then((response) => {
            if (!response.ok) {
                return response.json().then(result => Promise.reject(result));
            }
            return response.json();
        });

};

export const fetchGetAvailablePatients = () => {
    return fetch('/availablePatients', {
        method: 'GET',
    })
        .catch(() => {
            return Promise.reject({
                code: 'network-error'
            });
        })
        .then((response) => {
            if (!response.ok) {
                return response.json().then(result => Promise.reject(result));
            }
            return response.json();
        });

};

export const fetchSendMessage = (msg) => {
    return fetch(`/message`, {
        method: 'POST',
        body: JSON.stringify({
            'message': msg
        }),
        headers: new Headers({
            'content-type': 'application/json'
        })
    })
        .catch(() => Promise.reject({
            error: 'network-error'
        }))
        .then((response) => {
            if (!response.ok) {
                return response.json().then(result => Promise.reject(result));
            }
            return response.json();
        });
};

export const fetchGetChats = () => {
    return fetch('/message', {
        method: 'GET',
    })
        .catch(() => {
            return Promise.reject({
                code: 'network-error'
            });
        })
        .then((response) => {
            if (!response.ok) {
                return response.json().then(result => Promise.reject(result));
            }
            return response.json();
        });

};

export const fetchGetChatRoomId = () => {
    return fetch('/chatRoomId', {
        method: 'GET',
    })
    .catch(() => {
        return Promise.reject({
            code: 'network-error'
        });
    })
    .then((response) => {
        if (!response.ok) {
            return response.json().then(result => Promise.reject(result));
        }
        return response.json();
    });

};

export const fetchSetChatRoomId = () => {
    return fetch('/chatRoomId', {
        method: 'POST',
    })
    .catch(() => {
        return Promise.reject({
            code: 'network-error'
        });
    })
    .then((response) => {
        if (!response.ok) {
            return response.json().then(result => Promise.reject(result));
        }
        return response.json();
    });

};

export const fetchPostAvailablePatient = () => {
    return fetch(`/availablePatients`, {
        method: 'POST',
        body: JSON.stringify({}),
        headers: new Headers({
            'content-type': 'application/json'
        })
    })
        .catch(() => Promise.reject({
            error: 'network-error'
        }))
        .then((response) => {
            if (!response.ok) {
                return response.json().then(result => Promise.reject(result));
            }
            return response.json();
        });
};


export const fetchDeleteChatRoom = () => {
    return fetch('/chatRoomId', {
        method: 'DELETE'
    })
        .catch(() => {
            return Promise.reject({
                code: 'network-error'
            });
        })
        .then((response) => {
            if (!response.ok) {
                return response.json().then(result => Promise.reject(result));
            }
            return response.json();
        });
};