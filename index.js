const { LogoScrape } = require("logo-scrape");
const express = require("express");
const app = new express();

app.get("/", (req, res) => {
  res.send("Working")
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

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
