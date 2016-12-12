module.exports=function(app){
    app.get('/login',function(request,response){
        response.render('login');
    });

    app.post('/login',function(request,response){
        var use={'username':'admin','password':'admin'};
        if(request.body.username!=use.username || request.body.password!=use.password){
            request.session.error="用户名或密码不正确";
            request.session.user=use;
            response.sendStatus(404);
        }if(request.body.username==use.username && request.body.password==use.password){
            request.session.user=use;
            response.writeHead(200,'成功',{"Content-Length":8,"Content-Type":"text/plain"});
            response.write("FreshMan","utf-8");
            response.end();
        }
    });
}