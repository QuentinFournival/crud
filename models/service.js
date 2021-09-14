const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const serviceSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        unique: true
    },
    password : {
        type: String
    },

    purposes: [{ 
        type: Schema.ObjectId, 
        ref: "Purpose"
    }],

    datatypes: [{ 
        type: Schema.ObjectId, 
        ref: "DataType"
    }],



  
})

module.exports = mongoose.model('Service', serviceSchema)


