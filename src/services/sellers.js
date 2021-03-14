class SellerService {
  blockSeller() {
    return {sellerId};
  }
  searchSeller(product, seller, page, limit) {
    return {
      items: [],
      pagination: {
        total: 10,
        page: page,
        limit: limit,
      }
    }
  }
}

module.exports = SellerService;