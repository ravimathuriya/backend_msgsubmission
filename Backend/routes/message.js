const express = require ("express");
const router = express.Router();
const Message = require("../models/Message")
const { body, validationResult } = require('express-validator');

router.post("/",
    body("name").isLength({ min: 3 }),
    body("email").isEmail(),
    body("msgs").isLength({ min: 10 }),

     (req,res) => {

       try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
    
        const msg = Message.create({
            name: req.body.name,
            email: req.body.email,
            msgs: req.body.msgs,
        })
    
        res.status(200).json({ user :req.body, message: 'Successfully submitted' });
       } 
       
       catch (error) {
        res.status(404).send({error: "Internal server error"}) 
       }
        
        
    })

module.exports = router;