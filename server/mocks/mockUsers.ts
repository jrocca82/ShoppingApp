import {UserModel} from "../models/user.models";

const user1 = new UserModel({
  id: '44jweqmw03f',
  username: 'jondoe',
  email: 'jondoe@gmail.com',
  role: 'admin',
});

const user2 = new UserModel({
  id: 'gdfgh43tws2e',
  username: 'janedoe',
  email: 'janedoe@gmail.com',
  role: 'customer',
});

const mockUsers = [user1, user2];

export default mockUsers;