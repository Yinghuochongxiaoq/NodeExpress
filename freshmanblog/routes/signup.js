var express=require('express');
var router=express.Router();

var checkNotLogin=require('../middlewares/check').checkNotLogin;

//get  /signup 注册页
router.get('/',checkNotLogin,function(req,res,next){
    res.send(req.flash());
});

//post /signup 用户注册
router.post('/',checkNotLogin,function(req,res,next){
    res.send(req.flash());
});

module.exports=router;