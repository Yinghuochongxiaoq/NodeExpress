var path = require('path');
var express = require('express');
var app = express();
var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');

app.set('views', path.join(__dirname, 'views'));// 设置存放模板文件的目录
app.set('view engine', 'ejs');// 设置模板引擎为 ejs

//错误处理机制
// app.use(function(req,res,next){
//     console.log('1');
//     next(new Error('haha'));
// });

// app.use(function(req,res,next){
//     console.log('2');
//     res.status(200).end();
// });

// //错误处理
// app.use(function(err,req,res,next){
//     console.log(err.stack);
//     res.status(500).send('Something broke!');
// });

app.use('/', indexRouter);
app.use('/users', userRouter);

app.listen(4001);