const mongoose = require('mongoose')

const partnerSchema = new mongoose.Schema({
    partnerCompany: {
        type: String,
        required: true
    },
    partnerEmail: {
        type: String,
        required: true
    },
    partnerPhone: {
        type: String,
        required: true
    },
    partnerWebsite: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('partner', partnerSchema)