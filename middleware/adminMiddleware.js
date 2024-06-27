// adminMiddleware.js

const adminOnly = (req, res, next) => {
  // Assuming user information is stored in req.user or req.userData
  if (req.user && req.user.isAdmin) {
    // User is an admin, proceed to the next middleware or route handler
    next();
  } else {
    // User is not authorized, send a 403 Forbidden response
    res.status(403).json({ message: 'Unauthorized access' });
  }
};

module.exports = adminOnly;
