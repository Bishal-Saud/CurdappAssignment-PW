const express = require('express')
 
const {home,userRegister,userLogin,userDelete} = require('../controller/userController.js');
const router = express.Router();

router.get('/',home)
router.post('/register',userRegister)
router.post('/login',userLogin)
router.delete('/delete/:email',userDelete)

module.exports =router;
