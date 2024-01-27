//validation
const validatePatientData = (data) => {
    const { name, address, email, phone_number, password, photo } = data;
    const errors = {};

    if (!name.trim()) {
        errors.name = "Name is required."
    }
    if (!address || address.trim().length < 10) {
        errors.address = "Address required and should be at least 10 characters"
    }

    const emailRegex = /^[a-z][\w.-]+@[a-z-]+\.[a-z]{2,}$/i
    if (!email || !emailRegex.test(email)) {
        errors.email = "Invalid email"
    }

    if (!phone_number || isNaN(phone_number) || phone_number.length > 15) {
        errors.phone_number = "Invalid phone number"
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,15}$/
    if (!password || !passwordRegex.test(password)) {
        errors.password = "password must contain one upper, one lower character and a number. Max length 15 and min length 8"
    }
    // if (!photo) {
    //     errors.photo = "Photo is required";
    //   }

    return errors;
}

module.exports = { validatePatientData };