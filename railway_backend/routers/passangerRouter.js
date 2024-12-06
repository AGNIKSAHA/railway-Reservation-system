const express = require("express");
const router = express.Router();

const passanger = require('./../models/passanger');

router.post('/',async(req,res)=>{
    try{
        const data = req.body;
        const newPerson = new passanger(data);
        // save
        const response = await newPerson.save();
        console.log("data save...");
        res.status(200).json(response);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
})

router.get("/:pnr", async (req, res) => {
    try {
        const pnr = req.params.pnr;
        const data = await passanger.find({ _id: pnr });
        // console.log(data);
        if(data=="")
        {
            res.status(404).json({ error: "passanger not found" });
        }
        console.log("data found..");
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports=router;