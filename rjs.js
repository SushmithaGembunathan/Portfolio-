const darkModeButton = document.getElementById("darkModeToggle");

darkModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  // Change button text/icon
  if (document.body.classList.contains("dark-mode")) {
    darkModeButton.textContent = "☀️";
  } else {
    darkModeButton.textContent = "🌙 ";
  }
});
