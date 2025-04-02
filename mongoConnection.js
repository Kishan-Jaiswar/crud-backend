const mongoose = require("mongoose");

const connectMongoDb = async () => {
  try {
    // await mongoose.connect("mongodb://127.0.0.1:27017/crudNodeExpress");
    await mongoose.connect(
      "mongodb+srv://jaiswarkishan78:Kishan%401208@mern-crud.cnrxdwn.mongodb.net/crudNodeExpress"
    );
  } catch (error) {
    throw new Error("Error", error.message);
  }
};

module.exports = connectMongoDb;
