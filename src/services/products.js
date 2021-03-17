const httpStatus = require('http-status');
const products = require('../mocks/products');

class ProductService {
	searchProducts(name, category, seller, page, limit) {
		return new Promise((resolve, reject) => {
			let result = products;
			let currentPage = 1;
			let currentLimit = 15;
			if (name) result = result.filter((p) => p?.name?.includes(name));
			if (category) result = result.filter((p) => p?.categories?.includes(category));
			if (seller) result = result.filter((p) => p?.seller?.includes(seller));
			if (limit) currentLimit = limit;
			if (page && result.length > limit) {
				currentPage = page;
				result = result.slice((page - 1) * currentLimit, page * currentLimit);
			} else {
				result = result.slice(0, currentLimit);
			}

			resolve({
				products: result,
				pagination: {
					total: result.length,
					page: currentPage,
					limit: currentLimit,
				},
			});
		});
	}
	getProduct(productId) {
		return new Promise((resolve, reject) => {
			const product = products[productId];
			if (!product) reject(new Error('Product is not found'));
			resolve(products[productId]);
		});
	}
	updateProduct(productId, payload) {
		return new Promise((resolve, reject) => {
			if (!Object.entries(payload).length) reject(new Error('Please at least input one field'));

			const product = products[productId];
			if (!product) reject(new Error('Product is not found'));

			products.splice(productId, 1, { ...products[productId], ...payload });
			resolve(products[productId]);
		});
	}
	createProduct(data) {
		products.push(data);
		return products[products.length - 1];
	}
	deleteProduct(productId) {
		return new Promise((resolve, reject) => {
			let product = products[productId];

			if (product) {
				products.splice(productId, 1);
				resolve(product);
			} else {
				reject(new Error('Product not found'));
			}
		});
	}
}

module.exports = ProductService;
