const express = require('express');
const router = express.Router();
const Class = require('../models/classModel')
const Teacher = require('../models/teacherModel')
const Student = require('../models/studentModel')
const Product = require('../models/productModel')

//Post operations 

router.post('/addClass', (req,res,next)=>{
   Class.create(req.body).then((data)=>{
       res.send(data);
   }).catch(next)
   
})


router.post('/addProduct', (req,res,next)=>{
    console.log("into admin")
    Product.create(req.body).then((data)=>{
        res.send(data);
    }).catch(next)
    
 })


router.post('/addTeacher',(req,res,next)=>{
    console.log("Into Teacher")
    Teacher.create(req.body).then((data)=>{
        res.send(data);
    }).catch(next)
})

router.post('/addStudent',(req,res,next)=>{
    Student.create(req.body).then((data)=>{
        res.send(data)
    }).catch(next)
})


//PUT operation 

router.put('/assignStudentToClass/:cId/:sId',(req,res,next)=>{
    Class.findOneAndUpdate({_id:req.params.cId},{"$push":{"students":{"sid":req.params.sId}}}).
    then(()=>{
        Class.findOne({_id:req.params.cId}).then((data)=>{
            res.send(data)
        })
    }).catch(next)                                
})

router.put('/assignTeacherToClass/:tId/:cId', (req,res,next)=>{
    Class.findOneAndUpdate({_id:req.params.cId},{teacher:req.params.tId}).then(()=>{
        Class.findOne({_id:req.params.cId}).then((data)=>{
            res.send(data);
        }
        );
    }).catch(next);
});



//addMaterialtoClass
router.put('/addMaterialToClass/:cid/:mid')
//Get Functions 

router.get('/classes',(req,res,next)=>{
    Class.find({}).populate('teacher').populate('students.sid').then((data)=>{
        res.send(data);
    }).catch(next)
});

router.get('/students',(req,res,next)=>{
    Student.find({}).then((data)=>{
        res.send(data);
      }).catch(next);
    });

router.get('/teachers',(req,res,next)=>{
        Teacher.find({}).then((data)=>{
            res.send(data);
          }).catch(next);
        });

//Delete functions 

router.delete('/deleteStudent/:sId',(req,res,next)=>{
    Student.findOneAndRemove({_id:req.params.sId}).then((data)=>{
        res.send(data)
    }).catch(next)
})

router.delete('/deleteTeacher/:tId',(req,res,next)=>{
    Teacher.findOneAndRemove({_id:req.params.tId}).then((data)=>{
        res.send(data)
    }).catch(next)
})

router.delete('/deleteClass/:cId',(req,res,next)=>{
    Class.findOneAndRemove({_id:req.params.cId}).then((data)=>{
        res.send(data)
    }).catch(next)
})

module.exports = router;