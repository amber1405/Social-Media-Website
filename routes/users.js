const express=require('express');
const router=express.Router();
const passport=require('passport');

const usersController=require('../controllers/users_controller');
const postsController=require('../controllers/posts_controller');

router.get('/profile',passport.checkAuthentication,usersController.profile);
router.get('/posts',postsController.posts);

router.get('/sign-up',usersController.signUp);
router.get('/sign-in',usersController.signIn);

router.post('/create',usersController.create);

// use Passport as a middleware to Authenticate
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect:'/users/sign-in'}
),usersController.createSession)


module.exports=router;