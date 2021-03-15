class SellerService {
  blockSeller(sellerId) {
    return sellers[sellerId];
  }
  searchSellers(seller, page, limit, sort, sortBy) {
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