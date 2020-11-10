const { LogoScrape } = require("logo-scrape");
const express = require("express");
const app = new express();

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("<h2>Server is running.</h2>")
})

app.post("/url", (req, res) => {
  (async () => {
    const url = req.body;
    const logo = await LogoScrape.getLogo(url);
    const logos = await LogoScrape.getLogos(url);
    console.log({ logo, logos });
    res.send(logos);
  })();
});

app.listen(port, () => {
  console.log("Server running on port " + port);
});
