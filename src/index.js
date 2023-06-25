const express=require('express');

const itemctrl=require('./Controllers/itemController');

const app=express();

app.use('/item',itemctrl);




app.listen(3000,()=>{
    console.log("App running at 3000 Port");
})