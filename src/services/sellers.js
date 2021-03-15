const sellers = require("../mocks/sellers")

class SellerService {
  async updateSeller(sellerId, data) {
    if (sellers[sellerId]) {
      sellers[sellerId] = {
        ...sellers[sellerId],
        ...data
      }
      return sellers[sellerId];
    }
    return false;
  }
  async searchSeller(seller, product, page, limit) {
    return {
      items: sellers,
      pagination: {
        total: sellers.length,
        page: page,
        limit: limit,
        searchBy: {
          seller: seller || null,
          product: product || null
        }
      }
    }
  }
}

module.exports = SellerService;