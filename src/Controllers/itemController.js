const express=require('express');
const itemModel=require("../Models/itemSchema");

const router=express.Router();

router.use(express.json());

router.post('/insert',(req,resp)=>{
    console.log(req.body);
    let item=new itemModel(req.body)
    item.save();
    resp.send("data inserted Model");
});
router.get('/get-items',(req,resp)=>{
    resp.send("Get items from DB");
})

router.get('/get-all-items',(req,resp)=>{
    resp.send("Get All items from DB");
});





module.exports=router;