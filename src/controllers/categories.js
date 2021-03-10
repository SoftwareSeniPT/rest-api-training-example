const httpStatus = require('http-status');
const CategoriesService = require('../services/categories')

const categoriesService = new CategoriesService();

class CategoriesController {
  async deleteCategories(req, res) {
    try {
      const { categoryIds } = req.body;
      const result = await categoriesService.deleteCategories(categoryIds);
      res.status(httpStatus.NO_CONTENT).send(result); 
    } catch (error) {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send({
          error: "CATEGORY_ERROR",
          message: error.message,
          status: httpStatus.INTERNAL_SERVER_ERROR,
        });
    }
  }
}

module.exports = CategoriesController;