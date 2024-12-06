const mongoose=require('mongoose');

// define the person schema

const passangerSchema=new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    age:{
        type: Number
    },
    gender:{
        type:String,
        enum:['male','female','other'],
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    aadhaarNo:{
        type:String,
        required: true,
        unique: true
    },
    fromStation:{
        type:String
        // required: true
    },
    toStation:{
        type:String
        // required:true
    },
    journeyDate:{
        type:String
        // required:true
    },
    journeyTime:{
        type:String
        // required:true
    },
    classes:{
        type:String
        // required:true
    },
    trainNo:{
        type:Number
        // required:true
    },
    seatNo:{
        type:String
        // required:true
    }

})

// Create model
const passanger=mongoose.model('passanger',passangerSchema);
module.exports=passanger;