const express=require('express');
const router=express.Router();
router.use(express.json());
const expControl=require('../controller/control');

router.get('/expense',expControl.getExpense)

router.post('/expense',expControl.postExpense)

router.get('/expense/:id',expControl.editExpense)

router.delete('/expense/:id',expControl.delExpense)

router.put('/expense/:id',expControl.updateExpense)


module.exports=router;