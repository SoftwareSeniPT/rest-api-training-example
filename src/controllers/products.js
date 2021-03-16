const httpStatus = require('http-status');
const ProductService = require('../services/products');

const productService = new ProductService();

class ProductController {
	async searchProducts(req, res) {
		try {
			const { q, category, seller, page, limit } = req.query;
			const result = await productService.searchProducts(q, category, seller, parseInt(page), parseInt(limit));

			res.status(httpStatus.OK).send({
				status: httpStatus.OK,
				message: result?.products?.length ? 'Success to get products' : 'Empty product',
				data: result?.products,
				pagination: result?.pagination,
			});
		} catch (error) {
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
				status: httpStatus.INTERNAL_SERVER_ERROR,
				message: error.message,
				error: 'PRODUCT_ERROR',
			});
		}
	}
	async getProduct(req, res) {
		try {
			const { productId } = req.params;
			const result = await productService.getProduct(productId);
			res.status(httpStatus.OK).send({
				status: httpStatus.OK,
				message: 'Success to get product',
				data: result,
			});
		} catch (error) {
			res.status(httpStatus.NOT_FOUND).send({
				status: httpStatus.NOT_FOUND,
				message: error.message,
				error: 'PRODUCT_ERROR',
			});
		}
	}
	async updateProduct(req, res) {
		try {
			const { productId } = req.params;
			const { name, seller, categories } = req.body;
			const data = {};
			if (name) data.name = name;
			if (seller) data.seller = seller;
			if (categories) data.categories = categories;
			const result = await productService.updateProduct(productId, data);
			res.status(httpStatus.OK).send({
				status: httpStatus.OK,
				message: 'Success to update product',
				data: result,
			});
		} catch (error) {
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
				status: httpStatus.INTERNAL_SERVER_ERROR,
				message: error.message,
				error: 'PRODUCT_ERROR',
			});
		}
	}
	async createProduct(req, res) {
		try {
			const { name, seller, categories } = req.body;
			const data = {};
			if (name) data.name = name;
			if (seller) data.seller = seller;
			if (categories) data.categories = categories;
			const result = await productService.createProduct(data);

			res.status(httpStatus.OK).send({
				status: httpStatus.OK,
				message: 'Success to add product',
				data: result,
			});
		} catch (error) {
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
				error: 'PRODUCT_ERROR',
				message: error.message,
				status: httpStatus.INTERNAL_SERVER_ERROR,
			});
		}
	}
	async deleteProduct(req, res) {
		try {
			const { productId } = req.params;
			const result = await productService.deleteProduct(productId);

			res.status(httpStatus.OK).send({
				status: httpStatus.OK,
				message: 'Success to delete product',
				data: result,
			});
		} catch (error) {
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
				status: httpStatus.INTERNAL_SERVER_ERROR,
				message: error.message,
				error: 'PRODUCT_ERROR',
			});
		}
	}
}

module.exports = ProductController;
