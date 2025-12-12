const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express(); 
// const cookie = require('cookie-parser');

const productRoutes = require("./routes/products");
// const pageRoutes = require("./routes/pages");

app.use(express.static(path.join(__dirname, "./public")));

const path_second = path.join(__dirname, "./source/views");
const partial__path = path.join(__dirname, "./source/partials");
app.set("view engine", "hbs");
app.set("views", path_second);
hbs.registerPartials(partial__path);
  
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.status(200).render("splash");
  console.log("spash api is running successfully");
});

app.get("/skeleton", (req, res) => {
  res.status(200).render("skeleton");
  console.log("skeleton api is running successfully");
});
app.get("/index", (req, res) => {
  res.render("index");
  console.log("index api is running successfully");
});
app.get("/about", (req, res) => {
  res.render("about");
  console.log("about api is running successfully");
}); 

app.get("/women", (req, res) => { 
  res.status(200).render("women");
  console.log("men api is running successfully");
});

app.get("/save", (req, res) => { 
  res.status(200).render("save");
  console.log("save api is running successfully");
});
app.get("/product", (req, res) => {
  res.render("product");
  console.log("product api is running successfully");
}); 

app.get("/mencloth", (req, res) => {
  res.render("mencloth");
  console.log("mencloth page is running successfully");
});
app.get("/contact", (req, res) => {
  res.render("contact");
  console.log("contact page is running successfully");
}); 

app.get("/kitchen", (req, res) => {
  res.render("kitchen");
  console.log("kitchen page is running successfully");
}); 
app.get("/clothings", (req, res) => {
  res.render("clothings");
  console.log("clothings page is running successfully");
}); 

app.get("/shoes", (req, res) => {
  res.render("shoes");
  console.log("shoes page is running successfully");
}); 

app.get("/cosmetic", (req, res) => {
  res.render("cosmetic");
  console.log("cosmetic page is running successfully");
}); 

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () =>
    console.log(`Server running at http://localhost:${port}`)
  );
} else {
  module.exports = app;
}
 