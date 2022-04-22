/*
1.import express and express.Router module
2. export the router
 */

const express = require('express')
const router = express.Router()
const model = require('../Model/model')


//router to post data to the db
router.post('/post', async (req, res) => {
    const data = new model({
        name: req.body.name,
        age: req.body.age
    })
    try {
        const dataToSave = await data.save()
        res.status(200).json(dataToSave)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
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