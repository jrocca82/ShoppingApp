"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authentication_1 = __importDefault(require("../authentication"));
test("It calls next()", () => {
    const next = jest.fn((x) => x);
    (0, authentication_1.default)({}, {}, next);
    expect(next.mock.calls.length).toBe(1);
});
test("It adds isAuthenticated and isAdmin flags to req", () => {
    const next = jest.fn((x) => x);
    const req = {};
    (0, authentication_1.default)(req, {}, next);
    expect(typeof req.isAuthenticated === "boolean").toBe(true);
    expect(typeof req.isAdmin === "boolean").toBe(true);
});
//# sourceMappingURL=authentication.test.js.map