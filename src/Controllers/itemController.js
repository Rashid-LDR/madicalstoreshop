const express=require('express');

const router=express.Router();

router.get('/get-items',(req,resp)=>{
    resp.send("Get items from DB");
})

router.get('/get-all-items',(req,resp)=>{
    resp.send("Get All items from DB");
});

router.post('/create-items',(req,resp)=>{
    resp.send("Create items from DB");
});



module.exports=router;