const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();

app.use(express.static(path.join(__dirname, "./public")));

const path_second = path.join(__dirname, "./source/views");
const partial__path = path.join(__dirname, "./source/partials");
app.set("view engine", "hbs");
app.set("views", path_second);
hbs.registerPartials(partial__path);

app.get("/", (req, res) => {
  res.render("skeleton");
  console.log("skeleton api is running successfully");
});

app.get("/index", (req, res) => {
  res.render("index");
  console.log("index api is running successfully");
});

app.get("/product", (req, res) => {
  res.render("product");
  console.log("product api is running successfully");
});

app.get("/contact", (req, res) => {
  res.render("contact");
  console.log("contact page is running successfully");
}); 

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () =>
    console.log(`Server running at http://localhost:${port}`)
  );
} else {
  module.exports = app;
}
