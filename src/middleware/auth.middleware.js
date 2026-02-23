const jwt = require("jsonwebtoken");

// ✅ AUTHENTICATE → verify tokens
exports.authenticate = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // check token exists
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Access denied. No token provided"
      });
    }

    // extract token
    const token = authHeader.split(" ")[1];

    // verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // attach user data to request
    req.user = decoded;

    next();

  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token"
    });
  }
};

// ✅ AUTHORIZE → check role
exports.authorize = (...roles) => {
  return (req, res, next) => {
    try {
      if (!req.user || !roles.includes(req.user.role)) {
        return res.status(403).json({
          message: "Access forbidden: insufficient permissions"
        });
      }

      next();

    } catch (error) {
      return res.status(500).json({
        message: "Authorization error"
      });
    }
  };
};