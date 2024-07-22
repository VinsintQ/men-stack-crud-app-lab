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
app.get("/cars/new",carsCtrl.createpage);
app.post('/cars',carsCtrl.newcar)
//----------SHoW-SPECIFIC-CAR--------
app.get("/cars/:id",carsCtrl.showone);
//--------EDIT-CAR------------
app.get("/cars/:id/edit",carsCtrl.edit);
app.put("/cars/:id",carsCtrl.update);
//--------DELETE-CAR---------
app.delete("/cars/:id",carsCtrl.Delete);




app.listen(3000, () => {
  console.log("app listen on port 3000");
});
