function atualizarContador() {
  // Data do início do namoro (formato: ano, mês - 1, dia)
  const dataInicio = new Date(2024, 4, 30); // Exemplo: 30 de junho de 2024

  const agora = new Date();
  const diffTempo = agora - dataInicio;

  const anos = Math.floor(diffTempo / (1000 * 60 * 60 * 24 * 365.25));
  const meses = Math.floor(
    (diffTempo % (1000 * 60 * 60 * 24 * 365.25)) /
      (1000 * 60 * 60 * 24 * 30.4375)
  );
  const dias = Math.floor(
    (diffTempo % (1000 * 60 * 60 * 24 * 30.4375)) / (1000 * 60 * 60 * 24)
  );

  document.getElementById(
    "contador"
  ).textContent = `${anos} anos, ${meses} meses e ${dias} dias`;
}

// Atualiza o contador a cada segundo
setInterval(atualizarContador, 500);

// CARROSSEL AUTOMÁTICO
let index = 0;
function moverCarrossel() {
  const carrossel = document.querySelector(".carousel-images");
  const total = carrossel.children.length;
  index = (index + 1) % total;
  carrossel.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(moverCarrossel, 3000); // Troca de imagem a cada 3 segundos

function playMusic() {
  const audio = document.getElementById("musica");
  const button = document.getElementById("playButton");

  audio.loop = true; // Garante o loop via JS
  audio
    .play()
    .then(() => {
      button.classList.add("hidden");
    })
    .catch((error) => {
      alert("Erro ao tentar tocar a música: " + error.message);
    });
}

// Quando sair da página, parar a música
document.addEventListener("visibilitychange", function () {
  const audio = document.getElementById("musica");
  if (document.hidden && audio) {
    audio.pause();
  } else if (!document.hidden && audio.paused) {
    audio.play();
  }
});

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "❤";

  // Posição aleatória na horizontal
  heart.style.left = Math.random() * 100 + "vw";

  // Tamanho aleatório (pequenos)
  const size = Math.random() * 10 + 10;
  heart.style.fontSize = size + "px";

  // Velocidade diferente para cada um (duração da animação)
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";

  document.body.appendChild(heart);

  // Remover depois de um tempo
  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// Criar um coração a cada 300ms
setInterval(createHeart, 300);
