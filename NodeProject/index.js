require("dotenv").config()
const express = require('express')
const formidable = require('express-formidable')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
let verifyToken = require('./middleware/authentication');

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

            let enc_password = await bcrypt.hash(password, 10)

            let user = await Student.create({
                        firstName:firstName,
                        lastName:lastName,
                        email:email,
                        password:enc_password});

            let token = jwt.sign({ user_id:user._id, email},
                process.env.TOKEN_KEY,
                 { expiresIn: "5h" });

            user.token = token

            res.json(user)
        }        
    }
})



app.post('/login', formidable(), async function (req, res){
    let { email, password} = req.fields
    if (! (email && password)){
        res.status(400).send('Provide all the inputs')
    }
    else{
        let user = await Student.findOne({email})

        if (user && (await bcrypt.compare(password, user.password)))
        {
            let token = jwt.sign({ user_id:user._id, email},
                process.env.TOKEN_KEY,
                 { expiresIn: "5h" });

                 
            user.token = token

            res.json(user)
        }
        else{
            res.status(403).send('Incorrect username or password!!')
        }
    }
})


app.get('/profile', verifyToken ,function (req, res){

    res.send('Hello welcome to ITD')

});




app.listen(PORT, ()=> console.log(`Project is running at ${PORT} port`))