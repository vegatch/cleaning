const express = require("express");
const nodemailer = require("nodemailer");
var hbs = require('nodemailer-express-handlebars');
const path = require('path')
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

const handlebarOptions = {
  viewEngine: {
    extName: ".handlebars",
    partialsDir: path.resolve('./container'),
    defaultLayout: false,
  },
  viewPath: path.resolve('./container'),
  extName: ".handlebars",
}

transporter.use('compile', hbs(handlebarOptions));

transporter.verify((err, success) => {
 err
   ? console.log(err)
   : console.log(`=== Server is ready to take messages: ${success} ===`);
});





app.post("/contact", function (req, res) {
 
let message = {
  from: `${req.body.messageState.fullname}`,
  phone: `${req.body.messageState.phonenumber} `,
  email: `${req.body.messageState.email}`,
  text: `${req.body.messageState.message}`,

//   html: `${req.body.messageState.message}`
};



let mailOptions = {
   from: `${req.body.messageState.email}`,
   to: process.env.EMAIL,
   cc:'vegatch1@gmail.com, migaellepithon@gmail.com',
   subject: `Message of ${req.body.messageState.fullname} from Benskya's contact form`,
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

app.post("/quote", function (req, res) {
 console.log(req.body)
let numOfOven = 0
if (req.body.formData.numOven !== ''){
  numOfOven = req.body.formData.numOven
}else{
  numOfOven 
}

let numOfFridge = 0
if (req.body.formData.numFridge !== ''){
  numOfFridge = req.body.formData.numFridge
}else{
  numOfFridge 
}

let numOfWindow = 0
if (req.body.formData.numWindow !== ''){
  numOfWindow = req.body.formData.numWindow
}else{
  numOfWindow 
}

let numOfFan = 0
if (req.body.formData.numFan !== ''){
  numOfFan = req.body.formData.numFan
}else{
  numOfFan 
}

let numOfLaundry = 0
if (req.body.formData.numLaundry !== ''){
  numOfLaundry = req.body.formData.numLaundry
}else{
  numOfLaundry 
}

let time = ''
if (req.body.formData.selectCleanTime === '1'){
  time = '8:00 AM'
}else if(req.body.formData.selectCleanTime === '2'){
  time = "11:00 AM"
}else if(req.body.formData.selectCleanTime === '3'){
  time = "2:00 PM"
}

let numOfBlind = 0
if (req.body.formData.numBlind !== ''){
  numOfBlind = req.body.formData.numBlind
}else{
  numOfBlind 
}

let apartNum =''
if(req.body.formData.apartNum !== ''){
  apartNum = `Apt #: ${req.body.formData.apartNum}`
}else{
  apartNum
}
let message = {
  from: `${req.body.formData.firstname} ${req.body.formData.middlename} ${req.body.formData.lastname}`,
  phone: `${req.body.formData.phonenumber} `,
  email: `${req.body.formData.email}`,
  address: `${req.body.formData.streetAddress}   ${apartNum} ${req.body.formData.city} ${req.body.formData.stateAddress} ${req.body.formData.zipcode}`,
  bedroom: `${req.body.formData.selectBedNum} `,
  bathroom: `${req.body.formData.selectBathNum} `,
  cleaningType: `${req.body.formData.selectCleanTypeLabel} `,
  Frequency: `${req.body.formData.cleaningFrequencyLabel} `, 
  Oven:  `  ${req.body.formData.oven} `,
  // numOven: `  ${req.body.formData.numOven} `,
  numOven: `  ${numOfOven} `,
  Fridge:  `  ${req.body.formData.numFridge} `,
  numFridge:  `  ${numOfFridge} `,
  Window:  `  ${req.body.formData.window} `,
  numWindow: `  ${numOfWindow} `,
  Fan:  `  ${req.body.formData.fan} `,
  numFan:  `  ${numOfFan} `,
  Laundry:  ` ${req.body.formData.laundry} `,
  numLaundry:  `  ${numOfLaundry} `,
  Blind:  `   ${req.body.formData.blind} `,
  numBlind:  `  ${numOfBlind} `,
  CleaningDate:  `  ${req.body.formData.cleaningDate} `,
  CleaningTime:  `   ${time} `,
  SubTotal: `  ${req.body.formData.cleanSubTotal} `,
  Discount: `  ${req.body.formData.cleanDiscount} `,
  Total: `  ${req.body.formData.cleanTotal} `,
  QuoteId: `  ${req.body.formData.cleanId} `,
  QuoteDate: `  ${req.body.formData.requestDate} `,
  CleanDate: `  ${req.body.formData.cleanDate} `,
//   html: `${req.body.messageState.message}`
};



let mailOptions = {
   from: `${req.body.formData.email}`,
  //  to: process.env.EMAIL,
  //  cc:'vegatch1@gmail.com', 
  to: 'vegatch1@gmail.com', 
  //  cc:'vegatch1@gmail.com, migaellepithon@gmail.com',
   subject: `Message of ${req.body.formData.firstname} ${req.body.formData.lastname}from Benskya's Booking form`,
  //  text: `<p>${message.text}<p/>  <p>${message.phone}<p/>`,
  template: 'htmlEmail',
  context: {
    
    title: 'Book Now: cleaning spots are filled quickly & avoid long wait',
    navigation: 'Benskya',
    navigationR: 'Booking',
    subTitle:'Book your cleaning now and enjoy a cleaner space. ',
    customer_greet: 'Specially quoted for:',
    Name: `${message.from}`,
    Address: `${message.address}`,
    Phone:`${message.phone}`,
    Quote_id : `${message.QuoteId}`,
    Request_Date: ` ${message.QuoteDate}`,
    Clean_date: ` ${message.CleanDate}`,
    CleanDesc: ` ${message.cleaningType} :`,
    Bedroom_num: `${message.bedroom}`,
    Bathroom_num: `${message.bathroom}`,
    Oven_num:`${message.numOven}`,
    Fridge_num:`${message.numFridge}`,
    Window_num:`${message.numWindow}`,
    Fan_num:`${message.numFan}`,
    blind_num:`${message.numBlind}`,
    Laundry_num:`${message.numLaundry}`,
    Sub:`$ ${message.SubTotal}`,
    Disc:` - ${message.Discount} %`,
    Total:`$ ${message.Total}`,

  }
   
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


 