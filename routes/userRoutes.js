const express = require("express");
const { signup, login, profile, updateProfile } = require("../controllers/userController");
const auth = require("../middlewares/auth");
const userRouter = express.Router();

userRouter.post("/signup", signup);

userRouter.post("/login", login);

userRouter.get("/profile", auth, profile);
userRouter.put("/profile/update", auth, updateProfile);

module.exports = userRouter;