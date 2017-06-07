/*
var os=require("os");
var plate=os.platform();
var release=os.release();
var type=os.type();
var arch=os.arch();

console.log(plate,release,type,arch);

console.log(process.cwd());
//修改应用程序的目录
// process.chdir("目录");
// console.log(process.cwd());

//stdou是标准输出流，console.log就是封装了他
console.log=function(d){
    process.stdout.write(d+'\n');
};
console.log("FreshMan");

//stderr是标准错误输出流，console.error就是封装了他
console.error("info");
console.error=function(message){
    process.stderr.write("FreshMan tall you :"+message);
}
console.error("FreshMan");

//输入数据
// console.stdin=function(){
//     process.stdin.on('readable',function(){
//         var chunk=process.stdin.read();
//         if(chunk!=null){
//             process.stdout.write('data: '+chunk);
//         }
//         return;
//     });
// }
// console.stdin();

var fs=require("fs");

// fs.writeFile('test.txt',"hello FreshMan",function(error){
//     if(error){
//         throw error;
//     }
//     console.log('Saved successfull!');
// });

fs.appendFile('test.txt','不能转义么？abc这里是追加的内容',function(error){
    if(error) throw error;
    console.log('追加文件成功！');
});

fs.readFile('test.txt',function(error,data){
    if(error) throw error;
    console.log(data);
})

//判断文件是否存在
fs.exists('/etc/password',function(exists){
    console.log(exists?"存在":"不存在");
})

//使用rename函数实现移动文件的目的
fs.rename("test.txt",'Test.txt',function(error){
    if(error){
        console.log(error);
        return;
    }
    console.log('修改文件名称成功！');
})

//使用unlink方法删除文件
fs.unlink('Test.txt',function(err){
    if(err) throw err;
    console.log('Successfully deleted file.');
})

//mkdir函数
fs.mkdir('NewFileDirect',function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log('创建目录成功！');
})

//删除目录
fs.rmdir('NewFileDirect',function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log('deleted direct successed.');
})

//readdir读取目录下的所有文件，fs.readdir(目录,callback(err,files))其中files是一个存储目录中所包含的文件名称的数组，数组中不包括'.'和'..'

fs.readdir('/',function(err,files){
    if(err){
        console.log(err);
        return;
    }
    if(files && files.length>0){
        files.forEach(function(file,index){
            console.log(file);
        })
    }
})
*/

//url拼接
var url = require('url');
var linkUrl=url.format({
    protocol: 'http:',
    hostname:'www.baidu.com',
    port:'80',
    pathname :'/news',
    query:{page:1}
});
console.log(linkUrl);

//url替换函数
linkUrl=url.resolve("http://freshman.com","/qinxianbo");
console.log(linkUrl);

//path使用
var path=require("path");
var data=path.normalize('/path///normalize/hi/...');
console.log(data);

//join函数的使用
data=path.join('///i\'m','bealtful');
console.log(data);

//dirname函数返回目录名
data=path.dirname('/food/strong/cool/path');
console.log(data);

//basename返回路径中的最后一部分
data=path.basename('/food/strong/cool/index.html','html');
console.log(data);

//extname函数返回文件中的扩展名
data=path.extname('/food/strong/cool/index.html');
console.log(data);

var querystring=require('querystring');
var resulte=querystring.stringify({foo:'sb',cool:['f','s']});
console.log(resulte);

//querystring.stringify("对象"，"分隔符"，"分配符")
resulte=querystring.stringify({foo:'sb',cool:['f','s']},'*','^');
console.log(resulte);

resulte=querystring.parse("foo=sb&cool=f&cool=s");
console.log(resulte);
resulte=querystring.parse("foo^sb*cool^f*cool^s",'*','^');
console.log(resulte);

//util模块的使用
//inspect函数的使用
var util = require('util');
var result = util.inspect({f:12,s:'t'},true,1,true);
console.log(result);

//format函数
var util=require('util');
var format=util.format('%s:%d:%j:%','fresh','21',"[I love wangguihua]",'more info');
console.log(format);

format=util.format(1,2,3,4);
console.log(format);

//isArray函数
var isjudge=util.isArray([1,2,3]);
console.log(isjudge);

//子进程 spawn，exec，execFile和fork
var child_process = require('child_process');
var child = child_process.spawn('node');
child.stdout.on('data', function(data) {
  console.log(data);
});