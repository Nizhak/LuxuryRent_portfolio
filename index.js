const express = require("express");
const mongoose = require('mongoose');
const path = require('path');
const { autosSchema, rentedAutoSchema } = require("./db/scheme.js")
const cors = require('cors')
const { faker } = require('@faker-js/faker');

const app = new(express);
const autos = mongoose.model('Autos', autosSchema)
const rentedAuto = mongoose.model('RentedAuto', rentedAutoSchema)

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'dist')));


// All auto
app.get('/all', async (req, res) => {
    try {
        var result = await autos.find({
            brand: { $exists: true },
        }).sort({
            price: (req.query.price ?? null)
        }).limit((req.query.limit ?? null))
        res.json(result)
    } catch (err) {
        console.log(err)
        res.status(500).send("Error")
    }
})
app.post("/payment/create", async (req, res) => {
    try {
        if (req.body.id && req.body.duration && req.body.fullName && req.body.email && req.body.tel && req.body.driverLicense) {
            var result = await autos.findOne({_id: req.body.id})
            if (result != null) {
                let rented = new rentedAuto({
                    duration: req.body.duration,
                    auto: result._id,
                    price: (result.price * req.body.duration),
                    email: req.body.email,
                    tel: req.body.tel,
                    fullName: req.body.fullName,
                    driverLicense: req.body.driverLicense,
                })
                rented.save()
                res.json(rented)
            } else {
                res.status(400).json({Status: "error"})
            }
        } else {
            res.status(400).json({Status: "error"})
        }

        if (process.env.Node_ENV == "development") console.log(req.body);
        // res.json(req.body)
    } catch (err) {
        console.log(err)
        res.status(500).send("Error")
    }
})
app.post("/payment", async (req, res) => {
    try {
        if (
            (req.body.id && req.body.cardName && req.body.cardNumber && req.body.cardMonth && req.body.cardYear && req.body.cardCvv) &&
            (req.body.cardName != "" && req.body.cardNumber.replace(' ', '').length == 16)
        ) {
            var response = await rentedAuto.findById({_id: req.body.id})
            response.isPayment = true
            await response.save()
            res.json(response)
        } else {
            res.status(400).json({
                status: "error"
            })
        }
        if (process.env.Node_ENV == "development") console.log(req.body);
    } catch (err) {
        console.log(err)
        res.status(500).send("Error")
    }
})

app.post("/myauto", async (req, res) => {
    try {
        if (process.env.Node_ENV == "development") console.log(req.body);
        if (req.body.id) {
            var rented = await rentedAuto.findById(req.body.id)
            if (process.env.Node_ENV == "development") console.log(rented);  
            if (rented) {  
                if (rented.isPayment) {
                    var auto = await autos.findById(rented.auto)
                    if (!rented.carNumber) {
                        if (auto.counter > 0) {
                            auto.counter =- 1;
                            auto.save()
                            rented.carNumber = faker.vehicle.vrm()
                            await rented.save()
                        }
                    }                
                    res.json({
                        auto,
                        carNumber: rented.carNumber,
                        duration: rented.duration
                    })                        
                } else {
                    res.status(400).json({
                        status: "Not Payment"
                    })
                }
            } else {
                res.status(404).json({
                    status: "Order not found"
                })
            }
        }
    } catch (err) {
        console.log(err)
        res.status(500).send("Error")
    }
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});


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