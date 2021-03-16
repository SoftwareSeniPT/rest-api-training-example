const products = require("../mocks/products");

class ProductService {
  searchProducts(q, category, seller, page, limit) {
    return {
      items: products,
      pagination: {
        total: 10,
        page: page,
        limit: limit,
      },
    };
  }
  getProduct(id) {
    return products[id];
  }
  updateProduct(id) {
    return products[id];
  }
  async createProduct() {
    throw new Error("FAILED_TO_CREATE_PRODUCT");
  }
  async deleteProduct(id) {
    throw new Error("FAILED_TO_DELETE_A_PRODUCT");
  }
}

module.exports = ProductService;
