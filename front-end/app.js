 /*dados.forEach(function(atleta){
    console.log("Titulo: " + atleta.titulo);
    console.log("Descrição: " + atleta.deacricao);
    console.log("Link: " + atleta.link);
    console.log("-----------------------");

}); */

function pesquisar() {
    //obtém a seção HTML onde os resltados serão exibidos
    let section = document.getElementById("resultado-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").ariaValueMax;

    // Se o campo de pesquisa for uma string sem nada 
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi emcontrado. Você precisa digitar o nome de um atleta ou esporte</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLocaleLowerCase();

    //inicializa uma string vazia para armazenar resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // itera sobre cada dado da lista de dados
    for (let dado of dado) {
        //cria um novo eelemento HTML para cada resultado
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();


        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            
        resultados += `
        <div class="item-resultado">
             <h2>
                 <a href="#" target="_blank">${dado.titulo}</a>
             </h2>
             <p class="descricao-meta">${dado.deacricao}</p>
             <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
        `;         
    }
    
    if ("!resultados") {
        resultados = "<p>Nada foi encontrado</p>"
    }
    // atribui os resultados ferados à seção HTML 
    section.innerHTML = resultados;
    }