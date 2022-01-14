// DOTENV CONFIG
require("dotenv").config();
const express = require("express");
const app = express();
const errorMiddlerware = require("./middleware/error");
const logger = require("./utils/logger");
const cookieParser = require("cookie-parser");

// CORS
const cors = require("cors");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const faqRoutes = require("./routes/faqRoutes");
const { error } = require("./utils/logger");

// HANDLING UNCAUGHT EXCEPTIONS
process.on("uncaughtException", (err) => {
  console.log(`Error:${err.message}`);
  // LOGGING TO EXCEPTIONS.LOG
  logger.error(`Shutting down the server due to unhandled promise rejection`);
  process.exit(1);
});

// PARSING POST REQUEST
app.use(express.json());
app.use(cors());

// PARSING COOKIES
app.use(cookieParser());

// DECLARING PORT
const PORT = process.env.PORT || 6500;

// DB CONNECTION
const DB_CONNECTION = async () => {
  await mongoose
    .connect("mongodb+srv://faiz0929:faiz1930@cluster0.1zoun.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB CONNECTED");
    })
    .catch((err) => {
      logger.error(err.message);
    });
};

DB_CONNECTION();

// Importing productRoutes
app.use("/api/v1", productRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", faqRoutes);

// MIDDLEWARE FOR ERROR
app.use(errorMiddlerware);

// DEPLOYING TO PRODUCTION ON HEROKU
  const path = require('path');
  app.use(express.static(path.resolve(__dirname,"client/build")));
  app.get("*",(req,res) => {
    res.sendFile(path.resolve(__dirname,'client/build','index.html'));
  })

// STARTING SERVER
const server = app.listen(PORT, (req, res) => {
  logger.info(`Server is listening on port:${PORT}`);
});

// UNHANDLED PROMISE REJECTION
process.on("unhandledRejection", (err) => {
  console.log(`Error:${err.message}`);
  logger.error(`Shutting down the server due to unhandled promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
