const products = require("../mocks/products")

class ProductService {
  async searchProducts(q, category, seller, page, limit) {
    return {
      items: products,
      pagination: {
        total: 10,
        page: page,
        limit: limit,
      }
    }
  }
  async getProduct(productId) {
    return products[productId];
  }
  async updateProduct(productId) {
    return products[productId];
  }
  async createProduct() {
    throw new Error("FAILED_TO_CREATE_PRODUCT");
  }
  async deleteProduct(productId) {
    throw new Error("FAILED_TO_DELETE_A_PRODUCT");
  }
}

module.exports = ProductService;