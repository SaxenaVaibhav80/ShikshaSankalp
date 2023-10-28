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

app.get('/help', (req,res)=>
{
    res.sendFile(__dirname+'/help.html')
});

app.get('/skills', (req,res)=>
{
    res.sendFile(__dirname+'/skill.html')
});
// ----------------------------------for searching course------------------------
// app.post('/skills', (req,res)=>
// {
//     console.log(req.body.courses)
// });

app.get('/E-Module', (req,res)=>
{
    res.sendFile(__dirname+'/emodule.html')
});


app.listen(3000)