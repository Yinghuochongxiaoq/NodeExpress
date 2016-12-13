var express=require('express');
var router=express.Router();

var checkNotLogin=require('../middlewares/check').checkNotLogin;

//get /signin登录页
router.get('/',checkNotLogin,function(req,res,next){
    res.send(req.flash());
})

//post /signin用户登录
router.post('/',checkNotLogin,function(req,res,next){
    res.send(req.flash());
});

module.exports=router;