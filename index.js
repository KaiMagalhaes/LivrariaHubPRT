

const lst = document.getElementById("lstLiv");
const bsc = document.getElementById("nmrBusca");
const selecEditora = document.getElementById("filtroEditora");
const selecAno = document.getElementById("filtroAno");
const selecTipo = document.getElementById("filtroTipo");
const selecDiscip = document.getElementById("filtroDisciplina");
const tema = document.getElementById("btnTema");
const btnLimpar = document.getElementById("btnLimpar");
const contadorLivros = document.getElementById("contadorLivros");


const dds = [
  { tit: "Matemática A 10º", editora: "1", ano: "6", tipo: "4", discip: "2", prc: "18.50", img: "" },
  { tit: "Português 11º Ano", editora: "1", ano: "7", tipo: "4", discip: "1", prc: "16.90", img: "" },
  { tit: "Física e Química", editora: "2", ano: "7", tipo: "4", discip: "6", prc: "19.00", img: "" },
  { tit: "O Senhor dos Anéis", editora: "3", ano: "", tipo: "1", discip: "7", prc: "22.00", img: "" },
  { tit: "Ciências Naturais 8º", editora: "2", ano: "4", tipo: "4", discip: "5", prc: "14.50", img: "" },
  { tit: "Caderno de Inglês 9º", editora: "1", ano: "5", tipo: "5", discip: "4", prc: "9.90", img: "" },
];


function render(arr) {
  if (arr.length === 0) {
    lst.innerHTML = `<div class="col-12 sem-resultados"><i class="bi bi-search" style="font-size:2rem;"></i><br>Nenhum livro encontrado com esses filtros.</div>`;
    contadorLivros.textContent = "0 livros encontrados";
    return;
  }

  contadorLivros.textContent = `${arr.length} livro${arr.length !== 1 ? "s" : ""} encontrado${arr.length !== 1 ? "s" : ""}`;

  lst.innerHTML = arr.map(l => `
    <div class="col-12 col-sm-6 col-lg-4">
      <div class="card card-liv">
        <img src="${l.img || "https://via.placeholder.com/300x180/2a2260/9988ff?text=Sem+Capa"}" class="img-cap" alt="${l.tit}">
        <div class="card-body">
          <h5 class="card-title">${l.tit}</h5>
          <span class="tag-loc">${l.ano ? l.ano + "º Ano" : "Geral"}</span>
          <p class="preco-liv">${parseFloat(l.prc).toFixed(2)}€</p>
        </div>
      </div>
    </div>
  `).join("");
}

// --------------------------parte dos filtros-----------------------------------------------
function filtrar() {
  const txt = bsc.value.toLowerCase();
  const editora = selecEditora.value;
  const ano = selecAno.value;
  const tipo = selecTipo.value;
  const discip = selecDiscip.value;

  const res = dds.filter(l => {
    return (
      l.tit.toLowerCase().includes(txt) &&
      (editora === "" || l.editora === editora) &&
      (ano === "" || l.ano === ano) &&
      (tipo === "" || l.tipo === tipo) &&
      (discip === "" || l.discip === discip)
    );
  });

  render(res);
}


function limparFiltros() {
  bsc.value = "";
  selecEditora.value = "";
  selecAno.value = "";
  selecTipo.value = "";
  selecDiscip.value = "";
  filtrar();
}


bsc.oninput = filtrar;
selecEditora.onchange = filtrar;
selecAno.onchange = filtrar;
selecTipo.onchange = filtrar;
selecDiscip.onchange = filtrar;
btnLimpar.onclick = limparFiltros;

// --------------------------------------BOTAO TEMA----------------------------------
tema.onclick = () => {
  const el = document.documentElement;
  const nvo = el.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
  el.setAttribute("data-bs-theme", nvo);
};

render(dds);