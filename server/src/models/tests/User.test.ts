import User from "../user.models";

test("It makes a new product", () => {
    const raw = {
        username: 'foo',
        email: "foo@bar.com",
        role: "admin",
      };
      const user = new User(raw);
      expect(user.username).toEqual(raw.username);
      expect(user.email).toEqual(raw.email);
      expect(user.role).toEqual(raw.role);
      expect(user).toEqual(raw)
});