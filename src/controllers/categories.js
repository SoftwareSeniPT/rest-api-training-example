const httpStatus = require('http-status');
const CategoriesService = require('../services/categories')

const categoriesService = new CategoriesService();

class CategoriesController {
  async deleteCategories(req, res) {
    const { id } = req.params;
    const result = await categoriesService.deleteCategories(id);
    res.status(httpStatus.NO_CONTENT);
  }
}

module.exports = CategoriesController;
