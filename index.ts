/** @format */

import express from "express";
import cors from "cors";
import random from "randomstring";
const app = express();
app.use(cors());
app.get("/", (req, res) => {
  let arr = "";
  for (let i = 0; i < 5; i++) {
    arr +=
      random
        .generate({
          length: 50,
          charset: "alphabetic",
        })
        .toUpperCase() + "\n";
  }

  res.send(arr);
});

app.listen(8000, () => {
  console.log("Example app listening on port 8000!");
});
