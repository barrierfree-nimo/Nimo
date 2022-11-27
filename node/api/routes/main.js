const express = require("express");
const router = express.Router();

const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");

router.get("/", async function (req, res, next) {
  console.log("this is main")
})

module.exports = router;