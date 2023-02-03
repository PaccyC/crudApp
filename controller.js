const Product=require('./product');
const product_index=(req,res)=>{
    Product.find().sort({createdAt:1})
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err);
    })
}
const product_details=(req,res)=>{
    const id=req.params.id
    Product.findById(id)
    .then((result)=>{
        res.send(result)
    })
    .catch(err=>
        console.log(err))
}
const product_create_get=(req,res)=>{
res.send({title:"Create new product"});
}
const product_create_post=(req,res)=>{
    const product=new Product(req.body);
    product.save()
    .then((result)=>{
        res.send(result)
    })
    .catch(err=>console.log(err))
    }
    const product_delete=(req,res)=>{
        const id= req.params.id;
    Product.findByIdAndDelete(id)
    .then(result=>{
        res.json({redirect:'/products'})
    })
    .catch(err=>console.log(err))
    }
module.exports={
    product_index,
    product_details,
    product_create_get,
    product_create_post,
    product_delete

}