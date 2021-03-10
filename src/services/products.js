const products = require("../mocks/products")

class ProductService {
  searchProducts(q, category, seller, page, limit) {
    let filteredProduct = products
    if (typeof q !=='undefined') {
      filteredProduct = filteredProduct.filter(product => product.name.includes(q));      
    }
    if (typeof seller !=='undefined') {
      filteredProduct = filteredProduct.filter(product => product.seller.includes(seller));      
    }
    if (typeof category !=='undefined') {
      filteredProduct = filteredProduct.filter(product => product.categories.includes(category));      
    }
    return {
      items: filteredProduct,
      pagination: {
        total: 10,
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