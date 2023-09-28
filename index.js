document.addEventListener('DOMContentLoaded', function ()   {    
    const dynamicText = document.querySelector(".textos");
    const words = ["evolução","desenvolvimento humano","plenitude pelo esporte"];

    // Varaveis de contagem
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeEffect = () => {
        const currentWord = words[wordIndex];
        const currentChar = currentWord.substring(0, charIndex);
        dynamicText.textContent = currentChar;
        dynamicText.classList.add("stop-blinking");

        if (!isDeleting && charIndex < currentWord.length) {            
            charIndex++;
            setTimeout(typeEffect, 200);
        } else if (isDeleting && charIndex > 0) {            
            charIndex--;
            setTimeout(typeEffect, 100);
        } else {            
            isDeleting = !isDeleting;
            dynamicText.classList.remove("stop-blinking");
            wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
            setTimeout(typeEffect, 1200);
        }
    }

    typeEffect();
    



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