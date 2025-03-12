import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.use("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
