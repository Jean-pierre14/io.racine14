const exp = require("express"),
  cors = require("cors"),
  dotenv = require("dotenv").config(),
  { success, error } = require("consola"),
  app = exp();

PORT = process.env.PORT || 7000;

app.use(cors());

app.get("/", (req, res) => {
  res.json("Hello");
});

app.listen(PORT, (e) => {
  if (e) error({ message: `Error ${e}`, badge: true });
  success({ message: `Server run on port ${PORT}`, badge: true });
});
