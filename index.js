// Función principal
function main() {
    // Obtengo el form
    const formEl = document.querySelector(".el-form");

    // Creo un event listener
    formEl.addEventListener("submit", (e) => {
        // Primero, evito que actúe como siempre
        e.preventDefault();

        // Obtengo datos
        const data = new FormData(e.target);
        const objeto = Object.fromEntries(data.entries());

        // A los valores ya obtenidos, completo todas las opciones de la última sección
        objeto.tema = data.getAll("tema");

        console.log(objeto);
    });
}

// EJECUCIÓN
main();
