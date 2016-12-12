module.exports=function(app){
    app.get('/home',function(request,response){
        if(request.session.user){
            response.render('home');
        }else{
            request.session.error="请登录";
            response.redirect('login');
        }
        // response.redirect("home");
    });
}