const livros = [
    { nmr: 1, nome: "Matemática A", disciplina: "Matemática", distrito: "Braga", preco: 20.50 },
    { nmr: 2, nome: "BioDesafios", disciplina: "Biologia", distrito: "Porto", preco: 18.00 },
    { nmr: 3, nome: "Mensagem", disciplina: "Português", distrito: "Lisboa", preco: 15.00 }
];

const container = document.getElementById("lista-livros");
const busca = document.getElementById("searchBar");

function mostrarLivros(dados) {
    container.innerHTML = dados.map(item => `
        <li class="card-item">
            <strong>${item.nome}</strong><br>
            <span class="escola-tag">${item.disciplina}</span><br>
            <small>${item.distrito}</small><br>
            <b>${item.preco}€</b>
        </li>
    `).join('');
}

busca.addEventListener("input", () => {
    const termo = busca.value.toLowerCase();
    const filtrados = livros.filter(l => l.nome.toLowerCase().includes(termo));
    mostrarLivros(filtrados);
});

// Inicializa a lista
mostrarLivros(livros);