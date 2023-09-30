var express= require('express')
var app=express()
var fs = require('fs');
var https=require('https')
var bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

function middleware(req,res,next)
{
//   if login then next
//     next()
}



app.get('/', (req,res)=>
{
    res.sendFile(__dirname+'/index.html')
});


app.listen(3000)