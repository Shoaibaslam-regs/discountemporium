async function showLoggedInUser() {
    try {
      const res = await fetch("/current-user", { credentials: "same-origin" });
      const data = await res.json();
  
      const userEmailElem = document.getElementById("userEmail");
      if (userEmailElem) {
          if (data.loggedIn) {
              userEmailElem.textContent = `login as: ${data.email}`; 
 

            } else { 
                userEmailElem.innerHTML = '<a href="/login" style="text-decoration:none; color:gray;">Login</a>';
        }
      }
    } catch (err) {
      console.error(err);
    }
  }
document.addEventListener("DOMContentLoaded", showLoggedInUser);
  function togglePassword(id, icon) {
  const input = document.getElementById(id);

  if (input.type === "password") {
    input.type = "text";
    icon.classList.remove("bx-show");
    icon.classList.add("bx-hide");
  } else {
    input.type = "password";
    icon.classList.remove("bx-hide");
    icon.classList.add("bx-show");
  }
}