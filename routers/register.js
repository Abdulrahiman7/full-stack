const express=require('express');

const router=express.Router();
router.use(express.json());
const pageController=require('../controllers/controlpage');

router.get('/form', pageController.getPage);

router.post('/form',pageController.postPage);

router.delete('/form/:id', pageController.delPage)

module.exports=router;