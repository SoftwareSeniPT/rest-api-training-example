const products = require("../mocks/products")

class ProductService {
  searchProducts(q, category, seller, page, limit) {
    return {
      items: products,
      pagination: {
        total: products.length,
        page: page,
        limit: limit,
      }
    }
  }
  async getProduct(productId) {
    return products[productId] ? products[productId] : false;
  }
  async updateProduct(productId, data) {
    if (products[productId]) {
      products[productId] = {
        ...products[productId],
        ...data,
      }
      return products[productId];
    }
    return false;
  }
  async createProduct(data) {
    try {
      products.push(data);
      return this.searchProducts()
    } catch (error) {
      throw new Error("FAILED_TO_CREATE_PRODUCT");
    }
  }
  async deleteProduct(productId) {
    if (products[productId]) {
      return delete products[productId];
    }
    throw new Error("FAILED_TO_DELETE_A_PRODUCT");
  }
}

module.exports = ProductService;