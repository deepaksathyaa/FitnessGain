const express = require('express');


const bodyParser=require("body-parser");

const videos = require('../models/videos');



const routes = express.Router();

routes.use(bodyParser.json()); 
routes.use(bodyParser.urlencoded({ 
    extended: false
}));







exports.getcalories = (req,res,next) =>{

    res.render('caloriesfinder',{
        pageTitle : "caloriesfinder",
    });

};


exports.getindex = (req,res,next) =>{

                res.render('index',{
                    pageTitle : "index",
                });
         
};

exports.postindex = (req,res,next) =>{

    res.render('index',{
        pageTitle : "index",
    });

};

exports.postvideos= (req,res,next) =>{
    let h = req.body.height;
    let w = req.body.weight;
    let a = req.body.age;
    let g = req.body.gender;
    let x = 0;
    if(g === "Male")
              {
                x = 66.5 + 13.8 * (w) + 5 * h / 6.8 * a
              }
              else
              {
                  x =  655.1 + 9.6 * (w) + 1.9 * (h) / 4.7 * a;
              }
    res.render('videos',{
        pageTitle : 'Workout Videos',
        calories : 'Your Calories: ' + x + ' Proceed ur Exercise',

    });
};
 exports.getvideos = (req,res,next) =>{
    res.render('videos',{
        pageTitle : 'Workout Videos',
        calories : '',
    })
 };

exports.getchest = (req,res,next) =>{
    videos.
  find().
  where('type').equals('chest').then(video => {
    res.render('video',{
        pageTitle : "Chest",
        vid : video
    });
  }).catch(err => {
      console.log(err);
  });
};

exports.getarm = (req,res,next) =>{
    videos.
  find().
  where('type').equals('arm').then(video => {
    res.render('video',{
        pageTitle : "Arm",
        vid : video
    });
  }).catch(err => {
      console.log(err);
  });
};

exports.getleg = (req,res,next) =>{
    videos.
  find().
  where('type').equals('leg').then(video => {
    res.render('video',{
        pageTitle : "leg",
        vid : video
    });
  }).catch(err => {
      console.log(err);
  });
};

exports.getabs = (req,res,next) =>{
    videos.
  find().
  where('type').equals('abs').then(video => {
    res.render('video',{
        pageTitle : "Abs",
        vid : video
    });
  }).catch(err => {
      console.log(err);
  });
};