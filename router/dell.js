const express = require('express');
const { models } = require('mongoose');
const router = express.Router()
const Dell = require('../models/dell')



router.get('/', async(req, res) => {
    try {
        const dell = await Dell.find()
        res.json(dell)
    }catch(error){
        res.send("error" + error)
    }
})

router.get('/:id', async(req, res) =>{
    try{
    const dell = await Dell.findById(req.params.id)
    res.json(dell)
    }catch(error){
        res.end("error"+ error)
    }
    
})

router.post('/', async(req, res) => {
    const dell = new Dell({
        name: req.body.name,
        tech:   req.body.tech,
        sub: req.body.sub
    })
    try {
        const a1 = await dell.save()
        res.json(a1)

    }catch(error){
        res.send(error)
    }
})

router.patch('/:id', async(req, res) => {
    try {
        const dell = await Dell.findById(req.params.id)
        dell.sub = req.body.sub
        const a1 = await dell.save()    
        res.json(a1) 

    }catch(error){
        res.send("error"+ error)
    }
})

router.delete('/:id', async(req,res) => {
    try{
        const dell = await Dell.findByIdAndDelete(req.params.id)
        const a1 = await dell.delete()
        res.send("item deleted")

    }catch(error){
        res.send("error"+ error)
    }
})
module.exports = router