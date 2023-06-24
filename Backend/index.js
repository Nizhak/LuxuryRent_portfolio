const express = require("express");
const mongoose = require('mongoose');
const { autosSchema, rentedAutoSchema } = require("./db/scheme.js")


const app = new(express);
const autos = mongoose.model('Auto', autosSchema)
const rentedAuto = mongoose.model('RentedAuto', rentedAutoSchema)

app.use(express.json());
// app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// All auto
app.get('/freeall', (req, res) => {
    try {
        res.json({
            result: "ok"
        })
    } catch (err) {
        console.log(err)
        res.status(500).send("Error")
    }
})


async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/LuxuryRent')
        await app.listen(3000, () => {
            console.log("Server started")
        })
    } catch (err) {
        console.log(err)
    }
}

main()