console.log("Java Script läuft");
let clicks = 0;
document.addEventListener("click", function(event) {
  const butterflies = ["🦋", "🦋", "💜", "✨", "🦋"];

  for (let i = 0; i < 12; i++) {
    const butterfly = document.createElement("span");

    butterfly.className = "butterfly-explosion";
    butterfly.textContent =
      butterflies[Math.floor(Math.random() * butterflies.length)];

    butterfly.style.left = event.clientX + "px";
    butterfly.style.top = event.clientY + "px";

    butterfly.style.setProperty(
      "--x", (Math.random() - 0.5) * 300 + "px"
    );

    butterfly.style.setProperty(
      "--y", (Math.random() - 0.5) * 300 + "px"
    );

    butterfly.style.setProperty(
      "--rotation", Math.random() * 720 + "deg"
    );

    document.body.appendChild(butterfly);

    butterfly.addEventListener("animationend", () => {
      butterfly.remove();
    });
  }
});