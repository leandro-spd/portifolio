const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
  aba.addEventListener("click", function() {
    if (aba.classList.contains("selecionado")) {
      return;
    }

    selecionarAba(aba);
    mostrarInformacoesDaAba(aba);
  });
});

function selecionarAba(aba) {
  const abasSelecionadas = document.querySelectorAll(".aba.selecionado");
  abasSelecionadas.forEach(abaSelecionada => {
    abaSelecionada.classList.remove("selecionado");
  });

  aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba) {
  const informacoesSelecionadas = document.querySelectorAll(".informacao.selecionado");
  informacoesSelecionadas.forEach(informacaoSelecionada => {
    informacaoSelecionada.classList.remove("selecionado");
  });

  const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`;
  const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba);

  informacaoASerMostrada.classList.add("selecionado");
}


