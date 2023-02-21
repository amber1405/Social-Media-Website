const User =require('../models/user')

module.exports.profile = function(req, res){
    return res.render('user_profile', {
        title: 'User Profile'
    })
}

// Render the Sign Up Page
module.exports.signUp=function(req,res){
    return res.render('user_sign_up',{
        title:"Codial|Sign Up"
    })
}

// Render the Sign In Page
module.exports.signIn=function(req,res){
    return res.render('user_sign_in',{
        title:"Codial|Sign In"
    })
}

// Get the Sign Up Data
module.exports.create = function(req, res){
    if (req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in signing up'); return}

        if (!user){
            User.create(req.body, function(err, user){
                if(err){console.log('error in creating user while signing up'); return}

                return res.redirect('/users/sign-in');
            })
        }else{
            return res.redirect('back');
        }

    });
}

// Sign In and Create Session
module.exports.createSession=function(req,res){
    // Todo Later
}