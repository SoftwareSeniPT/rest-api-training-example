const sellers = require("../mocks/sellers")

class SellerService {
  blockSeller(sellerId) {
    return sellers[sellerId];
  }
  searchSeller(seller, page, limit) {
    return {
      items: sellers,
      pagination: {
        total: 10,
        page: page,
        limit: limit,
      }
    }
  }
}

module.exports = SellerService;