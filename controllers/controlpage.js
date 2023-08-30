const User=require('../models/users')


exports.getPage= async (req,res,next) => {
    const users=await User.findAll()
    res.json(users);
}

exports.postPage=async (req,res,next) => {
   try{
    const newUser=await User.create(req.body);
    console.log('created form')
    res.status(200).json(newUser)
   }
   catch(err){
    console.log(err);
   }
}

exports.delPage=async (req,res,next) =>{
    const id=req.params.id;
    try{
        const deleted=await User.destroy({where: {id:id}})
        res.status(200).json(deleted);
        console.log('deleted successfully')
    }
    catch(err){
        console.log(err);
    }
}