const express = require('express');
const cors = require('cors');
const dotEnv = require('dotenv');

// const dbConnect = require('./dbConnect/db');
const patientRoutes = require('./routes/patients')


dotEnv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors({ origin: "*" }));

app.get('/', (req, res) => {
    res.status(200).json({ message: "This is a Patient registering API" })
})

app.use('/patients', patientRoutes);


app.use('/', (err, req, res, next) => {
    res.status(500).json("Something Went Wrong")
})

app.listen(PORT, () => {
    console.log("server is running on port:", PORT)
})


module.exports = app;