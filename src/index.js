fetch("estados.json")
  .then((resposta) => resposta.json())
  .then((json) => carregaElementosNaPagina(json));

function carregaElementosNaPagina(json) {
  const table = document.createElement("table");

  for (let estados of json) {
    const tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerHTML = estados.nome;
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.innerHTML = estados.sigla;
    tr.appendChild(td2);

    table.appendChild(tr);
  }

  const resultado = document.querySelector(".resultado");
  resultado.appendChild(table);
}
