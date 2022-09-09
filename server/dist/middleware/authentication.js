"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth = (req, res, next) => {
    //TODO: Check auth (role)
    //mock for testing:
    req.params.isAdmin = "true";
    req.params.isAuthenticated = "true";
    next();
};
exports.default = auth;
//# sourceMappingURL=authentication.js.map