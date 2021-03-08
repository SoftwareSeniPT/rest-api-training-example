const express = require('express');
const ProductController = require('./controllers/products');
const CategoriesController = require('./controllers/categories');
const SellerController = require('./controllers/sellers');

const router = express.Router();
const productController = new ProductController();
const categoriesController = new CategoriesController();
const sellerController = new SellerController();

/*
* An endpoint to search products based on product name, 
* product category, and seller name.
*/ 
router.get('/v1/products', productController.searchProducts);

/*
* An endpoint to get the details of a product.
*/ 
router.get('/v1/products/:productId', productController.getProduct);

/*
* An endpoint to update the name of the product
*/
router.patch('/v1/products/:productId', productController.updateProduct);

/*
* An endpoint to create a product
*/
router.post('/v1/products/', productController.createProduct);

/*
* An endpoint to delete a product
*/
router.delete('/v1/products/:productId', productController.deleteProduct);

/*
* An endpoint to bulk delete categories
*/
router.delete('/v1/categories/', categoriesController.deleteCategories);

/*
* An endpoint to allow admin to blacklist a seller
*/
router.put('/v1/sellers/block/:sellerId', sellerController.blockSeller);

/*
* An endpoint to search sellers based on seller name and product name
*/
router.get('/v1/sellers', sellerController.searchSeller);

module.exports = router;