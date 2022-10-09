const express = require("express");
const router = express.Router();

module.exports = (app) => {
  app.use("/post", router);

  router.post("/join", (req, res, next) => {
    console.log("this is join");
    res.status(200).json({ message: "here is your public resource" });
  });
};
