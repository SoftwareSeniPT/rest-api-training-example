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
  async searchSeller(req, res) {
    const { seller, page, limit, sort, sortBy } = req.query;
    const result = await sellerService.searchSeller(seller, parseInt(page), parseInt(limit), sort, parseInt(sortBy));
  }
}

module.exports = SellerController;