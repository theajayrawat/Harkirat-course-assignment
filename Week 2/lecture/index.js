const express=require("express");
var bodyParser = require('body-parser')
const app=express();
const port=3000;


function middleware1(req,res,next){
    console.log('From inside middleware'+req.headers.counter);
    if(true){
        next();
    }else{
        res.send("Error from inside middleware");
    }
}

app.use(middleware1);

// app.use(bodyParser.json())

function handleFirstRequest(req,res){
    // var counter =req.headers.counter;
    // var counter=req.body.counter;
    // var ans=calculateSum(counter);
    // res.send(`The sum is ${ans}`)

    var counter=req.query.counter;
    var ans=calculateSum(counter);
    var answerObject={
        sum:ans,
    }

    res.send(answerObject);
}

app.get('/',bodyParser.json(),handleFirstRequest)

function started(){
    console.log(`Example app listening ${port}`)
}

app.listen(port,started);

function calculateSum(counter){
    var sum=0;
    for(var i=0;i<=counter;i++){
        sum+=i;
    }
    return sum;
}
