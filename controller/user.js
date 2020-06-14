const express = require('express');
const bodyParser=require("body-parser");


const User = require('../models/user');



const routes = express.Router();

routes.use(bodyParser.json()); 
routes.use(bodyParser.urlencoded({ 
    extended: false
}));


const path = require('path');

exports.postregister = (req,res,next) => {

    
    //let img = req.body.image;
    // console.log(req.body.name);
    // console.log(req.body.email);
    // console.log(req.body.password);
    let Fname = req.body.Fname;
    let Lname = req.body.Lname;
    let email =req.body.email; 
    let pass = req.body.password; 
    let number = req.body.phone;
    const user = new User({
        Lname: Lname,
        Fname: Fname,
        phnumber: number,
        Email: email,
        Password: pass,
    });
  user
    .save(function(err) {
            if (err) {
                res.render('registration',{
                    pageTitle : 'Registration',
                    error : 'Username is not Available'
                });
            }
            else{
                console.log(email)
            res.redirect('/index');
             
            }
      });
//   const fg1 = user.fetchAll();    
//   console.log(fg1);
};

exports.register = (req,res,next) =>{
    
    res.render('registration',{
        pageTitle : 'Registration',
        error : ''

    });
    
    
};

exports.login = (req,res,next) =>{
    res.render('login',{
        pageTitle : 'Login'
    });
};




