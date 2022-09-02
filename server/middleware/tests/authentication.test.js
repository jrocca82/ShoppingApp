import auth from "../authentication";

test('It calls next()', () => {
    const next = jest.fn(x => x);
    auth({}, {}, next);
    expect(next.mock.calls.length).toBe(1);
  });
  
  test('It adds isAuthenticated and isAdmin flags to req', () => {
    const next = jest.fn(x => x);
    const req = {};
    auth(req, {}, next);
    expect(typeof req.isAuthenticated === 'boolean').toBe(true);
    expect(typeof req.isAdmin === 'boolean').toBe(true);
  });