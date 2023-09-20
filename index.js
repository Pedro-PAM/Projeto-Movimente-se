const texto = ["evolução", "desenvolvimento humano","plenitude pelo esporte"]

function exibirTexto(cont){
    const text = document.getElementById("textos");
    for (i=0; i<=texto.length; i++){
        text.innerHTML = texto[i];
        return text;
    }

}
setInterval(() =>{
    exibirTexto();
},3000)


