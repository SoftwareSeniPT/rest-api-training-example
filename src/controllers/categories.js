const httpStatus = require('http-status');
const CategoriesService = require('../services/categories')

const categoriesService = new CategoriesService();

class CategoriesController {
  async bulkDeleteCategories(req, res) {
    const { categoryIds } = req.params;
    const result = await categoriesService.bulkDeleteCategories(categoryIds);
    res.status(httpStatus.NO_CONTENT).send(result);
  }
}

module.exports = CategoriesController;