const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const validateEmail = require("../utils/validateEmail");
const connectDB = require("../config/db");
const router = express.Router();

 router.get("/auth-status", (req, res) => {
  res.json({
    loggedIn: !!req.session.userId
  }); 
});

router.post("/register", async (req, res) => {
  
  try{
    const { name, email, password, confirmPassword } = req.body;
    await connectDB();

  if (password !== confirmPassword) {
    req.session.error = "Passwords do not match";
    return res.redirect("/register");
  }

  if (!validateEmail(email)) {
    req.session.error = "Please use a valid Gmail, Yahoo or Outlook email";
    return res.redirect("/register");
  }

  if (await User.findOne({ email })) {
    req.session.error = "Email already registered";
    return res.redirect("/register");
  }

  await User.create({
    name,
    email,
    password: await bcrypt.hash(password, 10)
  });

  req.session.success = "Registration successful. You can login now.";
  res.redirect("/login");
}catch(err){
   console.error("REGISTER ERROR:", err);
    req.session.error = "Server error";
    res.redirect("/register");
}

});

router.post("/login", async (req, res) => {
  
  try {
    await connectDB();
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      req.session.error = "User not found!";
      return res.redirect("/login");
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      req.session.error = "Incorrect password!";
      return res.redirect("/login");
    }

     req.session.userId = user._id;
     req.session.userEmail = user.email;
    
    const redirectUrl = req.session.redirectAfterLogin;
    req.session.redirectAfterLogin = null;

    if (redirectUrl) {
      return res.redirect(`/go?url=${encodeURIComponent(redirectUrl)}`);
    } 

    req.session.success = "Login successful!";
    return res.redirect("/index");  
  
  } catch (err) {
    console.log(err);
    req.session.error = "Something went wrong!";
    return res.redirect("/login");
  }
}); 
router.get("/logout", (req, res) => {
  if (!req.session.userId) {
    return res.redirect("/login");
  }

  req.session.destroy(err => {
    if (err) {
      console.log(err);
      return res.redirect("/index");
    }

    res.clearCookie("connect.sid");
 
    res.redirect("/login?logout=true");
  });
});

module.exports = router; 
 