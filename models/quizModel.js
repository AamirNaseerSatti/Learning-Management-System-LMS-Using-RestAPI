const mongoose = require('mongoose')
const schema = mongoose.Schema;

const quizSchema = new schema({
    class: {
        type: mongoose.Types.ObjectId,
        ref: 'Class'
    },
    teacher: {
        type: mongoose.Types.ObjectId,
        ref: 'Teacher'
    },
    marks: {
        type: String,
        required: true,
    },
    submitQuizes:{
        type: [{
            sid: {
                type: mongoose.Types.ObjectId,
                ref: 'Student'
            },
        }]
    } 
});

const Quiz = mongoose.model('Quiz',quizSchema);
module.exports = Quiz;