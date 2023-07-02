const express = require('express');
require('dotenv').config();

const donations = require('./controller/donationController')
const fundraisers = require('./controller/fundraiserController')
const fundraisersGroups = require ('./controller/fundraisersGroupController')
const maching = require ('./controller/machingController')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/maching/donations', donations);
app.use('/maching/fundraisers', fundraisers)
app.use('/maching/fundraisersGroups', fundraisersGroups)
app.use('/maching', maching)

app.use ((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send("sorry something get wrong😢")
})

app.listen(port, () => {
    console.log(`I am up in http://127.0.0.1:${port}/maching`);
})