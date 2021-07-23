const UserDB = require('../models/model');

//create and save new user
exports.create = (req,res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({message:"Content cannot be empty"})
        return;
    }
    // new user
    const user = new UserDB({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
    })

    //save user in DATABASE
    user
        .save(user)
        .then(data=>{
            res.send(data)
        })
        .catch(e=>{
            res.status(500).send({message:err.message||"some error occured"});
        })
}

//retrieve and return all user / single user
exports.find = (req,res)=>{

}

//update a user by userid
exports.update = (req,res)=>{

}

//delete a user by userid
exports.delete = (req,res)=>{

}