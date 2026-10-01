const projetos = [
    {
        titulo: "Arrecadação de alimentos",
        categoria: "Doações",
        descricao: "Ação para arrecadar alimentos e itens básicos para famílias em situação de vulnerabilidade."
    },
    {
        titulo: "Campanha de materiais",
        categoria: "Doações",
        descricao: "Campanha destinada à arrecadação de materiais para ações sociais e atividades comunitárias."
    },
    {
        titulo: "Ações comunitárias",
        categoria: "Voluntariado",
        descricao: "Atividades comunitárias em que os voluntários podem colaborar com diferentes ações sociais."
    }
];

export function renderizarPagina(rota, elemento) {

    if (rota === "inicio") {

        elemento.innerHTML = `
            <section>
                <h2>Bem-vindo ao Projeto Acolher</h2>

                <p>
                    Conheça nossas ações e descubra como participar
                    dos projetos desenvolvidos pela organização.
                </p>
            </section>
        `;

        return;
    }

    if (rota === "projetos") {

        const cards = projetos.map((projeto) => {

            return `
                <article class="card">

                    <span class="badge">
                        ${projeto.categoria}
                    </span>

                    <h3>
                        ${projeto.titulo}
                    </h3>

                    <p>
                        ${projeto.descricao}
                    </p>

                    <a
                        href="#cadastro"
                        data-rota="cadastro"
                        class="botao"
                    >
                        Quero participar
                    </a>

                </article>
            `;

        }).join("");

        elemento.innerHTML = `
            <section>

                <h2>Nossos projetos</h2>

                <p>
                    Conheça algumas das ações realizadas pelo
                    Projeto Acolher.
                </p>

                <div class="cards">
                    ${cards}
                </div>

            </section>
        `;

        return;
    }

    if (rota === "cadastro") {

        elemento.innerHTML = `
            <section>

                <h2>Cadastro</h2>

                <p>
                    Preencha seus dados para demonstrar interesse
                    em participar das ações do Projeto Acolher.
                </p>

                <form id="formulario-cadastro" class="formulario">

                    <div class="campo">

                        <label for="nome">
                            Nome completo
                        </label>

                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            required
                        >

                    </div>

                    <div class="campo">

                        <label for="email">
                            E-mail
                        </label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                        >

                    </div>

                    <button
                        type="submit"
                        class="botao"
                    >
                        Enviar cadastro
                    </button>

                </form>

            </section>
        `;

        return;
    }

    elemento.innerHTML = `
        <section>
            <h2>Página não encontrada</h2>

            <p>
                A página solicitada não está disponível.
            </p>
        </section>
    `;
}