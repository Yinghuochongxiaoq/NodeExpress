/*
socket.io是一个web socket库，包括了客户端的js和服务端的nodejs，他的目标是构建可以在不同浏览器和移动设备上使用的实时应用。
易用性：封装了服务端和客户端，使用起来非常简单方便；
跨平台：支持跨平台，者就意味着你有了更多的选择，可以在自己喜欢的平台下开发实时应用
自适应：他会自动根据浏览器从web socket，ajax长轮询，iframe流等等各种方式中选择最佳的方式来实现网络实时应用，支持浏览器最低IE5.5

服务端事件：
connection:客户端成功连接到服务器；
message:捕获客户端send信息；
disconnect:客户端断开连接；
error:发生错误；

命名空间：命名空间时有一个非常实用好用的功能，可以通过命名空间，划分出不同的房间，在房间里的广播和通信都不会影响到房间以外的客户端。在服务端，通过of("")的方式来划分新的命名空间；
io.of("chat").on('connection',function(socket){

});

上面创建了一个名为chat的房间，客户端可以通过如下方式连接到指定的房间。
var socket=io.connect('/chat');
虽然连接到指定的房间，但是我们也可以在服务端操作，自由的进出房间：
socket.join('chat');//进入chat房间
socket.leave('chat');//离开chat房间

广播消息
在实时应用中，广播是一个不可或缺的功能，socket.io提供两种服务端广播方式；
第一种广播方式可以称之为'全局广播'，顾明思意，全局广播就是所有连接到服务器的客户端都会收到广播的信息：
socket.broadcast.emit('DATA',data);
第二种当使用to()方式广播信息时，只有该命名空间下的客户端下的客户端才会收到广播信息
socket.broadcast.to('chat').emit('DATA',data)

中间件
socket.io提供中间件功能，可以通过中间件来对请求进行预处理；比如身份验证
io.use(function(socket,next){
    if(socket.request.headers.cookie) return next();
    next(new Error('Authentication error'));
});
*/
var express=require("express");
var app=express();
app.get('/index',function(req,res){
    res.sendfile('index.html',{root:__dirname});
})

app.get('/chat',function(req,res){
    res.sendfile('client/index.html');
})

app.get('/',function(req,res){
    res.status(200).send('hello');
});
var server=require('http').createServer(app);
var socket=require("socket.io")(server);
//中间件
socket.use(function(socket,next){
    var query=socket.request._query;
    console.log(JSON.stringify(socket.request._query));
    var sid=query.sid;
    console.log(sid);
    if(socket.request.headers.cookie) return next();
    next(new Error('Authentication error'));
});
socket.on("connection",function(socket){
    //连接成功
    console.log('有人连接');
    // socket.send('Fresh get you connection.Welcome to you.');
    socket.emit('message','Fresh get you connection.Welcome to you.');
    socket.on('message',function(data){
        //收到消息
        console.log(data);
    });
    socket.on('disconnect',function(){
        //用户已经离开
        console.log('离开一个用户');
        socket.broadcast.emit('message','some body live.');
    });
});

server.listen(8000);