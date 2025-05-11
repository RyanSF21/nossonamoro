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
  ).textContent = `${anos} anos, ${meses} meses e ${dias} dias de namoro`;
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
