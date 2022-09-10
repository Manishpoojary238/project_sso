var express = require("express");
var router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.render("organization", { organization: "JK Tech" });
  } catch (error) {
    next(error);
  }
});

router.get("/addnew", async (req, res, next) => {
  try {
    res.render("addOrganization");
  } catch (error) {
    next(error);
  }
});

router.post("/post", async (req, res, next) => {
  try {
    console.log(req.body);
    res.send("received Organization data");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
