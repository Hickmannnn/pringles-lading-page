gsap.registerPlugin(SplitText);

const latasMenores = document.querySelectorAll(".pringles img:nth-child(2)");
const slides = document.querySelectorAll(".slide");

// CONTADOR
let contador = 0;

let clicar = true;

// ANIMAÇÃO SLIDE
latasMenores.forEach( (lataMenor)=> {
    lataMenor.onclick = ()=> {

        if (clicar) {
            clicar = false;

            const slideAtivo = document.querySelector(".slide.ativo");
            slideAtivo.classList.remove("ativo");

            if (contador == 3){
                contador = 0;
            } else{
                contador = contador + 1;
            }
    
            slides[contador].classList.add("ativo")

            animarTexto()

            setTimeout(()=> {
                clicar = true
            }, 1000)
        }
    }
})

function animarTexto(){
    const split = SplitText.create(".slide.ativo h2", {
        type: "chars",
        mask: "chars",
    })

    gsap.from(split.chars, {
        y: "100%",
        stagger: .06,
        delay: .2,
    })
}


