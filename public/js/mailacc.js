async function showLoggedInUser() {
  try {
    const res = await fetch("/current-user", {
      credentials: "include"
    });

    const data = await res.json();
    const userEmailElem = document.getElementById("userEmail");

    if (!userEmailElem) return;

    if (data.loggedIn) {
      userEmailElem.textContent = `Login as: ${data.email}`;
    } else {
      userEmailElem.innerHTML =
        '<a href="/login" style="text-decoration:none; color:gray;">Login</a>';
    }
  } catch (err) {
    console.error(err);
  }
}
 
document.addEventListener("DOMContentLoaded", showLoggedInUser);
