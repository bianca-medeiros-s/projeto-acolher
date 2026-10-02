
const app = document.querySelector("#app");


const paginas = {

    inicio: `

        <section class="hero">

            <div class="hero-conteudo">

                <span class="tag">
                    Transformando vidas
                </span>

                <h2>
                    Juntos podemos fazer a diferença.
                </h2>

                <p>
                    O Projeto Acolher conecta pessoas, voluntários e iniciativas
                    para construir uma comunidade mais solidária e acolhedora.
                </p>

                <a
                    href="#cadastro"
                    data-rota="cadastro"
                    class="btn"
                >
                    Quero participar
                </a>

            </div>


            <div class="hero-imagem">

                <img
                    src="../imagens/voluntarios.jpg"
                    alt="Voluntários participando de uma ação social"
                >

            </div>

        </section>


        <section class="sobre">

            <div>

                <span class="tag">
                    Sobre o projeto
                </span>

                <h2>
                    Um espaço para acolher e transformar
                </h2>

                <p>
                    O Projeto Acolher promove ações sociais e oportunidades
                    para que pessoas possam contribuir com suas comunidades.
                </p>

                <p>
                    Por meio da participação voluntária e da solidariedade,
                    buscamos fortalecer vínculos e ampliar o impacto positivo
                    das ações realizadas.
                </p>

            </div>


            <div class="sobre-imagem">

                <img
                    src="../imagens/doacao.jpg"
                    alt="Pessoa participando de uma ação de doação"
                >

            </div>

        </section>


        <section class="destaques">

            <div class="section-titulo">

                <span class="tag">
                    Como participar
                </span>

                <h2>
                    Faça parte dessa iniciativa
                </h2>

            </div>


            <div class="cards">


                <article class="card">

                    <div class="icone">
                        🤝
                    </div>

                    <h3>
                        Seja voluntário
                    </h3>

                    <p>
                        Doe seu tempo e suas habilidades para ajudar nas ações
                        desenvolvidas pelo projeto.
                    </p>

                </article>


                <article class="card">

                    <div class="icone">
                        💚
                    </div>

                    <h3>
                        Apoie projetos
                    </h3>

                    <p>
                        Conheça as iniciativas e contribua para que elas
                        continuem alcançando quem precisa.
                    </p>

                </article>


                <article class="card">

                    <div class="icone">
                        🌱
                    </div>

                    <h3>
                        Transforme realidades
                    </h3>

                    <p>
                        Pequenas atitudes podem gerar mudanças importantes
                        dentro da comunidade.
                    </p>

                </article>


            </div>

        </section>


        <section class="cta">

            <div>

                <span class="tag">
                    Participe
                </span>

                <h2>
                    Quer fazer parte do Projeto Acolher?
                </h2>

                <p>
                    Cadastre-se e demonstre seu interesse em participar
                    das nossas ações.
                </p>

            </div>


            <a
                href="#cadastro"
                data-rota="cadastro"
                class="btn btn-claro"
            >
                Fazer cadastro
            </a>

        </section>

    `,


    projetos: `

        <section class="pagina-cabecalho">

            <span class="tag">
                Nossos projetos
            </span>

            <h2>
                Conheça nossas iniciativas
            </h2>

            <p>
                Ações pensadas para fortalecer a solidariedade e promover
                mudanças positivas na comunidade.
            </p>

        </section>


        <section class="projetos-lista">


            <article class="projeto-card">

                <img
                    src="../imagens/projetos.webp"
                    alt="Ação social do Projeto Acolher"
                >

                <div class="projeto-conteudo">

                    <span class="tag">
                        Ação social
                    </span>

                    <h3>
                        Projetos comunitários
                    </h3>

                    <p>
                        Desenvolvemos iniciativas voltadas ao apoio de pessoas
                        e comunidades em situação de vulnerabilidade.
                    </p>

                </div>

            </article>


            <article class="projeto-card">

                <img
                    src="../imagens/doacao.jpg"
                    alt="Doação realizada pelo Projeto Acolher"
                >

                <div class="projeto-conteudo">

                    <span class="tag">
                        Solidariedade
                    </span>

                    <h3>
                        Campanhas de doação
                    </h3>

                    <p>
                        Arrecadamos recursos e itens essenciais para apoiar
                        famílias e instituições.
                    </p>

                </div>

            </article>


            <article class="projeto-card">

                <img
                    src="../imagens/voluntarios.jpg"
                    alt="Grupo de voluntários"
                >

                <div class="projeto-conteudo">

                    <span class="tag">
                        Voluntariado
                    </span>

                    <h3>
                        Rede de voluntários
                    </h3>

                    <p>
                        Pessoas interessadas podem contribuir com tempo,
                        conhecimento e habilidades.
                    </p>

                </div>

            </article>


        </section>

    `,


    cadastro: `

        <section class="pagina-cabecalho">

            <span class="tag">
                Participe
            </span>

            <h2>
                Cadastro de voluntários
            </h2>

            <p>
                Preencha seus dados para demonstrar interesse em participar
                do Projeto Acolher.
            </p>

        </section>


        <section class="formulario-area">

            <form id="form-cadastro">


                <div class="campo">

                    <label for="nome">
                        Nome completo
                    </label>

                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Digite seu nome"
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
                        placeholder="Digite seu e-mail"
                        required
                    >

                </div>


                <div class="campo">

                    <label for="telefone">
                        Telefone
                    </label>

                    <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        placeholder="Digite seu telefone"
                        required
                    >

                </div>


                <div class="campo">

                    <label for="interesse">
                        Área de interesse
                    </label>

                    <select
                        id="interesse"
                        name="interesse"
                        required
                    >

                        <option value="">
                            Selecione uma opção
                        </option>

                        <option value="voluntariado">
                            Voluntariado
                        </option>

                        <option value="doacoes">
                            Doações
                        </option>

                        <option value="projetos">
                            Projetos sociais
                        </option>

                    </select>

                </div>


                <div class="campo">

                    <label for="mensagem">
                        Mensagem
                    </label>

                    <textarea
                        id="mensagem"
                        name="mensagem"
                        rows="5"
                        placeholder="Conte um pouco sobre como deseja participar"
                    ></textarea>

                </div>


                <button
                    type="submit"
                    class="btn"
                >
                    Enviar cadastro
                </button>


            </form>

        </section>

    `
};



