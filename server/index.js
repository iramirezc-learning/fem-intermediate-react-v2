import React from "react";
import fs from "fs";
import express from "express";
import { renderToString } from "react-dom/server";
import { ServerLocation } from "@reach/router";
import App from "../src/App";

const PORT = process.env.PORT || 3000;

const html = fs.readFileSync("dist/index.html").toString();
const parts = html.split("not rendered");
const server = express();

server.use("/dist", express.static("dist"));
server.use((req, res) => {
  const reactMarkup = (
    <ServerLocation url={req.url}>
      <App />
    </ServerLocation>
  );

  res.send(`${parts[0]}${renderToString(reactMarkup)}${parts[1]}`);
  res.end();
});

server.listen(PORT, () => console.log(`listening on port: ${PORT}`));
