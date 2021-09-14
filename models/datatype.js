const mongoose = require('mongoose');


const datatypeSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    _purposeId:{
        type: mongoose.Types.ObjectId,
        ref:"Purpose"
    },


  
})

module.exports = mongoose.model('Datatype', datatypeSchema)