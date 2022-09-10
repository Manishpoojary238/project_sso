var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.status(200).json({title: 'MSAL Node & Express Web App',isAuthenticated: req.session.isAuthenticated,username: req.session.account?.username});
});

module.exports = router;
