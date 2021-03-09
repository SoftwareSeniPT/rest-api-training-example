const sellers = require('../mocks/sellers');

class SellerService {
  blockSeller(params) {
    // Do block by params
    let seller = sellers[params.sellerId];
    return {
      ...seller,
      blacklisted: true
    };
  }
  searchSeller(q, page, limit) {
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