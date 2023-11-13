var jogos_melhor_avaliados = [];
var jogos = [
    {
        titulo: "Cyberpunk 77",
        descricao: "Muito bom, belos bugs",
        plataformas: ["Steam", "Epic Games"],
        status: "Jogando",
        generos: ["Ação", "RPG"],
        imagem: "../assets/cyberpunk77-icon.png",
        nota: 9
    },
    {
        titulo: "Doki doki literature club",
        descricao: "Gostei muito, achei saudável",
        plataformas: ["Steam", "Epic Games", "Nintendo"],
        status: "Concluído",
        generos: ["Romance", "Terror"],
        imagem: "../assets/doki-doki-icon.png",
        nota: 1
    },
    {
        titulo: "Sonic",
        descricao: "Achei muito rápido e azul",
        plataformas: ["Nintendo"],
        status: "Jogando",
        generos: ["Ação", "Corrida"],
        imagem: "../assets/sonic-icon.jpg",
        nota: 8
    },
    {
        titulo: "Mario",
        descricao: "Não encontrei o vazamento",
        plataformas: ["Nintendo"],
        status: "Concluído",
        generos: ["Ação", "2D"],
        imagem: "../assets/mario-icon.png",
        nota: 10
    }
];

function ListarGamesMelhorAvaliados() {
    var container = document.getElementById('destaque-container');

    jogos_melhor_avaliados.slice(0, 3).forEach(function (jogo) {

        var destaque = document.createElement('div');
        destaque.classList.add('destaque');

        var titulo = document.createElement('h2');
        titulo.textContent = jogo.titulo;

        var descricao = document.createElement('p');
        descricao.textContent = jogo.descricao;

        var generos = document.createElement('p');
        generos.textContent = "Gêneros: " + jogo.generos;

        var plataformas = document.createElement('p');
        plataformas.textContent = "Plataformas: " + jogo.plataformas;

        var status = document.createElement('p');
        status.textContent = jogo.status + " Nota: " + jogo.nota;

        var imagem = document.createElement('img');
        imagem.src = jogo.imagem;
        imagem.alt = jogo.titulo;

        destaque.appendChild(titulo);
        destaque.appendChild(descricao);
        destaque.appendChild(generos);
        destaque.appendChild(plataformas);
        destaque.appendChild(status);
        destaque.appendChild(imagem);

        container.appendChild(destaque);

    });
}

function ListarJogos(jogos = this.jogos) {
    var conteiner_lista_geral = document.getElementById('lista-de-jogos');
    conteiner_lista_geral.innerHTML = '';
    if(jogos != this.jogos) conteiner_lista_geral.remove    
    jogos.forEach(function (jogo) {
        var card_do_jogo = document.createElement('div');
        card_do_jogo.classList.add('destaque');
        
        
        var titulo = document.createElement('h2');
        titulo.textContent = jogo.titulo;
        
        var descricao = document.createElement('p');
        descricao.textContent = jogo.descricao;
        
        var generos = document.createElement('p');
        generos.textContent = "Generos: " + jogo.generos;
        
        var plataformas = document.createElement('p');
        plataformas.textContent = "Plataformas: " + jogo.plataformas;
        
        var status = document.createElement('p');
        status.textContent = jogo.status + " Nota: " + jogo.nota;
        
        var imagem = document.createElement('img');
        imagem.src = jogo.imagem;
        imagem.alt = jogo.titulo;
        
        
        card_do_jogo.appendChild(titulo);
        card_do_jogo.appendChild(descricao);
        card_do_jogo.appendChild(generos);
        card_do_jogo.appendChild(plataformas);
        card_do_jogo.appendChild(status);
        card_do_jogo.appendChild(imagem);
        
        conteiner_lista_geral.appendChild(card_do_jogo);

    });
}
function filtrarPorGenero(){
    var select_genero = document.getElementById("Genero")
    var genero = select_genero.value
    var jogos_filtrados_por_genero = []
    
    jogos.forEach(jogo => {
        if(jogo.generos.includes(genero)){
            jogos_filtrados_por_genero.push(jogo); 
        } 
    });
    
    return jogos_filtrados_por_genero.length > 0 ? 
    ListarJogos(jogos_filtrados_por_genero) : 
    alert("Sem jogos para o genero: " + genero )
}
function filtrarPorPlataforma(){
    var select_plataforma = document.getElementById("Plataforma")
    var plataforma = select_plataforma.value
    var jogos_filtrados_por_plataforma = []
    
    jogos.forEach(jogo => {
        if(jogo.plataformas.includes(plataforma)){
            jogos_filtrados_por_plataforma.push(jogo); 
        } 
    });
    
    return jogos_filtrados_por_plataforma.length > 0 ? 
    ListarJogos(jogos_filtrados_por_plataforma) : 
    alert("Sem jogos para o plataforma: " + plataforma )
}
function pesquisar(){
    var input_pesquisa = document.getElementById("input-pesquisa")
    var titulo = input_pesquisa.value
    var jogos_filtrados_por_titulo = []
    
    jogos.forEach(jogo => {
        if(jogo.titulo.includes(titulo)){
            jogos_filtrados_por_titulo.push(jogo); 
        }
    });
    
    return jogos_filtrados_por_titulo.length > 0 ? 
    ListarJogos(jogos_filtrados_por_titulo) : 
    alert("Sem jogos para o titulo: " + titulo )
}

function organizarPorNota(){
    jogos_melhor_avaliados = jogos.slice().sort(function(a,b){
        return b.nota - a.nota;
    })
}

function submitForm(event){
    event.preventDefault()
    // Obter os valores dos campos
    var titulo = document.getElementById('inputFormTitulo').value;
    var descricao = document.getElementById('inputFormDescricao').value;
    var nota = document.getElementById('inputFormNota').value;
    var urlImage = document.getElementById('inputFormImagem').value;
    var status = document.getElementById('selectFormStatus').value;

    // Obter os valores selecionados dos campos de seleção múltipla
    var generosSelecionados = [];
    var generoSelect = document.getElementById('selectFormGenero');
    for (var i = 0; i < generoSelect.options.length; i++) {
        if (generoSelect.options[i].selected) {
            generosSelecionados.push(generoSelect.options[i].value);
        }
    }

    var plataformasSelecionadas = [];
    var plataformaSelect = document.getElementById('selectFormPlataforma');
    for (var i = 0; i < plataformaSelect.options.length; i++) {
        if (plataformaSelect.options[i].selected) {
            plataformasSelecionadas.push(plataformaSelect.options[i].value);
        }
    }

    let novoJogo = {
        titulo: titulo,
        descricao: descricao,
        plataformas: plataformasSelecionadas,
        status: status,
        generos: generosSelecionados,
        imagem: urlImage,
        nota: nota
    }
    adicionarJogo(novoJogo)
    ListarJogos(jogos)
}
function adicionarJogo(jogo){
    jogos.push(jogo)
    alert(`O jogo: ${jogo.titulo} foi adicionado`)
}

window.onload = function(){
    organizarPorNota()
    ListarGamesMelhorAvaliados()
    ListarJogos()
}
