const httpStatus = require('http-status');
const SellerService = require('../services/sellers');

const sellerService = new SellerService();

class SellerController {
  async blockSeller(req, res) {
    const result = await sellerService.blockSeller();
    res.status(httpStatus.OK).send(result);
  }
  async searchSeller(req, res) {
    const result = await sellerService.searchSeller();
    res.status(httpStatus.OK).send(result);
  }
}

module.exports = SellerController;
