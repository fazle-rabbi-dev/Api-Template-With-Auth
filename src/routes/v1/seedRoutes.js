import { Router } from "express";
import { seedUsers } from "../../controllers/v1/seedController.js";

const router = Router();

router.post("/users", seedUsers);

export default router;
