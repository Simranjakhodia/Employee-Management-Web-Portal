

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const routes = require('./route/employee');

const app = express();

app.use(cors());
app.use(express.json()) 
app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended: true}));


dotenv.config();
mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database Connected"));

app.use('/employee', routes );

app.get('/', (req, res) => {
    console.log("Hello From Homepage");
    res.send("Hello From Homepage");
});
app.listen(4000, () => console.log("Server is up and running"));


