const mongoose = require("mongoose");

// connects the app to MongoDB
const connectDB = async () => {
  try {
    // DB_STRING comes from the .env file
    const conn = await mongoose.connect(process.env.DB_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    // stop the app if the database can't connect
    process.exit(1);
  }
};

module.exports = connectDB;