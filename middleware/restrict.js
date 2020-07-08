const bcrypt = require("bcryptjs");
const authUsers = require("../authUsers/authUsers-model");

function restrict() {
  const authErr = {
    message: "Invalid credentials",
  };

  return async (req, res, next) => {
    try {
      if (!req.session || !req.session.user) {
        return res.status(401).json(authErr);
      }
    } catch (err) {
      next(err);
    }
  };
}

module.exports = restrict;