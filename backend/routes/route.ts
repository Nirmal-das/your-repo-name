import Router from "express-promise-router";
import userRouter from "../controller/user.controller";

const router = Router();
router.use("/users", userRouter)

export default router;