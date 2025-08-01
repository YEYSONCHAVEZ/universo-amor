const frases = [
  "Te Amo", "Me encantas", "Eres preciosa", "Feliz Día",
  "My love", "Mi vida", "Mi cielo", "Mi corazón", "Mi universo",
  "Contigo todo", "Tú y yo", "Para siempre", "Love you", "Evelin", "25/01/2023"
];

const imagenes = [
  "img/imagen1.jpg",
  "img/imagen2.jpg",
  "img/imagen3.jpg",
  "img/imagen4.jpg"
];

const universe = document.getElementById("universe");

function crearMensaje() {
  const esImagen = Math.random() < 0.4; // 40% probabilidad de que sea imagen

  if (esImagen) {
    const img = document.createElement("img");
    img.className = "photo";
    img.src = imagenes[Math.floor(Math.random() * imagenes.length)];

    img.style.top = `${Math.random() * 100}vh`;
    img.style.left = `${Math.random() * 100}vw`;
    img.style.animationDuration = `${15 + Math.random() * 15}s`;
    img.style.transform = `translateZ(${Math.random() * 800 - 400}px)`;

    universe.appendChild(img);

    setTimeout(() => universe.removeChild(img), 30000);
  } else {
    const mensaje = document.createElement("div");
    mensaje.className = "message";
    mensaje.textContent = frases[Math.floor(Math.random() * frases.length)];

    mensaje.style.top = `${Math.random() * 100}vh`;
    mensaje.style.left = `${Math.random() * 100}vw`;
    mensaje.style.fontSize = `${12 + Math.random() * 24}px`;
    mensaje.style.animationDuration = `${15 + Math.random() * 15}s`;
    mensaje.style.transform = `translateZ(${Math.random() * 800 - 400}px)`;

    universe.appendChild(mensaje);
    setTimeout(() => universe.removeChild(mensaje), 30000);
  }
}

// Crea un nuevo elemento cada 500ms
setInterval(crearMensaje, 500);
