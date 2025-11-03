document.addEventListener("DOMContentLoaded", () => {
    const fabMain = document.getElementById("fabMain");
    const fabOptions = document.getElementById("fabOptions");
    const scrollTopBtn = document.getElementById("scrollTopBtn");
  
    if (!fabMain || !scrollTopBtn) return; // safely exit if not loaded
  
    fabMain.addEventListener("click", () => {
      fabOptions.classList.toggle("active");
      fabMain.textContent = fabOptions.classList.contains("active") ? "✖" : "☰";
    });
  
    scrollTopBtn.addEventListener("click", () => {
      const duration = 600;
      const start = window.scrollY;
      const startTime = performance.now();
  
      function animateScroll(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        window.scrollTo(0, start * (1 - ease));
        if (progress < 1) requestAnimationFrame(animateScroll);
      }
  
      requestAnimationFrame(animateScroll);
    });
  });
  
  function openCart() {
    window.location.href = "/";
  }
  