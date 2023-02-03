
const express=require('express')
const productController=require('./controller');

const router =express.Router();
router.post('/products',productController.product_create_post);
router.get('/products',productController.product_index)
router.get('/products/:id',productController.product_details);
router.get('/products/create',productController.product_create_get)
router.delete('/products/:id',productController.product_delete);

module.exports=router;
