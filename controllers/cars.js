  const Cars = require('../models/car');
  const mongoose =require('mongoose')

  const index = async (req, res,next) => {
    
    res.render("index.ejs");
  };

 const createpage = async (req,res,next)=>{
  res.render('cars/new.ejs');
  };

  const newcar = async (req,res,next)=>{

    await Cars.create(req.body);
    res.redirect('/cars');

  }
const showone = async(req,res,next)=>{
  const car =await Cars.findById(req.params.id);
  res.render('cars/show.ejs',{car})
}

  const viewall = async (req,res,next)=>{
    
  const cars =  await  Cars.find({});
  
  res.render('cars/index.ejs',{cars})
  }



  const edit = async (req,res,next)=>{
    const car = await Cars.findById(req.params.id);
    res.render('cars/edit.ejs', { car });
  }

  const update = async (req, res, next) => {
    await Cars.findByIdAndUpdate(req.params.id, req.body);
     res.redirect(`/cars/${req.params.id}`);
  }
  const Delete =async (req, res, next) => {
    await Cars.findByIdAndDelete(req.params.id);
     res.redirect(`/cars`);
  }
  module.exports = {
    index,
    newcar,
    viewall,
    showone,
    createpage,
    edit,
    update,
    Delete,
    // add each of your controller function names here
  };