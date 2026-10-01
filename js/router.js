import { renderizarPagina } from "./templates.js";


export function iniciarRoteamento(app) {

    function navegar() {

        const rota =
            window.location.hash.replace("#", "") || "inicio";

        renderizarPagina(rota, app);
    }


    document.addEventListener("click", (evento) => {

        const link =
            evento.target.closest("a[data-rota]");


        if (!link) {
            return;
        }


        evento.preventDefault();


        window.location.hash =
            link.dataset.rota;
    });


    window.addEventListener(
        "hashchange",
        navegar
    );


    navegar();
}