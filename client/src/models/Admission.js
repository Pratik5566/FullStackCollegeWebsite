// models/Admission.js
const mongoose = require('mongoose');

const AdmissionSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    phone: String,
    dob: Date,
    course: String,
    message: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Admission', AdmissionSchema);
