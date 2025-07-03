function setLang(lang) {
  fetch(`/lang/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (data[key]) {
          el.textContent = data[key];
        }
      });
      localStorage.setItem("lang", lang); // foydalanuvchi tanlovini saqlash
    });
}

// Sahifa yuklanganda oxirgi tanlangan tilni yuklash
window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "ru";
  setLang(savedLang);
});
