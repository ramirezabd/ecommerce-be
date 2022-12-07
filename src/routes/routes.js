import { Router } from "express";
import { getUsers, register, login, logout } from "../controllers/controllers";
import verifyToken from "../middlewares/verifyToken";
import refreshTokenHandler from "../controllers/refreshToken";
<<<<<<< HEAD
import BuatProduct from "../controllers/products";
import BuatProductFoto from "../controllers/products";
=======
>>>>>>> 3d33956e3cec9724dc889e5f1dbd292680576a30

const routes = Router();

routes.get("/users", verifyToken, getUsers);
routes.post("/register", register);
routes.post("/login", login);
routes.get("/token", refreshTokenHandler);
routes.post("/logout", logout);
routes.post("/a", BuatProduct);
routes.post("/b", BuatProductFoto);

export default routes;
