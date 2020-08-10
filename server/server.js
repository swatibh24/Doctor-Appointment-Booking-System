const PORT = 3000;
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const session = require('./session');
const auth = require('./auth');
const data = require('../src/Data/Data');
app.use(express.static('./build'));
const utils = require('./utils');
const sendBookingEmailConfig = require('./sendBookEmailConfig');

app.get('/session', (req, res) => {
    const sid = req.cookies.sid;
    if(!sid) {
        res.status(401).json({ code: 'LOGIN_REQUIRED' });
        return;
    }
    if(!session.users[sid]) {
        res.clearCookie('sid');
        res.status(403).json({ code: 'LOGIN_UNAUTHORIZED' });
        return;
    }
    res.status(200).json(session.users[sid]);
});

app.post('/loginUser', express.json(), (req, res) => {
    const { username } = req.body;
    res.clearCookie('sid');
    if (!username) {
        res.status(400).json({ code: 'USERNAME_REQUIRED' });
        return;
    }
    if (!auth.isPermitted(username)) {
        res.status(403).json({ code: 'LOGIN_UNAUTHORIZED' });
        return;
    }
    const sessionInfo = session.addUser(username);
    res.cookie('sid', sessionInfo.uid);
    res.status(200).json(sessionInfo);
});

app.delete('/session', express.json(), (req, res) => {
    const sid = req.cookies.sid;
    if(!sid) {
        res.status(401).json({ code: 'UID_MISSING' });
        return;
    }
    if(!session.users[sid]) {
        res.clearCookie('sid');
        res.status(403).json({ code: 'UID_UNKNOWN' });
        return;
    }
    res.clearCookie('sid');
    res.sendStatus(200);
});

app.get( '/hospitals', (req, res) => {
    const username = req.params.name;
    res.status(200).json(data.hospitalsData);
});

app.get( '/hospital/:hospId/:name', (req, res) => {
    const {hospId, name} = req.params;
    if (!data.hospitalsData[hospId]) {
        res.status(403).json({error: 'Hospital does not exist'});
        return;
    }
    res.status(200).json(data.hospitalsData.filter((obj) => obj.id==hospId))
});

app.get( '/doctors/:hospId/:docId/:name', (req, res) => {
    const {hospId, docId,name} = req.params;
    if (!data.hospitalsData[hospId]) {
        res.status(403).json({error: 'Hospital does not exist'});
        return;
    }if (!data.doctorsData[docId]) {
        res.status(403).json({error: 'Doctor does not exist'});
        return;
    }
    const doctor= data.doctorsData.filter((obj) => obj.id==docId)
    const hospital= data.hospitalsData.filter((obj) => obj.id==hospId)
    res.json({doctor: doctor,hospital: hospital})
});

app.get( '/doctors/:hospId/:name', (req, res) => {
    const {hospId,name} = req.params;
    if (!data.hospitalsData[hospId]) {
        res.status(403).json({error: 'Hospital does not exist'});
        return;
    }
    res.status(200).json(data.doctorsData.filter((obj) => obj.hospitalId==hospId))
});

app.post( '/book-appointment/:hospId/:docId/:name',express.json(), (req, res) => {
    const sid = req.cookies.sid;
    const {hospId,docId,name} = req.params;
    const {patientName,address,age,emailAddress,contactNo,date,hospitalName,doctorName,timings} = req.body;
    const result=session.validateSameAppoinment(name,docId);
    if(result=='DUPLICATE_FOUND'){
        res.status(403).json({ code: 'DUPLICATE_APPOINTMENT' });
        return;
    }
    utils.addAppointment({sid,name,docId,patientName,address,age,emailAddress,contactNo,date,hospitalName,doctorName,timings});
    session.addDocIdToCreatedList(name,docId);
    const text = `Your appointment has been successfully confirmed  at  ${hospitalName}, with ${doctorName} on ${date} between ${timings}.`;
    let message = sendBookingEmailConfig.composeMail(text, name);
    sendBookingEmailConfig.sendEmail("Booking Appointment Confirmation", emailAddress, message)
      .then(() => {res.json("success");
    }).catch((err) => res.status(400).json('Email sending failed please try again.'));
});

app.delete( '/cancel-booking/:name/:docId', (req, res) => {
    const username = req.params.name;
    const {docId}= req.params;
    session.cancelBooking(username,docId);
    res.json("success");
});

app.get('/bookings/:name', (req, res) => {
    let userObject = {};
    let dataList = {};
    const username = req.params.name;
    const usersList = Object.values(session.users);
    for(const user of usersList){
        if(user.username === username){
            userObject = user;
            break;
        }
    }if(userObject){
        for(let index = 0; index < userObject.docIdList.length; index++){
            const doctor= data.doctorsData.filter((obj) => obj.id==userObject.docIdList[index])
            dataList[userObject.docIdList[index]]={doctor};
        }
    }
    res.status(200).json(Object.values(dataList));
});
app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));