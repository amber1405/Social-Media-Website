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
module.exports.create=function(req,res){
    // Todo Later
}
// Sign In and Create Session
module.exports.createSession=function(req,res){
    // Todo Later
}