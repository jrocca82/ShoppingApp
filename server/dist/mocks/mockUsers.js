"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_models_1 = require("../models/user.models");
const user1 = new user_models_1.UserModel({
    id: '44jweqmw03f',
    username: 'jondoe',
    email: 'jondoe@gmail.com',
    role: 'admin',
});
const user2 = new user_models_1.UserModel({
    id: 'gdfgh43tws2e',
    username: 'janedoe',
    email: 'janedoe@gmail.com',
    role: 'customer',
});
const mockUsers = [user1, user2];
exports.default = mockUsers;
//# sourceMappingURL=mockUsers.js.map