const mongoose = require('mongoose')


const dataSchema = mongoose.Schema({
    title: String,
    position: String,
    name: String,
    thrName: String,
    frsName: String,
    yearBorn: String,
    placeBorn: String,
    sex: String,
    passportNumber: String,
    placeLiving: String,
    education: String,
    email: String,
    phoneNumber: Number,
    homeNumber: Number,
    inn: String,
    armAccounting: String,
    startJob: Number,
    lngKnow: String,
    mtvLetter: String,
    image: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})


const DataSTF = mongoose.model('DataSTF', dataSchema)
module.exports = DataSTF