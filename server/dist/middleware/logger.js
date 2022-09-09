"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger = (req, res, next) => {
    console.log("=> ", req.method, req.url, "Admin: ", req.params.isAdmin, "Auth: ", req.params.isAuthenticated);
    next();
};
exports.default = logger;
//# sourceMappingURL=logger.js.map