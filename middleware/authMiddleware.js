const jwt = require('jsonwebtoken');

function authMiddleware(roles = []) {
  return (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer "))
      return res.status(401).json({ message: "Token eksik" });

    const token = authHeader.split(" ")[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;

      if (roles.length && !roles.includes(req.user.role)) {
        return res.status(403).json({ message: "Erişim reddedildi" });
      }

      next();
    } catch (err) {
      return res.status(401).json({ message: "Geçersiz token" });
    }
  };
}

module.exports = authMiddleware;
