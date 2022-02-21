const exp = require("express"),
    cors = require("cors"),
    { success, error } = require("consola"),
    app = exp();

require("dotenv").config();

PORT = process.env.PORT || 7000;

const con = require("./models/db.con");

con.connect((e) => {
    if (e) throw error;
    success({ message: `DB connected`, badge: true });
});

const title = 'Racine-14'

app.use(cors());
app.set('view engine', 'ejs')
app.use(exp.static('public/'))

app.get("/", (req, res) => {
    res.render('index', { title })
});

app.use("/users", require("./routers/"));

app.listen(PORT, (e) => {
    if (e) error({ message: `Error ${e}`, badge: true });
    success({ message: `Server run on port ${PORT}`, badge: true });
});