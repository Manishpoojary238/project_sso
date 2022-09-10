var express = require("express");
var router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.render("location", { organization: "JK Tech" });
  } catch (error) {
    next(error);
  }
});

router.get("/addnew", async (req, res, next) => {
  try {
    res.render("addLocation");
  } catch (error) {
    next(error);
  }
});

router.post("/post", async (req, res, next) => {
  try {
    console.log(req.body);
    res.send("received Location data");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
