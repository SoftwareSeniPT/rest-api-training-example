const httpStatus = require('http-status');
const CategoriesService = require('../services/categories')

const categoriesService = new CategoriesService();

class CategoriesController {
    async deleteCategories(req, res) {
        const { categoryIds } = req.body;
        const result = await categoriesService.deleteCategories(categoryIds);
        res.status(httpStatus.NO_CONTENT).send(result);
    }
}

module.exports = CategoriesController;