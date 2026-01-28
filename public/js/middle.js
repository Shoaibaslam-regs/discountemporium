let slides = document.querySelectorAll(".slide");
let title = document.getElementById("heroTitle");
let sub = document.getElementById("heroSub");
let textBox = document.querySelector(".middle_text");

let index = 0;

function changeSlide() {
    slides.forEach(s => s.classList.remove("active"));
    textBox.classList.remove("show");
 
    let current = slides[index];
    current.classList.add("active");
 
    title.innerText = current.dataset.text;
    sub.innerText = current.dataset.sub;
 
    setTimeout(() => {
        textBox.classList.add("show");
    }, 400);

    index = (index + 1) % slides.length;
}

changeSlide();
setInterval(changeSlide, 5000);
