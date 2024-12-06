const mongoose=require('mongoose');

// define the person schema

const trainSchema=new mongoose.Schema({
    trainName:{
        type: String
        // required:true
    },

    trainNo:{
        type:Number
        // required:true
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
        type:[String]
        // required:true
    },
    arrivalDate:{
        type:String
        // required:true
    },
    arrivalTime:{
        type:String
        // required:true
    },
    sleeperSeat:{
        type:Number
    },
    ac1Seat:{
        type:Number
    },
    ac2Seat:{
        type:Number
    },
    ac3Seat:{
        type:Number
    }

})

// Create model
const train=mongoose.model('train',trainSchema);
module.exports=train;