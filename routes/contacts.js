const express= require("express");

// midelware gere route
const routr= express.Router();
const Contact=require('../models/contact.js');


//routr.get("/",(req,res,next)=>{
 //    res.json({message: "hello"});
//});
routr.post("/",(req,res,next)=>{
    var contact =new Contact({fullName: req.body.contactName ,phone:req.body.ContactNumber });
    contact.save((err, newContact)=>{
        if (err){
            console.log('there is an error $(err)');
        }else{

            res.json(newContact)
        }
        }


    )

});
routr.get("/",async(req,res)=>{
    try {
      contacts= await Contact.find();
      res.status(200).send(contacts);
  
    } catch (error) {
      res.status(400).send(error)
      
    }
  })

module.exports= routr ;