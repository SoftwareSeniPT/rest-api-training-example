const categories = require("../mocks/categories")

class CategoriesService {
  bulkDeleteCategories(categoryIds) {
    try {
      categoryIds = categoryIds.split(',');
      categoryIds.forEach(categoryId => {
        if (categories[categoryId]) {
          delete categories[categoryId];
        }
      });
      return {};

    } catch (error) {
      throw new Error("FAILED_TO_DELETE_A_CATEGORY");
    }
  }
}

module.exports = CategoriesService;