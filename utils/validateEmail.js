module.exports = function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(email)) return false;

  const allowedDomains = [
    "gmail.com",
    "yahoo.com",
    "outlook.com",
    "hotmail.com"
  ];

  const domain = email.split("@")[1].toLowerCase();
  return allowedDomains.includes(domain);
};
