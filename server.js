const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config();
const morgan =require('morgan')
const app = express();
const carsCtrl = require("./controllers/cars");
const Cars = require ('./models/car');
const methodOverride = require("method-override");
// DATABASE
require('./config/database');

// -----MIDDLEWARE-------------
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
//  --------LANDING-PAGE-----------     
app.get("/", carsCtrl.index)

// --------menu-PAGE-------------
app.get("/cars",carsCtrl.viewall)

//-------ADING-PAGE-------------
app.get("/cars/new",async (req,res,next)=>{
res.render('cars/new.ejs');
}) 
app.post('/cars',carsCtrl.newcar)
//----------SHPW-SPECIFIC-CAR--------

app.get("/cars/:id",async(req,res,next)=>{
  const car =await Cars.findById(req.params.id);
  res.render('cars/show.ejs',{car})
})

//--------EDIT-CAR------------
app.get("/cars/:id/edit",async (req,res,next)=>{
  const car = await Cars.findById(req.params.id);
  res.render('cars/edit.ejs', { car });
})

app.put("/cars/:id",async (req, res, next) => {
  await Cars.findByIdAndUpdate(req.params.id, req.body);
   res.redirect(`/cars/${req.params.id}`);
})
//--------DELETE-CAR---------

app.delete("/cars/:id",async (req, res, next) => {
  await Cars.findByIdAndDelete(req.params.id);
   res.redirect(`/cars`);
})




app.listen(3000, () => {
  console.log("app listen on port 3000");
});
