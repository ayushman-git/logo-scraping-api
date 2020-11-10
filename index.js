const { LogoScrape } = require("logo-scrape");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = new express();

const port = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("<h2>Server is running.</h2>");
  console.log("GET req");
});

app.post("/url", (req, res) => {
  // (async () => {
  //   const url = req.body;
  //   const logo = await LogoScrape.getLogo(url);
  //   const logos = await LogoScrape.getLogos(url);
  //   console.log({ logo, logos });
  //   res.send(logos);
  // })();
  console.log(req);
  res.json({ message: "received" });
});

app.listen(port, () => {
  console.log("Server running on port " + port);
});
