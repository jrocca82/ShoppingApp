const logger = (req, res, next) => {
    console.log("=> ", req.method, req.originalUrl, "Admin: ", req.isAdmin, "Auth: ", req.isAuthenticated);
    next();
};

export default logger