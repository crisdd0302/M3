const express = require("express");
const app = express();
const port = 3000;

const accountsController = require("./controllers/accounts");
// const moviesController = require('./controllers/movies');

app.use("/accounts", accountsController);
// app.use('/accounts', moviesController);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Now listening to port ${port}`);
});
