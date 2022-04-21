/*
1.import express and express.Router module
2. export the router
 */

const express = require('express')
const router = express.Router()
//const Model = require('./Model/model')


//router to post data to the db
router.post('/post', (req, res) => {
    res.send("Post data to the database")
})

router.get('/getAll', (req,res)=>{
    res.send("Gets all the data from the database")
})
router.get('/getAll/:id', (req,res)=> {
    res.send(req.params.id)
})
router.patch('/update/:id', (req,res) => {
    res.send("Updates data on the specific user id")
})
router.delete('/delete/:id', (req,res) =>{
    res.send("Deletes user specific data")
})

module.exports = router;