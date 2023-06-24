const express = require("express");
const mongoose = require('mongoose');
const { autos } = require("./db/scheme.js")


const app = new(express);

// All auto
app.get('/', (req, res) => {
    
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