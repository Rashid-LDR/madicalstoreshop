const mongoose=require('mongoose');


const itemSchema = new mongoose.Schema({
     item_name: {String},
     item_price: {Number},
     item_quantity:{Number}
    });

const itemModel=new mongoose.model("itemModel",itemSchema);

module.exports=itemModel;

