import { Router } from "express";
import home from "./home";
import login from "./login";
import dashboard from "./dashboard";
import protectRoute from "../../utils/protectRoute";
import logout from "./logout";
import moderate_post from "./moderate_post";
import signup from "./signup";

const router = Router();

router.get("/",home);
router.route("/login")
.get((req,res)=>res.render("login"))
.post(login);
router.route("/signup").get((req,res)=>res.render("signup")).post(signup);
router.get("/dashboard",protectRoute("/admin/login"),dashboard);
router.get("/logout",logout);
router.post("/moderate",moderate_post);

export default router;