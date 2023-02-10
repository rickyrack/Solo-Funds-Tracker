const asyncHandler = require("express-async-handler");
const { firebase } = require("../services/firebase/firebase");

const protect = asyncHandler(async (req, res, next) => {
  let authToken = req.headers.authorization;

  if (authToken) {
    authToken = authToken.split(" ")[1];
    try {
      firebase
        .auth()
        .verifyIdToken(authToken)
        .then((user) => {
          req.user = user;  //firebase user
          next();
        });
    } catch (error) {
      res.status(403).send("Unauthorized");
    }
  } else {
    res.status(403).send("Unauthorized");
  }

  /*if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization[1];
    } catch (error) {}
  }*/
});

module.exports = { protect };
