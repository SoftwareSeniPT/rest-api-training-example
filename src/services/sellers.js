const sellers = require("../mocks/sellers")

class SellerService {
  blockSeller() {
    return {};
  }
  searchSeller(seller, product, page, limit) {
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