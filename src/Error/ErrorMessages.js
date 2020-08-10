const ErrorMessages = {
    DEFAULT: 'Oh no!  Something went wrong, please try again',
    PATIENT_REQUIRED: 'Patient Name is Required',
    AGE_REQUIRED: 'Age is Required',
    EMAIL_REQUIRED: 'Email Address is Required',
    INVALID_EMAIL:'Invalid Email',
    CONTACT_REQUIRED: 'Contact Number is Required',
    ADDRESS_REQUIRED: 'Address is Required',
    INVALID_DATE:'Please Select Valid Date',
    INVALID_AGE:'Invalid Age',
    SAME_DAY_DATE:'We Cannot Book Same Day Appointment',
    CONTACT_LENGTH:'Contact number cannot be more than 10 digits',
    NETWORK_ERROR: 'There was a problem reaching your network, please try again',
    LOGIN_REQUIRED: 'You must be logged in to view this content',
    LOGIN_UNAUTHORIZED: 'Invalid Username',
    UID_MISSING: 'UID is missing',
    UID_UNKNOWN: 'UID is unknown',
    DUPLICATE_APPOINTMENT:'You cannot book appointment again for same doctor.'
};

export default ErrorMessages;