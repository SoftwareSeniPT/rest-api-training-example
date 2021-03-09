const httpStatus = require('http-status');
const products = require('../mocks/products');
const SellerService = require('../services/sellers');

const sellerService = new SellerService();

class SellerController {
  async blockSeller(req, res) {
    const {sellerId} = req.params;
    const result = await sellerService.blockSeller(sellerId);
    res.status(httpStatus.NO_CONTENT).send(result);
  }
  async searchSeller(req, res) {
    const {name, product} = req.query;
    const result = await sellerService.searchSeller(name, product);
    res.status(httpStatus.OK).send(result);
  }
}

module.exports = SellerController;