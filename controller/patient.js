const bcrypt = require('bcryptjs');
const db = require('../dbConnect/db');
const { validatePatientData } = require('./validation')


//register a patient
const addPatient = async (req, res) => {
    try {
        const { name, address, email, phone_number, password, photo, psychiatrist_id, hospital_id } = req.body;
        const errors = validatePatientData(req.body);
        if (Object.keys(errors).length > 0) {
            return res.status(400).json({ errors })
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const [result] = await db.pool.query("INSERT INTO patients (name, address, email, phone_number, password, photo, psychiatrist_id, hospital_id) VALUES(?,?,?,?,?,?,?,?)", [
            name, address, email, phone_number, hashedPassword, photo, psychiatrist_id, hospital_id
        ])
        res.status(201).json({ message: 'Patient registered successfully' });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ error: "Something went wrong" })
    }
}

//Get all data of a hospital
const fetchDataOfHospital = async (req, res) => {
    try {
        const { hospital_id } = req.body;
        console.log("ok");

        const [result1] = await db.pool.query("SELECT h.name as hospital_name, COUNT(*) as total_psychiatrists FROM hospitals h LEFT JOIN psychiatrists p ON h.id = p.hospital_id where h.id=?", [hospital_id]);
        const [result2] = await db.pool.query("SELECT COUNT(*) as total_patients FROM hospitals h LEFT JOIN patients pat ON h.id=pat.hospital_id WHERE h.id=?", [hospital_id]);
        const [result3] = await db.pool.query("SELECT p.id, p.name, COUNT(*) as patients_count FROM psychiatrists p LEFT JOIN patients pat ON p.id= pat.psychiatrist_id WHERE p.hospital_id=? GROUP BY p.id;", [hospital_id]);

        const object = {
            HospitalName: result1[0].hospital_name,
            TotalPsychiatristCount: result1[0].total_psychiatrists,
            TotalPatientsCount: result2[0].total_patients,
            PsychiatristDetails: result3
        }
        res.status(201).json(object);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ error: "Something went wrong" })
    }
}


module.exports = { addPatient, fetchDataOfHospital };