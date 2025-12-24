module.exports = (req, res, next) => {
  if (!req.session.userId) {
    req.session.redirectAfterLogin = req.originalUrl;
    return res.status(401).json({ login: false });
  }
  next();
};
 
