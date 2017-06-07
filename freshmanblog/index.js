  var path=require('path');
  var express=require('express');
  var session=require('express-session');
  var MongoStore=require('connect-mongo')(session);
  var flash=require('connect-flash');
  var config=require('config-lite');
  var routes=require('./routes');
  var mysql = require('mysql');
  var cookieParse=require('cookie-parser');
  var pkg=require('./package');

  var app=express();

  //设置模板目录
  app.set('views',path.join(__dirname,'views'));
  //设置模板引擎为ejs
  app.set('view engine','html');
  //运行ejs模块
  app.engine('.html',require('ejs').__express);

  //设置静态文件目录
  app.use(express.static(path.join(__dirname,'public')));
  //session中间件
  app.use(session({
    name: config.session.key,// 设置 cookie 中保存 session id 的字段名称
    secret: config.session.secret,// 通过设置 secret 来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改
    cookie: {
        maxAge: config.session.maxAge// 过期时间，过期后 cookie 中的 session id 自动删除
    },
    // store: new MongoStore({// 将 session 存储到 mongodb
    //     url: config.mongodb// mongodb 地址
    // })
    // store:mysql.createConnection({  
    //     user: 'FreshMan',  
    //     password: 'FreshMan',  
    //     })
    }));

  //flash 中间件，用来显示通知
  app.use(flash());
  app.use(cookieParse());
  //路由
  routes(app);

  var Test_dataBase="world";
  var Test_Table="city";

  //创建链接
  var client=mysql.createConnection({
      user:"FreshMan",
      password:'qinxianbo'
  });

  client.connect();

  client.query('use '+Test_dataBase);

  client.query('select * from '+Test_Table,
    function selectcb(err,resulte,fields){
        if(err){
            throw err;
        }
        if(resulte){
            for(var i = 0; i < 10; i++)
            {
                console.log("%d\t%s\t%s", resulte[i].ID, resulte[i].Name, resulte[i].District);
            }
        }
        client.end();
    });


  app.listen(config.port,function(){
      console.log('${pkg.name} listen on port ${config.port}');
  });