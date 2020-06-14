const express = require('express');

exports.getaddProduct= (req,res,next) =>{
    res.render('videos',{
        pageTitle : 'Most'
    });
};

exports.postaddProduct= (req,res,next) =>{
    res.render('videos',{
        pageTitle : 'Most'
    });
};