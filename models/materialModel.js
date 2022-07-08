const mongoose = require('mongoose')
const schema = mongoose.Schema;

const MaterialSchema = new schema({
    subjectName:{
        type:String,
        required:true
    },
    materialTitle:{
        type:String,
        required:true
    },
    class: {
        type: mongoose.Types.ObjectId,
        ref: 'class'
    },
});

const Material = mongoose.model('Material',MaterialSchema);
module.exports = Material;