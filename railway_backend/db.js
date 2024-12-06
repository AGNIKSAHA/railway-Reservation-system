const mongoose=require("mongoose");

//mongoDB connection URL
const mongoURL='mongodb://127.0.0.1:27017/railway_resevation_system';
mongoose.connect(mongoURL)

//mongoose maintains a default connection object representing the MongoDB connection.
const db=mongoose.connection;

// Define Event Listeners 
db.on('connected',()=>{
    console.log('Connected...');
});

db.on('error',(err)=>{
    console.log('Error connection:',err);
});

db.on('disconnected',()=>{
    console.log('disconnected...');
});

// Export the database connection
module.export=db;



