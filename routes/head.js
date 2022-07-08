const express = require('express');
const router = express.Router();
const Class = require('../models/classModel');
// const Result = require('../models/resultModel');
const Material = require('../models/materialModel');

//Get operations for head

router.get('/viewClasses',(req,res,next)=>{
    console.log("Into HEad")
    Class.find({}).then(function(data){
      res.send(data);
    }).catch(next);
});

router.get('/viewResults',(req,res,next)=>{
    Result.find({}).then(function(vResults){
      res.send(vResults);
    }).catch(next);
});

router.get('/individualResult/:rId',(req,res,next)=>{
    Result.findOne({_id:req.params.rId}).then(function(vResult){
      res.send(vResult);
    }).catch(next);
});

router.get('/viewMaterial/:mID',(req,res,next)=>{
    Material.findOne({_id:req.params.mID}).then(function(vMaterial){
      res.send(vMaterial);
    }).catch(next);
  });

module.exports = router;