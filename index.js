const texto = ["evolução","desenvolvimento humano","plenitude pelo esporte"]
const text = document.querySelector(".textos");
function exibirTexto(){    
    setTimeout(() =>{
        text.textContent = texto[0];
    },0);
    setTimeout(() =>{
        text.textContent = texto[1];
    },3000);
    setTimeout(() =>{
        text.textContent = texto[2];
    },6000);

}

exibirTexto();


setInterval(exibirTexto,6000);