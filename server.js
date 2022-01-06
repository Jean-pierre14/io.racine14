const exp = require("express"),
  cors = require("cors"),
  dotenv = require("dotenv").config(),
  { success, error } = require("consola"),
  app = exp();

PORT = process.env.PORT || 7000;

const con = require("./models/db.con");

con.connect((e) => {
  if (e) throw error;
  success({ message: `DB connected`, badge: true });
});

app.use(cors());

app.get("/", (req, res) => {
  res.json("Hello");
});

app.use("/users", require("./routers/"));

app.listen(PORT, (e) => {
  if (e) error({ message: `Error ${e}`, badge: true });
  success({ message: `Server run on port ${PORT}`, badge: true });
});
