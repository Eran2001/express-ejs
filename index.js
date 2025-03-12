import express from "express";
import bp from "body-parser";

const app = express();
const port = 3000;

app.use(bp.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs", { name: "" });
});

app.post("/submit", (req, res) => {
  const { username } = req.body;
  console.log(username);

  res.render("index.ejs", { name: username });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
