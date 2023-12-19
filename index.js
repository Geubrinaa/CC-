const express = require("express");
const app = express();

const port = process.env.port || 4000;

app.listen(port, () => {
  try {
    console.log(`Running on ${port} without you`);
  } catch (error) {
    throw error;
  }
});
