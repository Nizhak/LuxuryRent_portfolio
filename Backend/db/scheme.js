const mongoose = require('mongoose');

const autos = new mongoose.Schema({
    title: String,
    src: String,
    freeCounter: Number,
    counter: Number,
    price: Number,
})


module.exports = {
    autos,
}