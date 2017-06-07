module.exports=function(app){
    app.get('/',function(req,res){
        if (req.cookies.isVisit) {
            console.log(req.cookies);
            res.send("再次欢迎访问");
            return;
        } else {
            res.cookie('isVisit', 1, {maxAge: 60 * 1000});
            res.send("欢迎第一次访问");
            return;
        }
        // res.redirect('/posts');
    });

    app.use('/signup',require('./signup'));
    app.use('/signin',require('./signin'));
    app.use('/signout',require('./signout'));
    app.use('/posts',require('./posts'));
}