"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const products_routes_1 = __importDefault(require("./routes/products.routes"));
const database_1 = __importDefault(require("./scripts/database"));
const authentication_1 = __importDefault(require("./middleware/authentication"));
(0, dotenv_1.config)();
(0, database_1.default)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const port = process.env.PORT;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(authentication_1.default);
app.get("/", (req, res) => {
    res.send("Hello Lorenzo. you are a cutie");
});
(0, user_routes_1.default)(app);
(0, products_routes_1.default)(app);
app.listen(port, () => {
    console.log("Listening on port", port);
});
//# sourceMappingURL=index.js.map