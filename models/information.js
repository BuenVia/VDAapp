const mongoose = require('mongoose')

const infoSchema = new mongoose.Schema({
    clientName: {
        type: String,
        required: true
    },
    clientCompany: {
        type: String,
        required: true
    },
    clientEmail: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('info', infoSchema)