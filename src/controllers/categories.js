const httpStatus = require("http-status");
const CategoriesService = require("../services/categories");

const categoriesService = new CategoriesService();

class CategoriesController {
  async deleteCategories(req, res) {
    const { id } = req.body;
    const result = await categoriesService.deleteCategories(categoryIds);
    res.status(httpStatus.OK).send(result);
  }
}

module.exports = CategoriesController;
