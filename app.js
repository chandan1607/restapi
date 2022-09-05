const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/dell'


const app = express()

mongoose.connect(url, {useNewUrlParser: true})
const con = mongoose.connection

con.on('open', function(){
    console.log('connecting..')
})
 
app.use(express.json());

const dellRouter = require('./router/dell')
app.use('/dell',dellRouter)

app.listen(9000, () =>  {
console.log("Server Strarted")
})