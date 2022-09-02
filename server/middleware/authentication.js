const auth = (req, res, next) => {
    //TODO: Check auth (role)

    //mock for testing:
    req.isAdmin = true;
    req.isAuthenticated = true;

    next();
}

export default auth;