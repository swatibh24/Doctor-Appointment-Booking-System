const appointment = {};

const addAppointment = ({sid,name,docId,patientName,address,age,emailAddress,contactNo,date,hospitalName,doctorName,timings}) => {
    appointment[name] = appointment[name] || {};
    appointment[name][sid] = {name,docId,patientName,address,age,emailAddress,contactNo,date,hospitalName,doctorName,timings};
};
const getAppointment = ({sid, docId}) => {
    if(!appointment[sid]) {
        return {};
    }
    return appointment[sid][docId];
};
const cancelBooking = ({ sid, docId }) => {
    delete appointment[sid][docId];
    return true;
};
const utils = {
    addAppointment,
    appointment,
    getAppointment,
    cancelBooking,
};

module.exports = utils;