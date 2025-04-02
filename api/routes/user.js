const express = require("express");
const validateMongoId = require("../middlewares/validateMongoId");
const {
  getUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
  deleteAllUsers,
} = require("../controller/user");

const router = express.Router();

router
  .get("/", (req, res) => getUsers(req, res))
  .get("/:id", validateMongoId, getUserById)
  .post("/", createUser)
  .patch("/:id", validateMongoId, updateUserById)
  .delete("/:id", validateMongoId, deleteUserById)
  .delete("/", deleteAllUsers);

module.exports = router;
