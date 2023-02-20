module.exports.posts = function(req, res){
    return res.render('users_posts', {
        title: 'User posts'
    })
}