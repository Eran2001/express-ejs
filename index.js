import express from "express";

const app = express();
const port = 3000;

app.use("/", (req, res) => {
  res.render("./views/index.ejs", {
    dayType: "a weekday",
    advice: "it's time to work hard.",
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
