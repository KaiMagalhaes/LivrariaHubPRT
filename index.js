

const grd = document.getElementById("lstLiv");
const bsc = document.getElementById("nmrBusca");
const selLoc = document.getElementById("fltLoc");
const selAno = document.getElementById("fltAno");
const tema = document.getElementById("btnTema");

function render(arr) {
  grd.innerHTML = arr.map(l => `
    <div class="col-12 col-md-4">
      <div class="card card-liv">
        <img src="https://via.placeholder.com/300x200" class="img-cap">
        <div class="card-body">
          <h5 class="card-title">${l.tit}</h5>
          <span class="tag-loc">${l.loc} - ${l.ano}º Ano</span>
          <p class="mt-2 fw-bold text-primary">${l.prc}€</p>
        </div>
      </div>
    </div>
  `).join('');
}

function filtrar() {
  const txt = bsc.value.toLowerCase();
  const loc = selLoc.value;
  const ano = selAno.value;

  const res = dds.filter(l => {
    return l.tit.toLowerCase().includes(txt) &&
           (loc === "" || l.loc === loc) &&
           (ano === "" || l.ano === ano);
  });
  render(res);
}

bsc.oninput = filtrar;
selLoc.onchange = filtrar;
selAno.onchange = filtrar;

tema.onclick = () => {
  const el = document.documentElement;
  const nvo = el.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
  el.setAttribute("data-bs-theme", nvo);
};

render(dds);