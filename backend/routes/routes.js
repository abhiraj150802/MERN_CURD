const express=require('express');
const { addUser, getUser, getEditUser, saveEditedUser, deleteUser } = require('../controller/userController');
const router=express.Router();


router.post('/adduser',addUser)
router.get('/getuser',getUser)
router.get('/:id',getEditUser)
router.post('/:id',saveEditedUser)
router.delete('/:id',deleteUser)

module.exports=router