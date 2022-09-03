const puntuaciones = document.querySelector(".puntuaciones");
const thankYou = document.querySelector(".thank-you");
const puntuacionesSubmit = document.getElementById("submit");
const thankYouSubmit = document.getElementById("rate-again");
const parrafoResultado = document.getElementById("resultado");
const puntos = document.querySelectorAll(".punto");

// Hace desaparecer el contenedor "puntuaciones" y aparecer el contenedor "thank-you"
puntuacionesSubmit.addEventListener("click", () => {
    //puntuaciones.classList.remove("puntuaciones");
    puntuaciones.classList.add("hidden");
    thankYou.classList.remove("hidden");
});

thankYouSubmit.addEventListener("click", () => {
    puntuaciones.classList.remove("hidden");
    //puntuaciones.classList.add("puntuaciones");
    thankYou.classList.add("hidden");
})

puntos.forEach( (valor) => {
    valor.addEventListener("click", () => {
        parrafoResultado.innerHTML = `You selected ${valor.innerHTML} of 5.`
    })
})