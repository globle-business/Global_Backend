const jwt = require("jsonwebtoken");

// Access Token (short time)
const generateAccessToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
      role: user.role   // ✅ IMPORTANT
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
};

// Refresh Token (long time)
const generateRefreshToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      role: user.role   // ✅ optional but recommended
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};

module.exports = {
  generateAccessToken,
  generateRefreshToken
};