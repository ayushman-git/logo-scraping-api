const { LogoScrape } = require("logo-scrape");
const express = require("express");
const app = new express();

const port = process.nextTick.port || 8080;

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

app.listen(port, () => {
  console.log("Server running on port 3000");
});
