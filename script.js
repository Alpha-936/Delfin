console.log("Java Script läuft");
let clicks = 0;

document.getElementById("secret-title").addEventListener("click", () => {
  clicks++;

  if (clicks === 5) {
    document.getElementById("secret-message").classList.add("show");
  }
});