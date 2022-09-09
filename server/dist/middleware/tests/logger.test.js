"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../logger"));
test("It calls next()", () => {
    const next = jest.fn(x => x);
    (0, logger_1.default)({}, {}, next);
    expect(next.mock.calls.length).toBe(1);
});
//# sourceMappingURL=logger.test.js.map