import { iniciarRoteamento } from "./router.js";


const app = document.getElementById("app");


iniciarRoteamento(app);


document.addEventListener("submit", (evento) => {

    const formulario =
        evento.target.closest("#formulario-cadastro");

    if (!formulario) {
        return;
    }


    evento.preventDefault();


    const nome =
        formulario.querySelector("#nome").value;

    const email =
        formulario.querySelector("#email").value;


    const cadastro = {
        nome: nome,
        email: email
    };


    localStorage.setItem(
        "cadastroProjetoAcolher",
        JSON.stringify(cadastro)
    );


   Swal.fire({
    title: "Cadastro salvo!",
    text: "Seus dados foram armazenados com sucesso.",
    icon: "success",
    confirmButtonText: "OK"
});

});


document.addEventListener("click", (evento) => {

    const link =
        evento.target.closest('a[data-rota="cadastro"]');

    if (!link) {
        return;
    }


    setTimeout(() => {

        const dadosSalvos =
            localStorage.getItem("cadastroProjetoAcolher");


        if (!dadosSalvos) {
            return;
        }


        const cadastro =
            JSON.parse(dadosSalvos);


        const nome =
            document.getElementById("nome");

        const email =
            document.getElementById("email");


        if (nome && email) {

            nome.value = cadastro.nome;

            email.value = cadastro.email;

        }

    }, 0);

});