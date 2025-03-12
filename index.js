import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.use("/", (req, res) => {
  const date = new Date().getDay();

  let type = "a weekday";
  let adv = "it's time to work hard!";

  if (date === 0 || date === 6) {
    type = "a weekend";
    adv = "it's time to work hard!";
  }

  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
