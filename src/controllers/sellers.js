const httpStatus = require('http-status');
const SellerService = require('../services/sellers');

const sellerService = new SellerService();

class SellerController {
  async blockSeller(req, res) {
    const result = await sellerService.blockSeller();
    res.status(httpStatus.NO_CONTENT).send(result);
  }
  async searchSeller(req, res) {
    const { seller, product, page, limit } = req.query;
    const result = await sellerService.searchSeller(seller, product, parseInt(page), parseInt(limit));
    res.status(httpStatus.OK).send(result);
  }
}

module.exports = SellerController;