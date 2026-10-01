# Projeto Acolher

Projeto front-end desenvolvido para uma organização não governamental (ONG), com o objetivo de apresentar projetos sociais e disponibilizar um formulário de cadastro.

## Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript
* Git
* GitHub
* Live Server

## Estrutura do projeto

```text
projeto-acolher/
├── html/
│   ├── index.html
│   ├── cadastro.html
│   └── projetos.html
├── css/
│   └── style.css
├── imagens/
│   ├── logo.png
│   ├── doacao.jpg
│   ├── voluntarios.jpg
│   └── projetos.webp
├── js/
│   ├── app.js
│   ├── router.js
│   └── templates.js
└── README.md
```

## Funcionalidades

* Navegação entre as páginas;
* Apresentação dos projetos da ONG;
* Formulário de cadastro;
* Validação dos dados;
* Armazenamento das informações utilizando `localStorage`;
* Navegação dinâmica utilizando JavaScript;
* Organização do código em módulos ES6.

## Pré-requisitos

Para executar o projeto localmente, são necessários:

* Visual Studio Code;
* Git;
* Extensão Live Server para o Visual Studio Code;
* Navegador web atualizado.

## Instalação e execução local

1. Clone o repositório do Projeto Acolher:

```bash
git clone https://github.com/bianca-medeiros-s/projeto-acolher.git
```

2. Acesse a pasta do projeto:

```bash
cd projeto-acolher
```

3. Abra a pasta no Visual Studio Code.

4. Instale ou verifique a extensão **Live Server** no Visual Studio Code.

5. Abra o arquivo `html/index.html`.

6. Clique com o botão direito no arquivo e selecione **Open with Live Server**.

7. O projeto será aberto no navegador por meio de um servidor local.

O uso do Live Server é necessário porque o projeto utiliza módulos JavaScript com `import` e `export`. A abertura direta do arquivo pelo protocolo `file://` pode impedir o carregamento desses módulos.

## Versionamento

O projeto utiliza Git para controle de versões e GitHub para hospedagem do repositório.

Foi utilizada uma estrutura baseada no GitFlow, com as seguintes branches:

* `main`: versão estável do projeto;
* `develop`: branch destinada ao desenvolvimento;
* `feature/versionamento`: branch utilizada para as alterações específicas desta etapa.

## Commits semânticos

Foram utilizados commits semânticos para identificar de forma clara o objetivo de cada alteração.

Exemplos utilizados no projeto:

```text
chore: inicializa projeto acolher
docs: adiciona documentação do projeto
```

## Releases

Foi criada a tag:

```text
v1.0.0
```

A tag representa a versão inicial registrada do projeto.

## GitHub e Pull Requests

O repositório está hospedado no GitHub.

As alterações desenvolvidas na branch `feature/versionamento` foram submetidas por meio de um Pull Request para a branch `develop`.

O Pull Request **#1**, denominado `docs: adiciona documentação do projeto`, foi utilizado para revisar a inclusão do `README.md` antes da integração das alterações.

## Issues e Milestones

Foi criada a Issue **“Implementação do versionamento e documentação”** para organizar as atividades desta etapa.

Também foi criada a Milestone **“EP IV - Versionamento e documentação”**, utilizada para agrupar e acompanhar as atividades relacionadas ao versionamento e à documentação do projeto.
