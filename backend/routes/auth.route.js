import express from "express";
import { deleteUser, login, register } from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.delete("/:id", deleteUser);

export default authRouter;
