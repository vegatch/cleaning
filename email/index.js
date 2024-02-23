const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
require("dotenv").config();

// middleware
app.use(express.json());
app.use(cors());


let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: process.env.EMAIL,
    pass: process.env.APPWORD,
  },
});

transporter.verify((err, success) => {
 err
   ? console.log(err)
   : console.log(`=== Server is ready to take messages: ${success} ===`);
});





app.post("/contact", function (req, res) {
 
let message = {
  from: `${req.body.messageState.client_name}`,
  phone: `${req.body.messageState.phone_number} `,
  email: `${req.body.messageState.client_email}`,
  text: `${req.body.messageState.message}`,

//   html: `${req.body.messageState.message}`
};



let mailOptions = {
   from: `${req.body.messageState.client_email}`,
   to: process.env.EMAIL,
   cc:'vegatch1@gmail.com, migaellepithon@gmail.com',
   subject: `Message of ${req.body.messageState.client_name} from Benskya's contact form`,
   text: `<p>${message.text}<p/>  <p>${message.phone}<p/>`,
   html:`<p>Name: ${message.from}<p/>
         <p>Phone: ${message.phone}<p/>
         <p>Email: ${message.email}<p/>
         Message: <p>${message.text}<p/>  
         `,
};

 transporter.sendMail(mailOptions, function (err, data) {
   if (err) {
     res.json({
       status: "fail",
     });
   } else {
     console.log("== Message Sent ==");
     res.json({
       status: "success",
     });
   }
 });
});

app.post("/quoteRequest", function (req, res) {
 
let message = {
  from: `${req.body.formData.firstName} ${req.body.formData.middleName} ${req.body.formData.lastName}`,
  phone: `${req.body.formData.phoneNumber} `,
  email: `${req.body.formData.email}`,
  address: `${req.body.formData.streetName} ${req.body.formData.city} ${req.body.formData.state} ${req.body.formData.zipCode}`,
  bedroom: `${req.body.formData.bedroom} `,
  bathroom: `${req.body.formData.bathroom} `,
  cleaningType: `${req.body.formData.cleaningType} `,
  Frequency: `${req.body.formData.cleaningFrequency} `,
  Frequency: `${req.body.formData.cleaningFrequency} `,
  Oven:  `${req.body.formData.oven} `,
  numOven: `${req.body.formData.numberOfOven} `,
  Fridge:  `${req.body.formData.fridge} `,
  Window:  `${req.body.formData.window} `,
  Fan:  `${req.body.formData.fan} `,
  Laundry:  `${req.body.formData.laundry} `,
  Date:  `${req.body.formData.cleaningDate} `,
  cleaningTime:  `${req.body.formData.cleaningTime} `,
//   html: `${req.body.messageState.message}`
};



let mailOptions = {
   from: `${req.body.formData.email}`,
   to: process.env.EMAIL,
   cc:'vegatch1@gmail.com, migaellepithon@gmail.com',
   subject: `Message of ${req.body.formData.firstName} ${req.body.formData.lastName}from Benskya's Booking form`,
  //  text: `<p>${message.text}<p/>  <p>${message.phone}<p/>`,
   html:`<p>Name: ${message.from}</p>
         <p>Phone: ${message.phone}</p>        
         Address: <p>${message.address}</p>  
         <p># of bedhroom: <strong>${message.bedroom}</strong></p>
         <p># of bathroom: <strong>${message.bathroom}</strong></p>
         <p>Type of cleaning requested: <strong>${message.cleaningType}</strong></p>         <p>Frequency: <strong>${message.Frequency}<strong></p>
         <p>Additional services requested</p>
        <p>Oven: <strongp>${message.numOven}</strong></p>
         `,
};

 transporter.sendMail(mailOptions, function (err, data) {
   if (err) {
     res.json({
       status: "fail",
     });
   } else {
     console.log("== Message Sent ==");
     res.json({
       status: "success",
     });
   }
 });
});

const port = 3001;
app.listen(port, () => {
 console.log(`Server is running on port: ${port}`);
});


 