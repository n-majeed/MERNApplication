const dotenv=require('dotenv')
const express=require('express');
const app = express()
const mongoose=require('mongoose')

dotenv.config({path:'./config.env'})
const DB=process.env.DATABASE

mongoose.connect(DB/*,{
   useNewUrlParser:true,
   useCreateIndex:true,
   useUnifiedTopology:true,
   useFindAndModify:false
}*/).then(()=>{
console.log("connection successfull")
}).catch((err)=>{
   console.log("not connected")
});

const middleware=(req,res,next)=>{
console.log("i AM Middleware")
const i='y'
if(i=='y'){
next();
}
}
 app.get('/', (req,res)=>{
    
    res.send("hi from server")
 })
 app.get('/about',middleware, (req,res)=>{
    
    res.send("hi from server, this is about us page")
    console.log("i am about")
 })
 app.get('/contact', (req,res)=>{
    
    res.send("hi from server, this is contact us page")
 })
 app.get('/login', (req,res)=>{
    
    res.send("hi from server, this is login page")
 })
 app.get('/signup', (req,res)=>{
    
    res.send("hi from server, this is signup page")
 })
 app.listen(5172,()=>{

 })
