import { Router } from "express";
import getPost from "./get-post";
import getPosts from "./get-posts";
import loginUser from "./login-user";
import signUpUser from "./signup-user";
import storePost from "./storePost";
import deletePost from "./deletePost";
import catchAll from "./catch-all";
import protectApi from "../../utils/protectApi.js"

const router = Router();

router.get("/posts", getPosts);
//appending question mark at the end makes theparameter as optional
router.route("/post/:postId?").get(getPost).post(protectApi,storePost).delete(protectApi,deletePost);
router.post("/login", loginUser);
router.post("/signup", signUpUser);
router.use(catchAll);

export default router;
