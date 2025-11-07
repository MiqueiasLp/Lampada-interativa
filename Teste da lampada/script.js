document.addEventListener("DOMContentLoaded", () => {
  const lampada = document.getElementById("lampada");
  if (!lampada) return; // protege caso o elemento não exista

  function lampadaEstaQuebrada() {
    // usa opcional chaining e compara em minúsculas para evitar problemas de case/URL
    return (lampada.src || "").toLowerCase().includes("quebrada");
  }

  lampada.addEventListener("mouseover", () => {
    if (!lampadaEstaQuebrada()) {
      lampada.src = "lampada-acesa.jpg";
    }
  });

  lampada.addEventListener("mouseout", () => {
    if (!lampadaEstaQuebrada()) {
      lampada.src = "lampada-apagada.jpg";
    }
  });

  lampada.addEventListener("click", () => {
    lampada.src = "lampada-quebrada.jpg";
  });
});
