const express = require("express");
const router = express.Router();

const train = require('./../models/train');

router.post('/',async(req,res)=>{
    try{
        const data = req.body;
        const newTrain = new train(data);
        // save
        const response = await newTrain.save();
        console.log("data save...");
        res.status(200).json(response);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
})

router.post("/find", async (req, res) => {
    try {
        const data = req.body;
        const result = await train.find(data);
        // save
        // const response=await newPerson.save();
        if(result=="")
        {
            console.log("data not found...");
            res.status(404).json({error:"Data not found"});
        }
        else{       
            console.log("data found...");
            res.status(200).json(result);
        }
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
        console.log(err);
    }
});



module.exports=router;