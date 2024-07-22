  const Cars = require('../models/car');
  const mongoose =require('mongoose')

  const index = async (req, res,next) => {
    
    res.render("index.ejs");
  };

  const newcar = async (req,res,next)=>{

    await Cars.create(req.body);
    res.redirect('/cars');

  }


  const viewall = async (req,res,next)=>{
    
  const cars =  await  Cars.find({});
  console.log(cars)
  res.render('cars/index.ejs',{cars})
  }

  module.exports = {
    index,
    newcar,
    viewall,
    // add each of your controller function names here
  };