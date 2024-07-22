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

// --------SHOW-PAGE-------------
app.get("/cars",carsCtrl.viewall)

//-------ADING PAGE-------------
app.get("/cars/new",async (req,res,next)=>{
res.render('cars/new.ejs');
}) 
app.post('/cars',carsCtrl.newcar)
//----------EDITING-PAGE--------

app.get("/cars/:id",(req,res)=>{
  res.render('cars/edit.ejs')
})



app.listen(3000, () => {
  console.log("app listen on port 3000");
});
