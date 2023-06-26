const express=require('express');
require('mongoose');
const itemModel=require("../Models/itemSchema");

const router=express.Router();

router.use(express.json());

router.post('/insert',async(req,resp)=>{
    console.log(req.body);
    try{
        let item=new itemModel(req.body)
        const savedata = await item.save();
        resp.send(savedata);
    }
    catch(err){
        resp.send(err);
    }
    
});
router.get('/get-items',async(req,resp)=>{
        
    try{
        const itemData=await itemModel.find();
        resp.send(itemData);
    }catch(err){
        resp.send(err);
    }
})

router.get('/get-item/:id',async (req,resp)=>{
    const {id}=req.params;
    try{
        const singleitem= await itemModel.findById(id);
        resp.send(singleitem);
    }
    catch(err){
        resp.send(err);
    }
})

router.patch('/update-item/:id',async (req,resp)=>{
    const {id}=req.params;
    try{
        const updateitem= await itemModel.findByIdAndUpdate(id,req.body,{new:true});
        resp.send(updateitem);
    }
    catch(err){
        resp.send(err);
    }
})

router.delete('/get-all-items',(req,resp)=>{
    resp.send("Get All items from DB");
});





module.exports=router;