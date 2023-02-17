import { Router } from "express";
import studentController from "./controller.js";

const router = Router();

router.get("/", (_, res) => {
  studentController.index().then((students) => res.json(sutdents));
});

export default router;
