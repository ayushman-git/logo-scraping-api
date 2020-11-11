const { LogoScrape } = require("logo-scrape");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = new express();
const hdLogos = require("./assets/logos");

const port = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("<h2>Server is running.</h2>");
});

app.post("/url", (req, res) => {
  (async () => {
    const url = req.body.url;
    const webName = url.replace(/.+\/\/|www.|\..+/g, "");
    const logos = await LogoScrape.getLogos(url);
    const hdLogo = hdLogos[webName];
    if (hdLogo) {
      logos.unshift({ url: hdLogo });
    }
    res.send(logos);
  })();
});

app.listen(port, () => {
  console.log("Server running on port " + port);
});
