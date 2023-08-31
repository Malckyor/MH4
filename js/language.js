const btnToggleLanguage = document.getElementById("btn-toggle-language");
const headerTitle = document.getElementById("header-title");
const currentLanguageKey = "currentLanguage";
let currentLanguage = localStorage.getItem(currentLanguageKey) || "ja";

btnToggleLanguage.addEventListener("click", () => {
  currentLanguage = currentLanguage === "ja" ? "en" : "ja";
  localStorage.setItem(currentLanguageKey, currentLanguage);
  if (currentLanguage === "en") {
    btnToggleLanguage.textContent = "English-日本語";
  } else {
    btnToggleLanguage.textContent = "日本語-English";
  }
  loadPageContent();
  updateFooterVisibility();
});

function loadPageContent() {
  const languageFolder = currentLanguage === "en" ? "/html_en" : "/html";

  fetch(`${languageFolder}/index.html`)
    .then(response => response.text())
    .then(pageContent => {
      document.getElementById("main-content").innerHTML = pageContent;
      updateHeaderTitle();
    })
    .catch(error => {
      console.error("Error loading page:", error);
    });
}

function updateHeaderTitle() {
  if (currentLanguage === "en") {
    headerTitle.textContent = "MH4 & MH4G Cheats";
  } else {
    headerTitle.textContent = "MH4 MH4G改造チート";
  }
}

function updateFooterVisibility() {
    const footerContent = document.getElementById("footer-content");
    
    if (currentLanguage === "en") {
      footerContent.style.display = "block";
    } else {
      footerContent.style.display = "none";
    }
}

loadPageContent();
updateFooterVisibility();