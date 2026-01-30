
document.querySelectorAll("input").forEach(input => {
  const error = input.nextElementSibling;
  const max = input.maxLength;
  input.addEventListener("input", () => {
    clearTimeout(input._timer);

    if (input.value.length >= max) {
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