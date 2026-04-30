document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     🌙 DARK MODE
  ========================= */
  const toggle = document.getElementById("darkToggle");

  // aplicar modo guardado
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    if (toggle) toggle.textContent = "☀️ Mode clar";
  }

  // solo si existe el botón
  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");

      if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        toggle.textContent = "☀️ Mode clar";
      } else {
        localStorage.setItem("theme", "light");
        toggle.textContent = "🌙 Mode fosc";
      }
    });
  }

  /* =========================
     🍪 COOKIES BANNER
  ========================= */
  const banner = document.getElementById("cookieBanner");
  const acceptBtn = document.getElementById("acceptCookies");
  const rejectBtn = document.getElementById("rejectCookies");

  // solo ejecutar si existe el banner (evita errores)
  if (banner && acceptBtn && rejectBtn) {

    // mostrar si no hay decisión previa
    if (!localStorage.getItem("cookiesChoice")) {
      banner.style.display = "flex";
    }

    // aceptar
    acceptBtn.addEventListener("click", () => {
      localStorage.setItem("cookiesChoice", "accepted");
      banner.style.display = "none";
    });

    // rechazar
    rejectBtn.addEventListener("click", () => {
      localStorage.setItem("cookiesChoice", "rejected");
      banner.style.display = "none";
    });
  }

});