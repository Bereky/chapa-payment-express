/* 
    CHAPA API PAYMENT INTEGRATION TEST
    Required: Chapa secret key || GET THE KEY BY REGISTERING @ https://dashboard.chapa.co/register
*/

const express = require("express")
const app = express()
const axios = require("axios").default
require("dotenv").config()
const PORT = process.env.PORT || 4400

const CHAPA_URL = process.env.CHAPA_URL || "https://api.chapa.co/v1/transaction/initialize"
const CHAPA_AUTH = process.env.CHAPA_AUTH // || register to chapa and get the key

app.set("view engine", "ejs")

// req header with chapa secret key
const config = {
    headers: {
        Authorization: `Bearer ${CHAPA_AUTH}`
    }
}

// entry for the front end
app.get('/', (req, res) => {
    res.render("index")
})

// initial payment endpoint
app.post("/api/pay", async (req, res) => {

         // chapa redirect you to this url when payment is successful
        const CALLBACK_URL = "http://localhost:4400/api/success/"

        // a unique reference given to every transaction
        const TEXT_REF = "tx-myecommerce12345-" + Date.now()

        // form data
        const data = {
            amount: '100', 
            currency: 'ETB',
            email: 'ato@ekele.com',
            first_name: 'Ato',
            last_name: 'Ekele',
            tx_ref: TEXT_REF,
            callback_url: CALLBACK_URL + TEXT_REF
        }

        // post request to chapa
        await axios.post(CHAPA_URL, data, config)
            .then((response) => {
                res.redirect(response.data.data.checkout_url)
                res.json(response.data)
            })
            .catch((err) => console.log(err))
})

// verification endpoint
app.get("/api/success/:id", async (req, res) => {
    
        //verify the transaction 
        await axios.get("https://api.chapa.co/v1/transaction/verify/" + req.params.id, config)
            .then((response) => {
                console.log(response)
                res.render("success") //redirect to success page
            }) 
            .catch((err) => console.log("Payment can't be verfied", err))
})

app.listen(PORT, () => console.log("Server listening on port:", PORT))