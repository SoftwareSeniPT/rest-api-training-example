const products = require("../mocks/products")

class ProductService {
  searchProducts(product, category, seller, page, limit) {
    return {
      items: products,
      pagination: {
        total: 1,
        page: page,
        limit: limit,
      }
    }
  }
  getProduct(productId) {
    return products[productId];
  }
  updateProduct(productId) {
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