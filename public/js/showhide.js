
function toggleBothPasswords(btn) {
  const password = document.getElementById("password");
  const confirm = document.getElementById("confirmPassword");

  const icon = btn.querySelector("i");
  const text = btn.querySelector("span");

  const isHidden = password.type === "password";

  password.type = isHidden ? "text" : "password";
  confirm.type  = isHidden ? "text" : "password";
 
  icon.classList.toggle("bx-show", !isHidden);
  icon.classList.toggle("bx-hide", isHidden);
 
 text.textContent = isHidden ? "Hide Passwords" : "Show Passwords";
}

const notify = document.getElementById("notify");

if (notify) {
  setTimeout(() => {
    notify.classList.add("show");
  }, 100);

  setTimeout(() => {
    notify.classList.remove("show");
  }, 5000);
}
