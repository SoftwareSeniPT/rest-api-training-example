class SellerService {
  blockSeller(sellerId) {
    return {};
  }
  searchSeller(product, seller, page, limit) {
    return {
      items: [],
      pagination: {
        total: 0,
        page: page,
        limit: limit,
      }
    }
  }
}

module.exports = SellerService;