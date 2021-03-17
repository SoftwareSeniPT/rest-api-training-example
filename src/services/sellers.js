const sellers = require('../mocks/sellers');

class SellerService {
	blockSeller(payload = '') {
		return new Promise((resolve, reject) => {
			if (!payload) return reject(new Error('Please input seller name'));

			const seller = sellers.filter((item) => item?.name?.toLowerCase() === payload?.toLowerCase());
			if (!seller.length) return reject(new Error('Seller not found'));

			sellers.map((item) =>
				item?.name?.toLowerCase() === payload?.toLowerCase() ? { ...item, is_blocked: true } : item,
			);
			resolve({ ...seller[0], is_blocked: true });
		});
	}
	searchSeller(q) {
		return new Promise((resolve, _) => {
			if (q) return resolve(sellers.filter((item) => item?.name?.toLowerCase().includes(q?.toLowerCase())));
			return resolve(sellers);
		});
	}
}

module.exports = SellerService;
