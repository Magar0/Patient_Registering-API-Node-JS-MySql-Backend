const express = require('express');
const patient = require('../controller/patient')

const router = express.Router();
const { addPatient, fetchDataOfHospital } = patient;

router.post('/', addPatient)
router.get('/', fetchDataOfHospital)

module.exports = router;