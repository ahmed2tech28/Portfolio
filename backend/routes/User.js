import { Router } from "express";
import { create } from "../controller/User.js";

const router = Router()

router.route("/").post(create)
router.route("/:id").post(get)

export default router