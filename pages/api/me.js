export default async function me(req, res) {
  return res.send({
    "http://full_name": "Testy McTesterson",
    nickname: "test",
    name: "test@test.com",
    picture:
      "https://s.gravatar.com/avatar/b642b4217b34b1e8d3bd915fc65c4452?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fte.png",
    updated_at: "2020-04-21T13:49:55.486Z",
    email: "test@test.com",
    email_verified: false,
    sub: "auth0|5e9db782879aa00c97ebf418",
  });
}
