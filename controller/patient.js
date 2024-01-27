const db = require('../dbConnect/db');
const { validatePatientData } = require('./validation')


const addPatient = async (req, res) => {
    try {
        const { name, address, email, phone_number, password, photo, psychiatrist_id, hospital_id } = req.body;
        const errors = validatePatientData(req.body);
        if (Object.keys(errors).length > 0) {
            return res.status(400).json({ errors })
        }

        const [result] = await db.pool.query("INSERT INTO patients (name, address, email, phone_number, password, photo, psychiatrist_id, hospital_id) VALUES(?,?,?,?,?,?,?,?)", [
            name, address, email, phone_number, password, photo, psychiatrist_id, hospital_id
        ])
        res.status(201).json({ message: 'Patient registered successfully' });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ error: "Something went wrong" })
    }
}


const fetchDataOfHospital = async (req, res) => {
    try {
        const hospital_id = req.body;
        console.log("ok");
        const result = await Promise.all([
            db.pool.execute("SELECT h.id as HospitalID, h.name as HospitalName ,COUNT(p.id) as TotalPsychiatristCount ,COUNT(pat.id) as TotalPatientsCount FROM hospitals h LEFT JOIN psychiatrists p on h.id=p.hospital_id LEFT JOIN patients pat on p.id =pat.psychiatrist_id WHERE h.id=?", [hospital_id]),
            db.pool.execute("SELECT p.id as Id, p.name as Name, COUNT(*) as PatientsCount FROM psychiatrists p LEFT JOIN patients pat ON p.id = pat.psychiatrist_id WHERE p.hospital_id=? GROUP BY p.id;", [hospital_id])
        ])
        console.log(result);
        res.status(201).json(result);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ error: "Something went wrong" })
    }
}


module.exports = { addPatient, fetchDataOfHospital };