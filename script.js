const container = document.getElementById("cardsContainer");
const searchInput = document.getElementById("searchInput");

const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");
const fecharModal = document.getElementById("fecharModal");

carregarPersonagens();

function carregarPersonagens(nome = "") {

    container.innerHTML =
    '<div class="loading">Carregando personagens...</div>';

    let url = "https://rickandmortyapi.com/api/character";

    if (nome !== "") {
        url += "/?name=" + encodeURIComponent(nome);
    }

    fetch(url)
    .then(function(response){

        if(!response.ok){
            throw new Error("Nenhum personagem encontrado");
        }

        return response.json();
    })
    .then(function(data){

        container.innerHTML = "";

        data.results.forEach(function(personagem){

            let statusTraduzido = personagem.status;

            if(statusTraduzido === "Alive"){
                statusTraduzido = "Vivo";
            }else if(statusTraduzido === "Dead"){
                statusTraduzido = "Morto";
            }else{
                statusTraduzido = "Desconhecido";
            }

            let generoTraduzido = personagem.gender;

            if(generoTraduzido === "Male"){
                generoTraduzido = "Masculino";
            }else if(generoTraduzido === "Female"){
                generoTraduzido = "Feminino";
            }else if(generoTraduzido === "Genderless"){
                generoTraduzido = "Sem gênero";
            }else{
                generoTraduzido = "Desconhecido";
            }

            let especieTraduzida = personagem.species;

            if(especieTraduzida === "Human"){
                especieTraduzida = "Humano";
            }else if(especieTraduzida === "Alien"){
                especieTraduzida = "Alienígena";
            }else if(especieTraduzida === "Robot"){
                especieTraduzida = "Robô";
            }else if(especieTraduzida === "Humanoid"){
                especieTraduzida = "Humanoide";
            }

            const card = document.createElement("div");
            card.classList.add("card");
            card.style.cursor = "pointer";

            const header = document.createElement("div");
            header.classList.add("card__header");

            const nomePersonagem = document.createElement("span");
            nomePersonagem.classList.add("card__name");
            nomePersonagem.textContent = personagem.name;

            header.appendChild(nomePersonagem);

            const imagemContainer = document.createElement("div");
            imagemContainer.classList.add("card__img-wrap");

            const imagem = document.createElement("img");
            imagem.src = personagem.image;
            imagem.alt = personagem.name;

            imagemContainer.appendChild(imagem);

            const info = document.createElement("div");
            info.classList.add("card__info");

            const status = document.createElement("p");
            status.textContent = "Status: " + statusTraduzido;

            const especie = document.createElement("p");
            especie.textContent = "Espécie: " + especieTraduzida;

            const genero = document.createElement("p");
            genero.textContent = "Gênero: " + generoTraduzido;

            const origem = document.createElement("p");
            origem.textContent = "Origem: " + personagem.origin.name;

            info.appendChild(status);
            info.appendChild(especie);
            info.appendChild(genero);
            info.appendChild(origem);

            card.appendChild(header);
            card.appendChild(imagemContainer);
            card.appendChild(info);

            card.addEventListener("click", function(){

                let tipo = personagem.type;

                if(!tipo){
                    tipo = "Não informado";
                }

                modalBody.innerHTML =
                '<img class="modal-img" src="' + personagem.image + '">' +
                '<h2 class="modal-title">' + personagem.name + '</h2>' +
                '<div class="modal-info">' +
                '<p><strong>Status:</strong> ' + statusTraduzido + '</p>' +
                '<p><strong>Espécie:</strong> ' + especieTraduzida + '</p>' +
                '<p><strong>Gênero:</strong> ' + generoTraduzido + '</p>' +
                '<p><strong>Origem:</strong> ' + personagem.origin.name + '</p>' +
                '<p><strong>Localização Atual:</strong> ' + personagem.location.name + '</p>' +
                '<p><strong>Tipo:</strong> ' + tipo + '</p>' +
                '<p><strong>Total de Episódios:</strong> ' + personagem.episode.length + '</p>' +
                '</div>';

                modal.style.display = "block";

            });

            container.appendChild(card);

        });

    })
    .catch(function(){

        container.innerHTML =
        '<div class="loading">Nenhum personagem encontrado.</div>';

    });
}

searchInput.addEventListener("keyup", function(){

    const texto = searchInput.value.trim();

    if(texto.length === 0){
        carregarPersonagens();
        return;
    }

    carregarPersonagens(texto);

});

fecharModal.addEventListener("click", function(){
    modal.style.display = "none";
});

window.addEventListener("click", function(event){

    if(event.target === modal){
        modal.style.display = "none";
    }

});