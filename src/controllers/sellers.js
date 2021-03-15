const httpStatus = require('http-status');
const SellerService = require('../services/sellers');

const sellerService = new SellerService();

class SellerController {
  async updateSeller(req, res) {
    const { sellerId } = req.params;
    const data = req.body;
    const result = await sellerService.updateSeller(sellerId, data);
    if (result) {
      res.status(httpStatus.OK).send(result);
    } else {
      res.status(httpStatus.NOT_FOUND).send(result);
    }
  }
  async searchSeller(req, res) {
    const { seller, product, page, limit } = req.query;
    const result = await sellerService.searchSeller(seller, product, page, limit);
    return res.status(httpStatus.OK).send(result);
  }
}

module.exports = SellerController;