
const express=require('express');
const morgan=require('morgan');
const app=express();
const mongoose=require('mongoose');
const Joi=require('joi');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));

const productRoutes=require('./productRoutes');
const Product = require('./product');

const dbUrl='mongodb://localhost:27017'
mongoose.connect(dbUrl)
.then((result)=>{
    app.listen(8001)
    })
.catch((err)=>{
    console.log(err);
})


app.get('/single-product',(req,res)=>{
    Product.findById('63d63a5deb18ef0298c73269')
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err);
    })

})
app.get('/',(req,res)=>{
//    res.redirect('/products')
res.send("home page")
})
app.get('/add-product',(req,res)=>{
    const product=new Product({
        product:"Pant",
        description:"It is a pant",
        price:"5000",
        currency:"USD"
    })
    product.save()
    .then((result)=>{
        res.send(result);
    })
    .catch(err=>{
        console.log(err);
    })
})
const products=[
    {id:1,name:'T-shirt'},
    {id:2,name:'Shoe'},
    {id:3,name:'Sneakers'}
]
app.post('/add-product',(req,res)=>{
    const schema={
        name:Joi.string().min(10).required()
    };
    
    const {error}=Joi.validate(req.body,schema) 
     if(error){
    res.status(400).send(error.details[0].message);
    return;
    }
const product={
    id:products.length+1,
    name:req.body.name
}
products.push(product);
res.send(product);
})

// app.get('/products',(req,res)=>{
   
// })
// app.post('/products',(req,res)=>{
  

// })
// app.get('/products/:id',(req,res)=>{
    
// })
// app.delete('/products/:id',(req,res)=>{
   
// })
// app.get('/products/create',(req,res)=>{
//  Product.create({product:"Pant",description:"it is a pant",currency:"francs",price:20000})
//  .then((result)=>{
//     res.send(result)
//  })
//  .catch(err=>{
//     console.log(err);
//  })
// })
console.log("The server is running");
