const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;
checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
  User.findOne({
    username: req.body.username
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (user) {
      res.status(400).send({ message: "Please Login first to access this endpoint!" });
      return;
    }
    // Zipcode
    User.findOne({
        zip_code: req.body.zip_code
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if (user) {
        res.status(400).send({ message: "Invalid zip code!" });
        return;
      }
      next();
    });
  });
};
//contact number
User.findOne({
  contact_number: req.body.contact_number
}).exec((err, user) => {
  if (err) {
    res.status(500).send({ message: err });
    return;
  }
  if (user) {
    res.status(400).send({ message: "Invalid contact number!" });
    return;
  }
  next();
});

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: `Failed! Role ${req.body.roles[i]} does not exist!`
        });
        return;
      }
    }
  }
  next();
};
const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted
};
module.exports = verifySignUp;
