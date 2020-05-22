const express = require('express');
const mysql = require('mysql');

const port = process.env.PORT || 8007


const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());

app.use('/assets', express.static('assets'));

app.use('/', require('./routes/auth'))
// app.use('/', require('./routes/index'));
// app.use('/api/url', require('./routes/url'));


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
