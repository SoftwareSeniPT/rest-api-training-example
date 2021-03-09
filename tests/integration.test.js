const request = require("supertest");
const httpStatus = require('http-status');
const app = require('../src/app');
const products = require("../src/mocks/products");
const sellers = require("../src/mocks/sellers");

describe("products", () => {
  it('should be able to search products', async () => {
    const page = 1;
    const limit = 10;
    const { body, status } = await request(app).get(`/v1/products?page=${page}&limit=${limit}`);
    expect(status).toBe(httpStatus.OK);
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
    const { body, status } = await request(app).get(`/v1/products/0`);
    expect(status).toBe(httpStatus.OK);
    expect(body).toEqual(products[0]);
  });

  it('should be able to update product name', async () => {
    const { body, status } = await request(app).patch(`/v1/products/0`).send({ name: "Samsung S10" });
    expect(status).toBe(httpStatus.OK);
    expect(body).toEqual(products[0]);
  });

  it('should be returning error when creating a product', async () => {
    const { body, status } = await request(app).post(`/v1/products`).send({
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
    const { body, status } = await request(app).delete(`/v1/products`).send({
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
    const { body, status } = await request(app).delete(`/v1/categories`).send({
      categoryIds: [1, 2, 3, 4, 5]
    });
    expect(status).toBe(httpStatus.NO_CONTENT);
    expect(body).toEqual({});
  });
});

describe("sellers", () => {
  it('should be able to blacklist a seller', async () => {
    const { body, status } = await request(app).patch(`/v1/sellers/0`).send({
      blacklisted: true
    });
    expect(status).toBe(httpStatus.OK);
    expect(body).toEqual({
      seller: 'Samsung',
      blacklisted: true
    });
  });
  it('should be able to search sellers', async () => {
    const page = 1;
    const limit = 10;
    const { body, status } = await request(app).get(`/v1/sellers?page=${page}&limit=${limit}`).send({
      seller: "Samsung"
    });
    expect(status).toBe(httpStatus.OK);
    expect(body).toEqual({
      items: sellers,
      pagination: {
        total: 10,
        page: page,
        limit: limit,
      }
    });
  });
});