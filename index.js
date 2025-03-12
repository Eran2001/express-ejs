import express from "express";

const app = express();
const port = 3000;

app.use("/", (req, res) => {
  res.render("index.ejs", {
    dayType: "weekend",
    advice: "Take it easy!",
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
