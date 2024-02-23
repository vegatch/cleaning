// const express = require('express'),
//     app = express(),
//     bodyParser = require('body-parser');
// require('express-async-errors')

// const db = require('./db'),
// customerRoutes = require('./controllers/customerControl')


// app.use('/api/customer', customerRoutes);

// app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// app.use((err, req, res, next) => {
//     console.log('ERROR',err)
//     res.status(err.status || 500).send('Something went wrong')
// })

// db.query("SELECT 1")
// .then(()=>{
//     console.log('DB connection succeed')
//     app.listen(3001, ()=> console.log('server started at port: 3001'))
// })
// .catch(err =>console.log('DB connection faile \n '+err))

const cors = require("cors");
const express = require('express'),
    app = express(),
    bodyparser = require('body-parser');
require('express-async-errors')
const nodemailer = require("nodemailer");
const db = require('./db');
require("dotenv").config();

    employeeRoutes = require('./controllers/customerControl')


//middleware
app.use(bodyparser.json())
app.use(cors());
app.use('/api/employees', employeeRoutes)
app.use((err, req, res, next) => {
    console.log(err)
    res.status(err.status || 500).send('Something went wrong!')
})




db.query("SELECT 1")
    .then(() => {
        console.log('db connection  succeeded.')
        app.listen(4001,
            () => console.log('server started at 4001'))
    })
    .catch(err => console.log('db connection failed. \n' + err))