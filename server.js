// require express
const express = require("express")

// set express to a variable
const app = express()

// set PORT to 3000
const PORT = 3000

// connect to our drinks data
const drinks = require('./models/drinks.js')

// get route for the landing page
app.get('/', (req, res) => {
    res.send("Welcome to the gitPub App!")
})

// get route for drinks
app.get('/drinks', (req, res) => {
    res.render(
        './drinks_index.ejs',
        { drinkList : drinks }
    )
})

// listen to port
app.listen(PORT, () => {
    console.log(`Listening to ${PORT}`)
})



/* Get Template
app.get('', () => {})
*/