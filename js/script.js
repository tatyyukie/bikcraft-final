//Ativar links do menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
    const url = location.href;
    const href = link.href;
    if (url.includes(href)){
       link.classList.add("ativo");
    }
}

links.forEach(ativarLink);

//Ativar items do orçamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(paramentro){
    const elemento = document.getElementById(paramentro);
    
    if (elemtento){
        elemento.checked = true;
    }

    elemento.checked = true;
    console.log(elemento);
}

parametros.forEach(ativarProduto);