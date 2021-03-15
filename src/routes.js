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
router.get('/products', productController.searchProducts);

/*
* An endpoint to get the details of a product.
*/
router.get('/products/:productId', productController.getProduct);

/*
* An endpoint to update the name of the product
*/
router.patch('/products/:productId', productController.updateProduct);

/*
* An endpoint to create a product
*/
router.put('/products', productController.createProduct);

/*
* An endpoint to delete a product
*/
router.delete('/products', productController.deleteProduct);

/*
* An endpoint to bulk delete categories
*/
router.delete('/categories/delete', categoriesController.deleteCategories);

/*
* An endpoint to allow admin to blacklist a seller
*/
router.patch('/sellers-status', sellerController.blockSeller);

/*
* An endpoint to search sellers based on seller name and product name
*/
router.get('/sellers', sellerController.searchSeller);

module.exports = router;
