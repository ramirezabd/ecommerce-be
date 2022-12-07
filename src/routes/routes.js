import { Router } from "express";
import { getUsers, register, login, logout } from "../controllers/controllers";
import verifyToken from "../middlewares/verifyToken";
import refreshTokenHandler from "../controllers/refreshToken";
import BuatProduct from "../controllers/products.js";
// import BuatProductFoto from "../controllers/products";

const routes = Router();

routes.get("/users", verifyToken, getUsers);
routes.post("/register", register);
routes.post("/login", login);
routes.get("/token", refreshTokenHandler);
routes.post("/logout", logout);
routes.post("/a", BuatProduct);
// routes.post("/b", BuatProductFoto);

export default routes;
