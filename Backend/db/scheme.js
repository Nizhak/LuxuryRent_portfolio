const mongoose = require('mongoose');


const autosSchema = new mongoose.Schema({
    title: {type: String, required: true},
    src: {type: String, required: true},
    freeCounter: {type: String, required: true, min: 0},
    counter: {type: String, required: true, min: 0},
    price: {type: String, required: true, min: 0},
})

const rentedAutoSchema = new mongoose.Schema ({
    fullName: {type: String, required: true},
    driverLicense:{type: String, required: true},
    duration: {type: Number, required: true},
    auto: {type: mongoose.Schema.Types.ObjectId, ref: "autos", required: true},
    carNumber: {type: String, required: true},
    email: {type: String, required: true},
    tel: {type: String, required: true},
})


module.exports = {
    autosSchema,
    rentedAutoSchema,
}