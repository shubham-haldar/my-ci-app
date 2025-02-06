const request = require("supertest");
const app = require("./index");

test("GET / should return 'Hello, CI Pipeline!'", async () => {
  const response = await request(app).get("/");
  expect(response.text).toBe("Hello, CI Pipeline!");
});
