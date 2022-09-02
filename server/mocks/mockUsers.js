import User from "../models/user.models";

const user1 = new User({
  id: '44jweqmw03f',
  username: 'jondoe',
  email: 'jondoe@gmail.com',
  role: 'admin',
});

const user2 = new User({
  id: 'gdfgh43tws2e',
  username: 'janedoe',
  email: 'janedoe@gmail.com',
  role: 'customer',
});

const mockUsers = [user1.getData(), user2.getData()];

export default mockUsers;