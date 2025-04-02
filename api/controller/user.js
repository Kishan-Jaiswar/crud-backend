const user = require("../model/user");

const createUser = async (req, res) => {
  try {
    const newUser = await user.create(req.body);

    return res.status(201).json({
      status: true,
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: "Error while creating user!",
      error: error.message,
    });
  }
};

const getUsers = async (req, res) => {
  const pageNumber = req.query.page;
  const pageSize = parseInt(req.query.size);
  // console.log("query", page, size, req, req.query, req.originalUrl);
  try {
    const users = await user
      .find()
      .skip((pageNumber - 1) * pageSize)
      .limit(pageSize);

    return res.status(200).json({
      status: true,
      message: users.length
        ? "Users fetched successfully"
        : "There is no user!",
      data: users,
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: "Error while fetching users!",
      error: error.message,
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const findUser = await user.find({ _id: id });

    if (!findUser.length) {
      return res.status(404).json({
        status: true,
        message: "No user found with the selected data!",
        data: findUser,
      });
    }

    return res.status(200).json({
      status: true,
      message: "User found successfully!",
      data: findUser,
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: "Error while finding the user!",
      error: error.message,
    });
  }
};

const updateUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const updateUserById = await user.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );

    return res.status(201).json({
      status: true,
      message: "Available user updated successfully!",
      data: updateUserById,
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: "Error while uodating the user!",
      error: error.message,
    });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await user.findByIdAndDelete(id);

    return res.status(200).json({
      status: true,
      message: "User deleted successfully!",
      data: deleteUser,
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: "Error while deleting the user!",
      error: error.message,
    });
  }
};

const deleteAllUsers = async (req, res) => {
  try {
    const deleteUsers = await user.deleteMany();

    return res.status(200).json({
      status: true,
      message: "Users deleted successfully!",
      data: deleteUsers,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "Error while deleting the users!",
      error: error.message,
    });
  }
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  deleteUserById,
  updateUserById,
  deleteAllUsers,
};
