const express = require('express');
const router = express.Router();
const Assignment = require('../models/assignmentModel');
const Quiz = require('../models/QuizModel');
const Material = require('../models/materialModel');
const Grade = require('../models/gradeModel');
// const Result = require('../models/resultModel');

//post operations for student

router.put('/submitAssignment/:aid/:sid',(req,res,next)=>{
  Assignment.findByIdAndUpdate({"_id":req.params.aid},
    {"$push":{"submittedAssignments":{"sid":req.params.aid}}}).  
    then(()=>{
      Assignment.findOne({_id:req.params.aid}).then((data)=>{
        res.send(data)
      })
    }).catch(next)
});


//Attempt Quiz By Student
router.put('/attemptQuiz/:qId/:sId',(req,res,next)=>{
  Quiz.findByIdAndUpdate({"_id":req.params.qId},
    {"$push":{"submitQuizes":{"sid":req.params.sId}}}).  
    then(()=>{
      Quiz.findOne({_id:req.params.qId}).then((data)=>{
        res.send(data)
      })
    }).catch(next)
});

//Get operations 


router.get('/viewMaterial/:cID',(req,res,next)=>{
  Material.findOne({_id:req.params.cID}).then((data)=>{
    res.send(data);
  }).catch(next);
});


router.get('/viewGrade/:gID',(req,res,next)=>{
  Grade.findOne({_id:req.params.gID}).then((data)=>{
    res.send(data);
  }).catch(next);
});

router.get('/viewResult/:rID',(req,res,next)=>{
  Result.findOne({_id:req.params.rID}).then((data)=>{
    res.send(data);
  }).catch(next);
});

module.exports = router;