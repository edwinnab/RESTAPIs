/*1.import express and mongoose
2.initialize the app, set the port
3.listen to the server on the active port
4.load the database url fromm the .env file
5.connect to the database, mongoose.connect(),
6.declare the database, equates to mongoose.connection
7. throw success and error messages when the connection to db is active or fails respectively
8.import the routes file and use it(ensure to include the base url),

 */
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const routes = require('./routes/routes')

const app = express()
const port = 3000
app.use(express.json()); //allows the server to accept data in JSON format
app.use('/api', routes);

const mongoString = process.env.DATABASE_URL
mongoose.connect(mongoString)
const database = mongoose.connection

/*
database.on means that it will connect to the db
database.once means that db function will run only once
 */
database.on('error', (error) => {
    console.log(error)
})
database.once('connected', () => {
    console.log('Database Connected')
})


//create a get endpoint that welcomes the user to the server

app.get('/', (req, res) => {
    res.send("Hello world!!")
})

//listen to the server
app.listen(port, (req, res) => {
    console.log(`Serve listening at port ${port}`)
})