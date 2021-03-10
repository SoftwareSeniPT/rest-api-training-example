const httpStatus = require('http-status');
const SellerService = require('../services/sellers');

const sellerService = new SellerService();

class SellerController {
  async blockSeller(req, res) {
    const { sellerId } = req.params;
    const { blacklisted } = req.body;
    const result = await sellerService.blockSeller(sellerId, blacklisted);
    res.status(httpStatus.OK).send(result);
  }
  async searchSellers(req, res) {
    const { seller, page, limit, sort, sortBy } = req.query;
    const result = await sellerService.searchSellers(seller, parseInt(page), parseInt(limit), parseInt(sort), sortBy);
    res.status(httpStatus.OK).send(result);
  }
}

module.exports = SellerController;