var express = require("express");
var router = express.Router();

router.get("/", async (req, res, next) => {
    try {
      res.render("country", { organization: "JK Tech" });
    } catch (error) {
      next(error);
    }
  });
  
  router.get("/addnew", async (req, res, next) => {
    try {
      res.render("addCountry");
    } catch (error) {
      next(error);
    }
  });
  
  router.post("/post", async (req, res, next) => {
    try {
      console.log(req.body);
      res.send("received Country data");
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
