"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRouter = void 0;
var express_1 = require("express");
var products_controller_1 = require("../controller/products.controller");
var catchAsync_1 = require("../utils/catchAsync");
exports.productsRouter = (0, express_1.Router)();
exports.productsRouter.get("/", products_controller_1.ProductController.getAllProducts);
exports.productsRouter.get("/:id", (0, catchAsync_1.catchAsync)(products_controller_1.ProductController.findProductById));
exports.productsRouter.post("/", products_controller_1.ProductController.createProduct);
exports.productsRouter.patch("/:id", (0, catchAsync_1.catchAsync)(products_controller_1.ProductController.updateProduct));
exports.productsRouter.delete("/delete/:id", products_controller_1.ProductController.deleteProduct);
