document.addEventListener('DOMContentLoaded', function ()
    {const texto = ["evolução","desenvolvimento humano","plenitude pelo esporte"]
const text = document.querySelector(".textos");
function exibirTexto(){    
    setTimeout(() =>{
        text.textContent = texto[0];
    },0);
    setTimeout(() =>{
        text.textContent = texto[1];
    },4000);
    setTimeout(() =>{
        text.textContent = texto[2];
    },8000);

}

exibirTexto();


setInterval(exibirTexto,6000);

const ul = document.querySelector(".sobre") //pega todos os elementos com a classe sobre

//Observador que adiciona a propriedade "mostrar" ao elemento, fazendo uma animação dele.

const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry =>{
        const intersecting = entry.isIntersecting;        
        if (intersecting){

            setTimeout(() =>{
                entry.target.classList.add("show");
                observer.unobserve(entry.target);},
                800);
        }
    }),
    { threshold: [0, 0.25, 0.5, 0.75, 1] }
})

observer.observe(ul);})