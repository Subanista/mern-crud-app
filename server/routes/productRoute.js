const express=require('express')
const router =express.Router();
const Product=require('../models/productModel')
const {getProducts,getProduct,createProduct,updateProduct,deleteProduct}=require('../controllers/productController')

router.get('/',getProducts )

router.get('/:id',getProduct )

//update a product
router.put('/:id',updateProduct )

// delete a product

router.delete('/:id',deleteProduct )
//create product
router.post('/', createProduct)

module.exports=router;