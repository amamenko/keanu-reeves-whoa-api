import express from "express";
import cors from "cors";
import path from "path";
import { getUniqueValuesFromArr } from "./utils/getUniqueValuesFromArr";
import { whoaArr } from "./arrays/whoaArr";
import { getRandomWhoa } from "./functions/getRandomWhoa";
import { getOrderedWhoa } from "./functions/getOrderedWhoa";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 4000;

// Enable all cross-origin requests
app.use(cors());

app.get("/whoas/random", (req, res) => {
  getRandomWhoa(req, res);
});

app.get("/whoas/ordered/:index?", (req, res) => {
  getOrderedWhoa(req, res);
});

app.get("/whoas/movies", (req, res) => {
  res.send(getUniqueValuesFromArr(whoaArr, "movie"));
});

app.get("/whoas/directors", (req, res) => {
  res.send(getUniqueValuesFromArr(whoaArr, "director"));
});

app.get("/health", (req, res) => {
  res.send("The Keanu Reeves Whoa API is up and running!");
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  // Redirect to root in case no path match
  app.use((req, res, next) => {
    if (req.path !== "/") {
      return res.redirect("/");
    }
    next();
  });

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("*", (req, res) => {
    res.redirect("/");
  });
}

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
