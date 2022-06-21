const mongoose = require('mongoose')

const webinarSchema = new mongoose.Schema({
    webinarName: {
        type: String,
        required: true
    },
    webinarDate: {
        type: String,
        required: true
    },
    webinarTime: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('webinar', webinarSchema)