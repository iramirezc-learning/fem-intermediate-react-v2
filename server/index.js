import React from "react";
import fs from "fs";
import express from "express";
import { renderToNodeStream } from "react-dom/server";
import { ServerLocation } from "@reach/router";
import App from "../src/App";

const PORT = process.env.PORT || 3000;

const html = fs.readFileSync("dist/index.html").toString();
const parts = html.split("not rendered");
const server = express();

server.use("/dist", express.static("dist"));
server.use((req, res) => {
  res.write(parts[0]);

  const reactMarkup = (
    <ServerLocation url={req.url}>
      <App />
    </ServerLocation>
  );

  const stream = renderToNodeStream(reactMarkup);

  stream.pipe(res, { end: false });

  stream.on("end", () => {
    res.write(parts[1]);
    res.end();
  });
});

server.listen(PORT, () => console.log(`listening on port: ${PORT}`));
