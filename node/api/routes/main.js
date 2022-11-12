const express = require("express");
const router = express.Router();

const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");

module.exports = (app) => {
  app.use("/", router);

  router.get("/", (req, res, next) => {
    console.log("메인페이지 작동");
    console.log(req.session);

    //token 
  });
};
