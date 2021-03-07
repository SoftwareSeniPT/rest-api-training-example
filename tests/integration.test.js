const request = require("supertest");
const httpStatus = require('http-status');
const app = require('../src/app');
const products = require("../src/mocks/products")

describe("products", () => {
  it('should be able to search products', async () => {
    const page = 1;
    const limit = 10;
    const { body, status } = await request(app).get(`/products?page=${page}&limit=${limit}`);
    expect(status).toBe(httpStatus.CREATED);
    expect(body).toEqual({
        items: products,
        pagination: {
          total: 10,
          page: page,
          limit: limit,
        }
    });
  });

  it('should be able to get product details', async () => {
    const { body, status } = await request(app).get(`/products/0`);
    expect(status).toBe(httpStatus.OK);
    expect(body).toEqual(products[0]);
  });

  it('should be able to update product name', async () => {
    const { body, status } = await request(app).put(`/products/0`).send({ name: "Samsung S10" });
    expect(status).toBe(httpStatus.OK);
    expect(body).toEqual(products[0]);
  });

  it('should be returning error when creating a product', async () => {
    const { body, status } = await request(app).post(`/create-products`).send({
      name: "Samsung S10",
      categories: ["Phones", "Mobile Devices"],
      seller: "Samsung"
    });
    expect(status).toBe(httpStatus.INTERNAL_SERVER_ERROR);
    expect(body).toEqual({
      error: "PRODUCT_ERROR",
      message: "FAILED_TO_CREATE_PRODUCT",
      status: httpStatus.INTERNAL_SERVER_ERROR,
    });
  });

  it('should be returning error deleting a product', async () => {
    const { body, status } = await request(app).delete(`/products`).send({
      productId: 0
    });
    expect(status).toBe(httpStatus.INTERNAL_SERVER_ERROR);
    expect(body).toEqual({
      error: "PRODUCT_ERROR",
      message: "FAILED_TO_DELETE_A_PRODUCT",
      status: httpStatus.INTERNAL_SERVER_ERROR,
    });
  });
});

describe("categories", () => {
  it('should be able to bulk delete categories', async () => {
    const { body, status } = await request(app).post(`/categories/delete`).send({
      categoryIds: [1, 2, 3, 4, 5]
    });
    expect(status).toBe(httpStatus.OK);
    expect(body).toEqual({});
  });
});

describe("sellers", () => {
  it('should be able to blacklist a seller', async () => {
    const { body, status } = await request(app).put(`/update-seller-block-status`).send({
      sellerId: 2,
      blacklisted: true
    });
    expect(status).toBe(httpStatus.NO_CONTENT);
    expect(body).toEqual({});
  });
  it('should be able to search sellers', async () => {
    const { body, status } = await request(app).post(`/sellers`).send({
      seller: "Samsung"
    });
    expect(status).toBe(httpStatus.OK);
    expect(body).toEqual({});
  });
});