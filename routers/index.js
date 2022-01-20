const router = require("express").Router(),
  db = require("../models/db.con");

let d = new Date();
const ThisYear = d.getFullYear();

router.get("/", (req, res) => {
  let sql = "SELECT * FROM student ORDER BY id_student WHERE AnneeScolaire = ?";
  db.query(sql, [ThisYear]);
});

module.exports = router;
