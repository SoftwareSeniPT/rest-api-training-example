const httpStatus = require('http-status');
const ProductService = require('../services/products');

const productService = new ProductService();

class ProductController {
    async searchProducts(req, res) {
        const { q, category, seller, page, limit } = req.query;
        const result = await productService.searchProducts(q, category, seller, parseInt(page), parseInt(limit));
        res.status(httpStatus.OK).send(result);
    }
    async getProduct(req, res) {
        const { id } = req.params;
        const result = await productService.getProduct(id);
        res.status(httpStatus.OK).send(result);
    }
    async updateProduct(req, res) {
        const { id } = req.params;
        const result = await productService.updateProduct(id);
        res.status(httpStatus.OK).send(result);
    }
    async createProduct(req, res) {
        try {
            // This service will always be failed
            const result = await productService.createProduct();
            res.status(httpStatus.CREATED).send(result);
        } catch (error) {
            res
                .status(httpStatus.INTERNAL_SERVER_ERROR)
                .send({
                    error: "PRODUCT_ERROR",
                    message: error.message,
                    status: httpStatus.INTERNAL_SERVER_ERROR,
                });
        }
    }
    async deleteProduct(req, res) {
        try {
            // This service will always be failed
            const { id } = req.body;
            const result = await productService.deleteProduct(id);
            res.status(httpStatus.NO_CONTENT).send(result);
        } catch (error) {
            res
                .status(httpStatus.INTERNAL_SERVER_ERROR)
                .send({
                    error: "PRODUCT_ERROR",
                    message: error.message,
                    status: httpStatus.INTERNAL_SERVER_ERROR,
                });
        }
    }
}

module.exports = ProductController;