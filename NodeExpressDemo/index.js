//指定渲染模板文件的后缀名为ejs或者其他的
var express=require("express");
var app=express();
var path=require('path');
var bodyParser=require('body-parser');
var multer=require('multer');
var upload=multer({dest:'./public/images/'});
var session=require('express-session');

//指定视图文件
app.set('Views',__dirname);

//后缀名为ejs
// app.set('view engine','ejs');
app.set('view engine','html');
//运行ejs模块
app.engine('.html',require('ejs').__express);

//指定静态文件目录
app.use(express.static(require('path').join(__dirname,'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(session({
    secret:'secret',
    resave:true,
    saveUninitialized:false,
    cookie:{
        maxAge:1000*60*10
    }
}));

app.use(function(request,response,next){
    response.locals.user=request.session.user;
    var err=request.session.error;
    response.locals.message="";
    if(err) response.locals.message='<div style="margin-botton:20px;color:red;">'+err+'</div>';
    next();
});

app.get('/',function(request,response){
    response.render("index");
});
app.get('/index',function(request,response){
    response.render('index');
});
require('./login')(app);
require('./home')(app);
require('./logout')(app);
app.listen(4000);