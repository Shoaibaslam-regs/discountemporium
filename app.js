const express = require("express");
const path = require("path");
const hbs = require("hbs");
const session = require("express-session");
require("dotenv").config();
const MongoStoreModule = require("connect-mongo");
const purchaseroute = require("./routes/purchase");
const connectDB = require("./config/db");
const MongoStore = MongoStoreModule.default || MongoStoreModule;

const app = express();

connectDB()
.then(() => console.log("DB Connected"))
.catch(err => console.log("DB Connection Failed", err));


app.set("trust proxy", 1);

app.use(
  session({
    name: "sessionId",
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,  
      store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
      ttl: 14 * 24 * 60 * 60,
  }),
    cookie: {
      maxAge: 1000 * 60 * 60,
      httpOnly: true, 
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "lax"
    
    }
  })
);
  

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "./public")));

const viewsPath = path.join(__dirname, "./source/views");
const partialsPath = path.join(__dirname, "./source/partials");

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/products");
const redirectRoutes = require("./routes/redirect");
const savedRoutes = require("./routes/savedItems");
const authStatusRoutes = require("./routes/authStatus");


app.use("/", authRoutes);
app.use("/", savedRoutes);
app.use("/", redirectRoutes);
app.use("/", authStatusRoutes);
app.use("/api/products", productRoutes);
app.use("/api",purchaseroute);


app.get("/", (req, res) => res.render("splash"));
app.get("/skeleton", (req, res) => res.render("skeleton"));
app.get("/index", (req, res) => {
   const success = req.session.success;
   const error = req.session.error;

   req.session.success = null;
   req.session.error = null;

   res.render("index", { success, error });
});
app.get("/health", (req, res) => {
   res.json({ status: "OK" });
 });
 
app.get("/about", (req, res) => res.render("about"));
app.get("/women", (req, res) => res.render("women"));
app.get("/save", (req, res) => res.render("save"));
app.get("/product", (req, res) => res.render("product"));
app.get("/mencloth", (req, res) => res.render("mencloth"));
app.get("/contact", (req, res) => res.render("contact"));
app.get("/kitchen", (req, res) => res.render("kitchen"));
app.get("/clothings", (req, res) => res.render("clothings"));
app.get("/shoes", (req, res) => res.render("shoes"));
app.get("/cosmetic", (req, res) => res.render("cosmetic"));
app.get("/sports", (req, res) => res.render("sports"));

app.get("/register", (req, res) => {
   console.log("ERROR:", req.session.error);
   console.log("SUCCESS:", req.session.success);

   const error = req.session.error;
   const success = req.session.success;

   req.session.error = null;
   req.session.success = null;

   res.render("register", { error, success });
});

app.get("/login", (req, res) => {
   console.log("LOGIN ERROR:", req.session.error);
   console.log("LOGIN SUCCESS:", req.session.success);
   console.log("QUERY:", req.query);

   let error = req.session.error;
   let success = req.session.success;

   if (req.query.logout === "true") { 
   success = "You have been logged out successfully.";
   }
   req.session.error = null;
   req.session.success = null;

   res.render("login", { error, success });
}); 
module.exports = app;