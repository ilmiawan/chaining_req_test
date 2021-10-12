const express = require("express");
const app = express();
const port = 3030;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/v1/get_key", (req, res) => {
  const dt = new Date();
  res.status(200).send({
    token: dt.getTime() + 1000,
    meta: {
      version: "1.0.0",
      api_status: "stable",
    },
  });
});

app.post("/v1/verify", (req, res) => {
  const auth = req.header("Authorization");
  const dt = new Date();
  if (!auth || dt.getTime() > auth) {
    res.status(401).send({
      Error: "Token invalid",
      meta: {
        api_status: "stable",
        version: "1.0.0",
      },
    });
    return;
  }

  res.status(200).send({
    message: "Token success authenticated",
    meta: {
      api_status: "stable",
      version: "1.0.0",
    },
  });
});

app.listen(port, () => {
  console.log(`Chaining req test app listening at http://localhost:${port}`);
});
