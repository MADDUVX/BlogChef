import { Router } from "express";
import home from "./home";

const homeRoute = Router();

homeRoute.get("/*",home);

export default homeRoute;