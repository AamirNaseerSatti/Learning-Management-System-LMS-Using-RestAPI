var express = require('express');
var router = express.Router();
var Quiz = require("../models/QuizModel");
var Assignment = require("../models/assignmentModel");
var Material = require("../models/materialModel");
var Grade = require("../models/gradeModel");

// post Methods
router.post('/addMaterial', (req,res,next)=>{
  console.log("Add Material");
  Material.create(req.body).then((data)=>{
      res.send(data)
  }).catch(next);
});

//Adding Quiz For Students 
router.post('/addQuiz', (req,res,next)=>{

  Quiz.create(req.body).then((data)=>{
      res.send(data)
  }).catch(next);
});



router.post('/addAssignment', (req,res,next)=>{
  Assignment.create(req.body).then((data)=>{
      res.send(data)
  }).catch(next);
});

//Adding Grade for Students
router.post('/addMarks', (req,res,next)=>{
  console.log("Into narks")
  Grade.create(req.body).then((data)=>{
      res.send(data)
  }).catch(next);
});


// put Methods 
router.put('/updateMarks/:mId',(req,res,next)=>{
    Grade.findOneAndUpdate({_id:req.params.mId},req.body).
    then(()=>{
            Grade.findOne({_id:req.params.mId}).then((data)=>{
                res.send(data)
                })
            }).catch(next)  
});

//get Methods 
router.get('/submittedQuiz/:qId', function(req, res, next) {
  Quiz.find({"_id":req.params.qId}).populate('submitQuizes.sid').exec(function(error, data) {
    
        if (error) {
            return next(error);
        }
        res.json(data);
    });
});



router.get('/viewGradedStudents/:gId',(req,res,next)=>{
  Grade.find({"_id":req.params.gId}).populate('Student.sid').exec(function(error, data) {
    
    if (error) {
        return next(error);
    }
    res.json(data);
});
});

router.get('/viewSubmittedAssignment',(req,res,next)=>{
  Assignment.find({}).then((data)=>{
    res.send(data);
  }).catch(next);
});

router.get('/viewMaterials',(req,res,next)=>{
  Material.find({}).then((data)=>{
    res.send(data);
  }).catch(next);
});

//Delete Methods 

router.delete('/deleteMaterial/:mId',(req,res,next)=>{
  Material.findOneAndRemove({_id:req.params.mId}).then((data)=>{
      res.send(data);
  }).catch(next);
});

router.delete('/deleteGrade/:gId',(req,res,next)=>{
  Grade.findOneAndRemove({_id:req.params.gId}).then((data)=>{
      res.send(data);
  }).catch(next);
});

router.delete('/deleteQuiz/:qID',function(req,res,next){
  Quiz.findOneAndRemove({_id:req.params.qID}).then(function(dQuiz){
      res.send(dQuiz);
  }).catch(next);
});

router.delete('/deleteAssignment/:aID',function(req,res,next){
  Assignment.findOneAndRemove({_id:req.params.aID}).then(function(data){
      res.send(data);
  }).catch(next);
});

module.exports = router;