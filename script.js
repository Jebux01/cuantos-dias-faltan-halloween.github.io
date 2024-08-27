// script.js

function createPumpkin() {
  const pumpkin = document.createElement("div");
  pumpkin.innerHTML = "🎃";
  pumpkin.classList.add("pumpkin");
  pumpkin.style.left = Math.random() * 100 + "vw";
  pumpkin.style.animationDuration = Math.random() * 3 + 2 + "s"; // Entre 2 y 5 segundos
  document.body.appendChild(pumpkin);

  // Eliminar la calabaza después de que termine la animación
  setTimeout(() => {
    pumpkin.remove();
  }, parseFloat(pumpkin.style.animationDuration) * 1000);
}

// Crear calabazas periódicamente
setInterval(createPumpkin, 100); // Crea una nueva calabaza cada 300ms

function countdown() {
  const halloween = new Date("October 31, 2024 00:00:00").getTime();
  const now = new Date().getTime();
  const distance = halloween - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("clock").innerHTML = `
        ${days}d ${hours}h ${minutes}m ${seconds}s
    `;

  if (distance < 0) {
    document.getElementById("clock").innerHTML = "¡Feliz Halloween!";
  }
}

setInterval(countdown, 1000);
