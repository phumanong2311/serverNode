import { Router } from "express";
import { findAllUser } from "../services/userService.js";

const router = Router();
//Login route
router.get("/getAll", () => {
  return findAllUser;
});

//Change my password
// router.post("/change-password", [checkJwt], AuthController.changePassword);

export default router;
