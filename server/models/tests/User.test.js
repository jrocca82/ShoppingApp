import User from "../user.models";

test("It makes a new product", () => {
    const raw = {
        _id: '1234',
        name: 'foo',
        email: "foo@bar.com",
        role: "admin",
      };
      const user = new User(raw);
      expect(user.getId()).toEqual(raw._id);
      expect(user.getName()).toEqual(raw.name);
      expect(user.getEmail()).toEqual(raw.email);
      expect(user.getRole()).toEqual(raw.role);
      expect(user.getData()).toEqual(raw)
});