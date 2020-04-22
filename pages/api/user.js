export default async function me(req, res) {
  res.send({
    _table: {
      _base: {
        _airtable: {
          requestTimeout: 300000,
        },
        _id: "appkd99uhaxEq",
      },
      id: null,
      name: "Users",
    },
    id: "recpQcuHSdmtDL",
    _rawJson: {
      id: "recpQcuHSdmtQL",
      fields: {
        Name: "Testy McTesterson",
        Auth0: "auth0|5e9db782879aa00c9",
        "EV Code": "test-mc-test",
        Twitter: "kevin",
        Facebook: "i-dont-do-facebook",
        YouTube: "no-evs-on-my-youtube",
        Instagram: "insta-kev",
        terms_accepted: true,
        "First Name": "Test",
        "Last Name": "McTest",
        Email: "test@test.com",
        Avatar:
          "https://s.gravatar.com/avatar/b642b4217b34b1e8d3bd915fc65c4452?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fte.png",
        Region: ["North West"],
        "Unique Code": 0,
      },
      createdTime: "2020-04-21T08:41:13.000Z",
    },
    fields: {
      Name: "Testy McTesterson",
      Auth0: "auth0|5e9db782879aa00c97ebf419",
      "EV Code": "test-mc-test",
      Twitter: "kevin",
      Facebook: "i-dont-do-facebook",
      YouTube: "no-evs-on-my-youtube",
      Instagram: "insta-kev",
      terms_accepted: true,
      "First Name": "Test",
      "Last Name": "McTest",
      Email: "test@test.com",
      Avatar:
        "https://s.gravatar.com/avatar/b642b4217b34b1e8d3bd915fc65c4452?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fte.png",
      Region: ["North West"],
      "Unique Code": 0,
    },
  });
}
