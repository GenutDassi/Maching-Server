const express = require('express');
require('dotenv').config();
// const dotenv = require('dotenv');
// dotenv.config();

//const logger = require('./middlewares/logger');
const donations = require('./controller/donationController')
const donation = require('./controller/donationController/:funfraiserId')
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;

//app.use(logger('start'));
app.use(express.json());//the middleware will ensure that all body is loaded (mostly for POST request)

app.get('/', (req, res) => {
    res.contentType = "text/html"
    res.send(`<h1>😁 Welcome To Our Maching API 😁</h1>
    <ul>
        <li><a href="http://127.0.0.1:${port}/maching/donations">get all donations</a></li>
        <li><a href="http://127.0.0.1:${port}/maching/donations/1">get a donation</a></li>

    </ul>`);
})
    //הצגת פרטי קמפיין
    //הצגת קבוצות
    //הצגת מתרימים והתרומות שהשיגו
app.use('/maching/donations', donations);
app.use(`/maching/donations/:funfraiserId`,donation);

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

//app.use(logger('end'));

app.listen(port, () => {
    console.log(`I am up in http://127.0.0.1:${port}`);
})