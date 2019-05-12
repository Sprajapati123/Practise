var express=require('express');

var app=new express();
var bodyparser=require('body-parser');

var controller=require('./controller/controller');

console.log(controller);
app.use(bodyparser.json());

app.use(function (req,res,next) {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','content-type');
    next();
})


app.post('/test',controller.registerUser,function (req,res,next) {


    res.send({"message":"okay"})

})

app.use(function (err,req,res,next) {
res.status(err.status);
res.send({"message":err.message})
})




app.listen(process.env.PORT);




