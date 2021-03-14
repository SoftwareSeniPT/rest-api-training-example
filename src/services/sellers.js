class SellerService {
  blockSeller() {
    return {};
  }
  searchSeller(seller, page, limit) {
    return {
      items: seller,
      pagination: {
        total: 10,
        page: page,
        limit: limit,
      }
    };
  }
}

module.exports = SellerService;