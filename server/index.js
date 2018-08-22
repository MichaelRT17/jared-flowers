require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , nodemailer = require('nodemailer');

const {
    PORT,
    EMAIL,
    PASSWORD
} = process.env;

const app = express();

app.use(bodyParser.json());

// nodemailer

app.post('/api/sendMail', (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: EMAIL,
            pass: PASSWORD
        }
    });

    let mailOptions = {
        from: EMAIL,
        to: EMAIL,
        subject: '',
        html: `Phone: ${req.body.phone} <br /> City: ${req.body.city} <br /> Date: ${req.body.date} <br /> Colors: ${req.body.colors} <br /> ${req.body.additional} <br /> <br /> - from ${req.body.name} <br />  ${req.body.email}`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    })
    res.status(200).send()
})

app.listen(PORT, () => {
    console.log(`Yo yo yo from port: ${PORT}`)
});