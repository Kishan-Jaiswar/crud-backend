const mongoose = require("mongoose");

const validateMongoId = (req, res, next) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(200).json({
        status: true,
        message: "MongoId was correct!",
      });
    }

    next();
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: "MongoId is incorrect!",
    });
  }
};

module.exports = validateMongoId;