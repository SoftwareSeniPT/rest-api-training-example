class SellerService {
  blockSeller() {
    return {
      id
    };
  }
  searchSeller() {
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