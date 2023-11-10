const bcrypt = require('bcrypt');
const dbConnect = require('./db/dbConnect');
const User = require('./db/userModel');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use('/login', (req,res) => {
    res.send({
        token: 'test'
    });
});

app.post('/register', (req,res) => {
    // hash password
    bcrypt.hash(req.body.password, 10)
    .then((hashedPassword) => {
        // create new user instance and collect data
        const user = new User({
            email: req.body.email,
            password: req.body.password,
        });

        // save new user
        user.save()
        .then((result) => {
            response.status(201).send({
                message: "User created successfully",
                result, 
            });
        })
        .catch((err) => {
            response.status(500).send({
                message: "Error creating user",
                err,  
            });
        });
    })
    .catch((e) => {
        response.status(500).send({
            message: "Password was not hashed successfully",
                e, 
        })
    })
})

app.listen(8000, () => console.log('successful'));



dbConnect();

// mongodb 
// mongodb+srv://admin:<password>@cluster0.jfsjr3t.mongodb.net/?retryWrites=true&w=majority
