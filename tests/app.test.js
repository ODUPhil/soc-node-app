const request = require("supertest");
const app = require("../app");

const fs = require("fs");

describe("SOC App API Tests", () => {

  test("GET / should return running message", async () => {
    const res = await request(app).get("/");
    expect(res.text).toBe("SOC Node App Running");
  });

  test("GET /login returns welcome message", async () => {
    const res = await request(app)
      .get("/login")
      .query({ username: "testuser" });

    expect(res.text).toBe("Welcome, testuser!");
  });

  test("GET /data returns JSON status ok", async () => {
    const res = await request(app).get("/data");
    expect(res.body.status).toBe("ok");
  });

  if (require.main === module) {
    app.listen(PORT, () => {
        logevent("Server started on port " + PORT);
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

module.exports = app;

});
