const dotenv=require('dotenv')
const express=require('express');
const app = express()
const mongoose=require('mongoose')

dotenv.config({path:'./config.env'});
require('./Db/conn.js')
const User=require('./Models/userSchema')
app.use(require('./Route/route'))

const PORT=process.env.PORT


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
 app.listen(PORT,()=>{
console.log(`Application is running on port ${PORT}`)
 })
