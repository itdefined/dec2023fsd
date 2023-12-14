require("dotenv").config()
const express = require('express')
const formidable = require('express-formidable')

require('./config/database').connect()

const app = express()
const PORT = process.env.API_PORT

const Student = require('./model/user')
const user = require("./model/user")

app.post('/register', formidable(), async function (req, res){
    let {firstName, lastName, email, password} = req.fields
    if (! (firstName && lastName && email && password)){
        res.status(400).send('Provide all the inputs')
    }
    else{

        if (await Student.findOne({email})){
            res.send("user already exist")
        }
        else{
            let user = await Student.create({
                        firstName:firstName,
                        lastName:lastName,
                        email:email,
                        password:password});

            res.json(user)
        }        
    }
})

app.listen(PORT, ()=> console.log(`Project is running at ${PORT} port`))