function carregarPagina(pagina) {

    const paginaSelecionada =
        paginas[pagina] || paginas.inicio;

    app.innerHTML = paginaSelecionada;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    ativarFormulario();

}



function obterRotaAtual() {

    return (
        window.location.hash.replace("#", "")
        || "inicio"
    );

}



function ativarNavegacao() {

    document.addEventListener("click", (evento) => {

        const link =
            evento.target.closest("[data-rota]");

        if (!link) {
            return;
        }

        evento.preventDefault();

        const rota =
            link.dataset.rota;

        window.location.hash =
            rota;

        carregarPagina(rota);

    });

}



function ativarFormulario() {

    const formulario =
        document.querySelector("#form-cadastro");

    if (!formulario) {
        return;
    }


    formulario.addEventListener("submit", (evento) => {

        evento.preventDefault();


        const nome =
            document.querySelector("#nome")
            .value
            .trim();


        if (typeof Swal !== "undefined") {

            Swal.fire({

                title: "Cadastro enviado!",

                text:
                    `Obrigado, ${nome}! Seu interesse em participar foi registrado.`,

                icon: "success",

                confirmButtonText: "Continuar"

            });

        } else {

            alert(
                `Obrigado, ${nome}! Seu cadastro foi enviado.`
            );

        }


        formulario.reset();

    });

}



function iniciarAplicacao() {

    carregarPagina(
        obterRotaAtual()
    );

    ativarNavegacao();

}



window.addEventListener(
    "hashchange",
    () => {

        carregarPagina(
            obterRotaAtual()
        );

    }
);


iniciarAplicacao();

