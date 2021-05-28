const express = require('express');
const router = express.Router();
const {signupUser} = require('../controllers/signup');
const {signinUser} = require('../controllers/signIn');
const { signoutUser } = require('../controllers/signout');
const {check} = require('express-validator');
const { userValidator ,userValidationResult} = require('../validations/userValidator');

router.post('/signup',userValidator,userValidationResult,signupUser);
router.post('/signin', signinUser);
router.get('/signout',signoutUser);

module.exports=router;