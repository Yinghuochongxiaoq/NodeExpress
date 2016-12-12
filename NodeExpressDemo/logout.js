module.exports=function(app){
    app.get('/logout',function(request,response){
        request.session.user=null;
        request.session.error=null;
        response.redirect('index');
    });
}