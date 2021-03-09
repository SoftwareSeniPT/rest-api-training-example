const products = require("../mocks/products")

class ProductService {
  searchProducts(q, category, seller, page, limit) {
    page = page || 1;
    limit = limit || 10;
    let offset = (page-1) * limit;

    let listProducts = products.slice(offset, limit + offset).map(item => {
      return item;
    })

    return {
      items: listProducts,
      pagination: {
        total: products.length,
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
    if(products[productId]){
      return true;
    }
    throw new Error("FAILED_TO_DELETE_A_PRODUCT");
  }
}

module.exports = ProductService;