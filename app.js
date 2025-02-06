let nomes = [];

function adicionarNome() {
    let nomeInput = document.getElementById("nome");
    let nome = nomeInput.value.trim();

    if (nome !== "" && !nomes.includes(nome)) {
        nomes.push(nome);
        atualizarLista();
        nomeInput.value = "";
    }
}

function atualizarLista() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";
    nomes.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (nomes.length === 0) {
        alert("Adicione pelo menos um nome para sortear!");
        return;
    }
    let sorteado = nomes[Math.floor(Math.random() * nomes.length)];
    document.getElementById("resultado").innerHTML = `Amigo sorteado: <strong>${sorteado}</strong>`;
}