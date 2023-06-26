const mongoose = require('mongoose');


const autosSchema = new mongoose.Schema({
    title: {type: String, required: true},
    src: {type: String, required: true},
    counter: {type: Number, required: true, min: 0},
    price: {type: String, required: true, min: 0},
    brand: {type: String, required: true}
})

const rentedAutoSchema = new mongoose.Schema ({
    fullName: {type: String},
    driverLicense:{type: String},
    duration: {type: Number, required: true},
    price: {type: Number},
    auto: {type: mongoose.Schema.Types.ObjectId, ref: "autos", required: true},
    carNumber: {type: String},
    email: {type: String},
    tel: {type: String},
    isPayment: {type: Boolean, default: false}
})


module.exports = {
    autosSchema,
    rentedAutoSchema,
}