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
const notify = document.getElementById("notify");

if (notify) {
  setTimeout(() => {
    notify.classList.add("show");
  }, 100);

  setTimeout(() => {
    notify.classList.remove("show");
  }, 5000);
}

document.querySelectorAll("input").forEach(input => {
  const error = input.nextElementSibling;
  const max = input.maxLength;
  input.addEventListener("input", () => {
    clearTimeout(input._timer);

    if (input.value.length > max) {
      error.textContent = `maximum use ${max} characters`;
      error.style.background =  "#ffffff";
      error.style.opacity = "1";

      setTimeout(() => error.style.opacity = "0", 2800);

      input._timer = setTimeout(() => {
        error.textContent = "";
      }, 3000);
    } else {
      error.textContent = "";
    }
  });

});

