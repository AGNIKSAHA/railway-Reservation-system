const express = require('express');
const app = express();
const db = require("./db");
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // req.body



const passangerRouter=require("./routers/passangerRouter");
app.use('/passanger',passangerRouter);
const trainRouter=require("./routers/trainRouter");
app.use('/train',trainRouter);



app.listen(5000,  () => {
    console.log("listen on port 5000")
});