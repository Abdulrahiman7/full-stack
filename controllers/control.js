const item = require('../model/item')


exports.getItem= async (req,res,next)=>{
    try{
        const x=await item.findAll()
        res.status(200).json(x);
    }
    catch(err)
    {
        console.log(err);  
    }
}

exports.postItem= async (req,res,next)=>{
    console.log('entered the post')
    try{
        const x=await item.create(req.body)

        res.status(200).json(x);
    }
    catch(err)
    {
        console.log(err);  
    }
}


exports.deleteItem= async (req,res,next)=>{
    const id=req.params.id;
    try{
        const x=await item.destroy({where: {'id':id}})
        res.status(200).json(x);
    }
    catch(err)
    {
        console.log(err);  
    }
}