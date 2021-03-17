const httpStatus = require('http-status');
const SellerService = require('../services/sellers');

const sellerService = new SellerService();

class SellerController {
	async blockSeller(req, res) {
		try {
			const { name } = req.body;
			if (!name)
				return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
					error: 'SELLER_ERROR',
					message: 'Please input seller name',
					status: httpStatus.INTERNAL_SERVER_ERROR,
				});

			const result = await sellerService.blockSeller(name);
			res.status(httpStatus.OK).send({
				status: httpStatus.OK,
				message: 'Success to block seller',
				data: result,
			});
		} catch (error) {
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
				error: 'SELLER_ERROR',
				message: error.message,
				status: httpStatus.INTERNAL_SERVER_ERROR,
			});
		}
	}
	async searchSeller(req, res) {
		try {
			const { q } = req.query;
			const result = await sellerService.searchSeller(q);
			res.status(httpStatus.OK).send({
				status: httpStatus.OK,
				message: result?.length
					? result?.length > 1
						? 'Success to get sellers'
						: 'Success to get seller'
					: 'Seller not found',
				data: result,
			});
		} catch (error) {
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
				error: 'SELLER_ERROR',
				message: error.message,
				status: httpStatus.INTERNAL_SERVER_ERROR,
			});
		}
	}
}

module.exports = SellerController;
