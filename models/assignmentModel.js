const mongoose = require('mongoose')
const schema = mongoose.Schema;

const AssignmentSchema = new schema({
    subjectName:{
        type:String,
        required:true
    },
    AssignmentTitle:{
        type:String,
        required:true
    },
    Class: {
        type: mongoose.Types.ObjectId,
        ref: 'Class'
    },
    submittedAssignments:{
        type: [{
            sid: {
                type: mongoose.Types.ObjectId,
                ref: 'Student'
            },
        }]
    }
});
const Assignment = mongoose.model('Assignment',AssignmentSchema);
module.exports = Assignment;