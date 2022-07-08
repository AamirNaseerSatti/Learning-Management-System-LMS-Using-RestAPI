const mongoose = require('mongoose')
const schema = mongoose.Schema;

const GradeSchema = new schema({
    subjectName:{
        type:String,
        required:true
    },
    cid: {
        type: mongoose.Types.ObjectId,
        ref: 'Class',
    },
    Student: {
        type: [
            {
                sid: {
                    type:mongoose.Types.ObjectId,
                    ref:'Student',
                },
                totalGrade:{
                    type:String,
                },
                performance:{
                    type:String,
                }
            }
        ]
    }
});

const Grade = mongoose.model('Grade',GradeSchema);
module.exports = Grade;