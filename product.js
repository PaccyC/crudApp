const mongoose=require('mongoose');
const Schema=mongoose.Schema
const productSchema=new Schema({
    product:{
      type: String,
      required:true
    },
     description:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },

     currency:{
        type:String,
        required:true
    },

},{timestamps:true});
const Product=mongoose.model("Product",productSchema); //parameters are any string and name of the schema

module.exports=Product;