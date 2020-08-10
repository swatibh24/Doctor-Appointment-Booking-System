const nodeMailer = require('nodemailer');
require('dotenv').config()

const sendEmail = (subject, email, message) => {
        return new Promise((resolve, reject) => {
        const transporter = nodeMailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD,
            },
        });
        const mailOptions = {
            from: process.env.MAIL_USERNAME,
            to: email,
            subject,
            html: `<p>${message}</p>`,
        };
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                reject(err);
            } else {
                resolve(true);
            }
        });
    });
};

const composeMail = (message,name) => {
    message = message.replace(/(?:\r\n|\r|\n)/g, '<br>');
    message = 'Hi '+name+'<br><br>' + message;
    message += '<br><br>Regards,<br>Appointment Plus';
    return message;
};

module.exports = {
  sendEmail: sendEmail,
  composeMail: composeMail
}