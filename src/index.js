const express=require('express');
require('./DbConnection');
const mongoose=require('mongoose');
const itemModel=require("./Models/itemSchema");

// const itemctrl=require('./Controllers/itemController');

const app=express();

app.use(express.json());

app.post('/insert',(req,resp)=>{
    console.log(req.body);
    // console.log(Name);
    const item=new itemModel(req.body);
    console.log("data in JSon form "+item);
    item.save();
    resp.send("data inserted Model");
});
// app.get('/get-items',(req,resp)=>{
//     resp.send("Get items from DB");
// })

// app.get('/get-all-items',(req,resp)=>{
//     resp.send("Get All items from DB");
// });



// app.use('/item',itemctrl);




app.listen(3000,()=>{
    console.log("App running at 3000 Port");
})