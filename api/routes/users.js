import express from "express";
import { deleteUser, getUser, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utlis/verifyToken.js";
const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("hello user, you are logged in");
// });

// router.get("/checkuser/:id", verifyUser, (req, res) => {
//   res.send("hello user, you are logged in and you can delete your account");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res) => {
//     res.send("hello Admin, you are logged in and you can delete all accounts");
// });

//update
router.put("/:id", verifyUser, updateUser);

//delete
router.delete("/:id",verifyUser, deleteUser);

//get
router.get("/:id",verifyUser, getUser);

//get all
router.get("/",verifyAdmin, getUser);

export default router;
