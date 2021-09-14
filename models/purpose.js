const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const purposeSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    _serviceId:{
        type: mongoose.Types.ObjectId,
        ref:"Service"
    },
 
    datatypes: [{ 
        type: Schema.ObjectId, 
        ref: "DataType" 
    }],

})

module.exports = mongoose.model('Purpose', purposeSchema)


