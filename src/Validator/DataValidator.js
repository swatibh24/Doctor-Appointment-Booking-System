import isAfter from 'date-fns/isAfter';
import ErrorMessages from "../Error/ErrorMessages";

const DataValidator = (patientName,age,address,contactNumber,email,dateOfAppointment,setMessage) => {
    let errorCount = 0;
    const regExp = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    if (patientName === ''|| patientName === null) {
        setMessage(ErrorMessages.PATIENT_REQUIRED);
        errorCount += 1;
    }else if (age === '' || age === 0  || age === null) {
        setMessage(ErrorMessages.AGE_REQUIRED);
        errorCount += 1;
    }else if (age.length > 3 ||isNaN(age)) {
        setMessage(ErrorMessages.INVALID_AGE);
        errorCount += 1;
    }else if (address === null || address === '') {
        setMessage(ErrorMessages.ADDRESS_REQUIRED);
        errorCount += 1;
    } else if (isNaN(contactNumber) || contactNumber === '') {
        setMessage(ErrorMessages.CONTACT_REQUIRED);
        errorCount += 1;
    } else if (String(contactNumber).length !== 10 ) {
        setMessage(ErrorMessages.CONTACT_LENGTH);
        errorCount += 1;
      } else if (email === '') {
        setMessage(ErrorMessages.EMAIL_REQUIRED);
        errorCount += 1;
    }else if (regExp.test(email) === false) {
        setMessage(ErrorMessages.INVALID_EMAIL);
        errorCount += 1;
     }else if (!isAfter(new Date(dateOfAppointment), new Date())) {
        setMessage(ErrorMessages.INVALID_DATE);
        errorCount += 1;
    }if (errorCount === 0) {
        return true;}
    return false;
};

export default DataValidator;