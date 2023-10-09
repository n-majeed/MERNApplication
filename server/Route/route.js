const express=require('express')
const router=express.Router()
 
router.get('/',(req,res)=>{
res.send("i m homepage from route.js")
})
router.get('/about',(req,res)=>{
    res.send("i m about from route.js")
    })

router.get('/contact',(req,res)=>{
        res.send("i m contact from route.js")
        })
router.post('/register',(req,res)=>{
console.log(req.body)

})
module.exports=router;