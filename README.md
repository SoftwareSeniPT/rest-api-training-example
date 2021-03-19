# REST API Training Example

The purpose of this project is to provide API endpoints that will handle these scenario:

1. An endpoint to search products based on
    1. Product name
    2. Product category
    3. Seller name
2. An endpoint to get the details of a product.
3. An endpoint to create a product
4. An endpoint to update the name of the product
5. An endpoint to delete a product
6. An endpoint to bulk delete categories
7. An endpoint to allow admin to blacklist a seller
8. An endpoint to search sellers based on
    1. Seller name
    2. Product name
    
|#  |URL                        |HTTP Methods|Payload Samples                                                                                            |Description                                                                         |
|---|---------------------------|------------|-----------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
|1  |/products                  |GET         |Example query: /?q=Samsung&category=Phone&seller=Samsung                                                   |An endpoint to search products based on product name, product category, seller name.|
|2  |/products/1                |GET         |                                                                                                           |An endpoint to get the details of a product.                                        |
|3  |/products/1                |PATCH      |Example data: {    name: "Samsung S10" }                                                                   |An endpoint to update the name of the product                                       |
|4  |/products           |POST        |Example data: {    name: "Samsung S10",    categories: ["Phones", "Mobile Devices"],    seller: "Samsung" }|An endpoint to create a product                                                     |
|5  |/products                  |DELETE      |Example data: {    productId: 1 }                                                                          |An endpoint to delete a product                                                     |
|6  |/categories/delete         |DELETE        |Example data: {    categoryIds: [1, 2, 3, 4, 5] }                                                          |An endpoint to bulk delete categories                                               |
|7  |/sellers/block|PATCH      |Example data: {     sellerId: 2,    blacklisted: true }                                                    |An endpoint to allow admin to blacklist a seller                                    |
|8  |/sellers                   |POST        |Example data: {    seller: "Samsung" }                                                                     |An endpoint to search sellers based on seller name and product name                 |


## Notes
> This repository provide bad example of REST API implementation
> which is part of training assessment by Software Seni training.
> Do not use this as example for a project development
