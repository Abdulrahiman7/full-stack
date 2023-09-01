const Expense=require('../models/expense')

exports.getExpense=async (req,res,next)=>{
    console.log('entered the getExpense on index')
    const expense=await Expense.findAll()
    res.status(200).json(expense);
}

exports.postExpense=async (req,res,next)=> {
    try{
        const newExp=await Expense.create(req.body)
        console.log('new expense added');
        res.status(200).json(newUser);
    }
    catch(err)
    {
        console.log(err);  
    }
}

exports.delExpense= async (req,res,next) =>{
    const id=req.params.id;
    try{
        const del=await Expense.destroy({where:{id:id}})
        res.status(200).json(del);
    }
    catch(err){
        console.log(err)
    }
}

exports.editExpense= async (req,res, next) =>{
    const id=req.params.id;
    try{
        const prod=await Expense.findAll({where:{id:id}})
       
        res.status(200).json(prod[0])
    }
    catch(err){
        console.log(err)
    }
}

exports.updateExpense= async (req,res,next) =>{
    const id=req.params.id;
    try{
        const prod=await Expense.update(req.body,{where:{id:id}})
        res.status(200).json(prod)
    }
    catch(err){
        console.log(err)
    }
}