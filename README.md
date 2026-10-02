# Projeto Acolher

Projeto front-end desenvolvido para uma organização não governamental (ONG), com o objetivo de apresentar projetos sociais, incentivar a participação voluntária e disponibilizar um formulário de cadastro.

## Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript
* Git
* GitHub
* Vite
* SweetAlert2

## Estrutura do projeto

```text
projeto-acolher/
├── html/
│   ├── index.html
│   ├── cadastro.html
│   ├── projetos.html
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.mjs
│
├── css/
│   └── style.css
│
├── imagens/
│   ├── logo.png
│   ├── doacao.jpg
│   ├── voluntarios.jpg
│   └── projetos.webp
│
├── js/
│   ├── app.js
│   ├── router.js
│   └── templates.js
│
├── .gitignore
└── README.md
```

## Funcionalidades

* Página inicial institucional;
* Apresentação do Projeto Acolher;
* Apresentação das ações e projetos sociais;
* Navegação entre as páginas;
* Página de cadastro de voluntários;
* Validação básica dos campos obrigatórios do formulário;
* Mensagem de confirmação após o envio do cadastro;
* Layout responsivo para computadores, tablets e celulares;
* Menu de navegação adaptado para dispositivos móveis;
* Utilização de imagens e elementos visuais para apresentação dos projetos;
* Organização dos arquivos por responsabilidade.

## Formulário de cadastro

A página de cadastro permite que o usuário informe:

* Nome completo;
* E-mail;
* Telefone;
* Área de interesse;
* Mensagem.

Após o preenchimento e envio do formulário, uma mensagem de confirmação é apresentada utilizando a biblioteca SweetAlert2.

O formulário possui validação nativa do HTML5 por meio dos atributos `required` e dos tipos de campo apropriados, como `email`.

## Responsividade

O projeto utiliza CSS3 com media queries para adaptar a interface a diferentes tamanhos de tela.

Foram consideradas três situações principais:

* Computadores e telas maiores;
* Tablets;
* Dispositivos móveis.

O menu de navegação também possui comportamento específico para telas menores.

## Vite

O projeto utiliza o Vite como ferramenta de desenvolvimento e construção da aplicação.

Os comandos principais estão definidos no arquivo `package.json`:

```bash
npm run dev
npm run build
npm run preview
```

### Executar o projeto em ambiente de desenvolvimento

Dentro da pasta `html`, execute:

```bash
npm install
```

Depois:

```bash
npm run dev
```

O Vite iniciará um servidor local para visualização do projeto durante o desenvolvimento.

### Gerar a versão de produção

Para gerar os arquivos destinados à publicação:

```bash
npm run build
```

Os arquivos de produção são gerados na pasta:

```text
dist/
```

A pasta `dist/` é gerada automaticamente durante o processo de build e não faz parte do código-fonte principal versionado.

## Versionamento

O projeto utiliza Git para controle de versões e GitHub para hospedagem do repositório.

Foi utilizada uma organização baseada em branches para separar o desenvolvimento e as alterações relacionadas à etapa de versionamento.

Branches utilizadas no projeto:

* `main`: branch principal do projeto;
* `develop`: branch destinada ao desenvolvimento;
* `feature/versionamento`: branch utilizada para as alterações relacionadas à etapa de versionamento e preparação para publicação.

## Commits

Foram utilizados commits semânticos para identificar de forma clara o objetivo das alterações realizadas.

Exemplos:

```text
chore: inicializa projeto acolher
docs: adiciona documentação do projeto
feat: prepara projeto para deploy
```

## Release

Foi criada a tag:

```text
v1.0.0
```

A tag representa uma versão registrada do projeto.

## GitHub

O repositório do Projeto Acolher está disponível em:

https://github.com/bianca-medeiros-s/projeto-acolher

A versão final utilizada na etapa de preparação para deploy está registrada no commit:

```text
34515fb63395ae3dadae5567c6c168207738b946
```

Mensagem do commit:

```text
feat: prepara projeto para deploy
```

## Pull Requests

As alterações relacionadas à documentação foram organizadas por meio de Pull Request no GitHub.

O Pull Request #1, denominado:

```text
docs: adiciona documentação do projeto
```

foi utilizado para revisar a inclusão da documentação antes da integração das alterações.

## Issues e Milestones

Foi criada a Issue:

```text
Implementação do versionamento e documentação
```

para organizar as atividades relacionadas ao versionamento e à documentação do projeto.

Também foi criada a Milestone:

```text
EP IV - Versionamento e documentação
```

utilizada para agrupar e acompanhar as atividades dessa etapa.

## Deploy

O projeto foi preparado para publicação utilizando o Vite.

A configuração de build encontra-se no arquivo:

```text
html/vite.config.mjs
```

A configuração define as páginas HTML utilizadas na aplicação e o diretório de saída dos arquivos gerados para produção.

## Autor

Projeto desenvolvido como parte das atividades acadêmicas do curso de Análise e Desenvolvimento de Sistemas.
