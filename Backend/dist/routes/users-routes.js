"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
var user_contoller_1 = require("../controller/user-contoller");
var express_1 = require("express");
var validate_middleware_1 = require("../middlewears/validate.middleware");
exports.authRouter = (0, express_1.Router)();
exports.authRouter.get("/", user_contoller_1.AuthController.getAllUsers);
exports.authRouter.delete("/clear", user_contoller_1.AuthController.deleteAll);
exports.authRouter.get("/refreshAccessToken", user_contoller_1.AuthController.refreshAccessToken);
exports.authRouter.get("/logout", user_contoller_1.AuthController.logoutUser);
exports.authRouter.get("/:id", user_contoller_1.AuthController.getUserById);
exports.authRouter.post("/register", validate_middleware_1.validateUser, user_contoller_1.AuthController.createUser);
exports.authRouter.patch("/:id", user_contoller_1.AuthController.updateUser);
exports.authRouter.delete("/:id", user_contoller_1.AuthController.removeUser);
exports.authRouter.post("/login", user_contoller_1.AuthController.loginUser);
