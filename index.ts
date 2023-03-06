import express, { Request, Response } from "express";
import { whoaArr } from "./whoaArr";
import enforce from "express-sslify";
import cors from "cors";
import path from "path";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 4000;

// Enable all cross-origin requests
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
}

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
