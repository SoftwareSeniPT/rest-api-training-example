const products = require("../mocks/products")

class ProductService {
  searchProducts(name, category, seller, page, limit, sort, sortBy) {
    return {
      items: products,
      pagination: {
        total: 10,
        page: page,
        limit: limit,
        sort: sort,
        sortBy: sortBy
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