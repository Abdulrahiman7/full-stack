const express=require('express');
const router=express.Router();
const cors=require('cors');
router.use(cors());
const controller=require('../controllers/control')

router.get('/admin',controller.getItem);

router.post('/admin',controller.postItem);

router.delete('/admin/:id',controller.deleteItem);

module.exports=router;