const sellers = require("../mocks/sellers")

class SellerService {
  blockSeller(sellerId) {
    return sellers[sellerId];
  }
  searchSeller(seller, product, page, limit, sort, sortBy) {
    return {
      items: sellers,
      pagination: {
        total: 10,
        page: page,
        limit: limit,
        sort: sort,
        sortBy: sortBy
      }
    }
  }
}

module.exports = SellerService;