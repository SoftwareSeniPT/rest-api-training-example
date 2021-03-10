const httpStatus = require('http-status');
const SellerService = require('../services/sellers');

const sellerService = new SellerService();

class SellerController {
  async blockSeller(req, res) {
    const { sellerId } = req.params;
    const result = await sellerService.updateSeller(sellerId);
    res.status(httpStatus.NO_CONTENT).send(result);
  }
  async searchSeller(req, res) {
    const result = await sellerService.searchSeller();
    res.status(httpStatus.OK).send(result);
  }
}

module.exports = SellerController;