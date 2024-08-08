# T-Alpha Interview
This repositoty contains a authentication system and a CRUD of products

###

## Como rodar o projeto

Clone o repositório:
```bash
    git clone https://github.com/matheusmartinsviana/t-alpha-interview.git
```

Abra a pasta do projeto no terminal: 
```bash
    cd t-alpha-interview
```

Faça a instalação dos pacotes e dependências:
```bash
    npm install
```

Após a instalação de pacotes e dependências do projeto no terminal, digite:
```bash
    npm run dev
```

Abra o seu navegador e cole o link:
```bash
    http://localhost:5173/
```

##  Estrutura de Pastas

```bash
    /src/: Contém as arquivos do projeto
```
```bash
    /src/components: Responsável pelos componentes reutilizaveis da aplicação
```
```bash
    /src/layout: Definer a estrutura da aplicação com a navbar em uma posição e onde fica o Body da minha aplicação
```
```bash
    /src/pages: Contém as páginas do projeto
```
```bash
    /src/routes: Contém o arquivo de rotas com a definição de cada rota e oque será renderizado
```
```bash
    /src/utils: Utilizado armazenar as funções como: os Regex para inputs
```

## Frameworks e Bibliotecas Utilizadas

- <a href="https://reactrouter.com/en/main">React Router Dom</a>: Usado para possibilitar o sistemas de rotas dentro da minha aplicação e renderização dinâmica de elementos.
- <a href="https://vitejs.dev/">Vite</a>: Escolhido pela velocidade de build e por ter o sistema de live reloading então sempre tenho a visão ao vivo do meu projeto dentro no navegador.
- <a href="https://vitejs.dev/">React.js</a>: O react traz mais agilidade para o desenvolvimento front-end e também junto a um desenvolvimento otimizado traz um desempenho superior com a possibilidade de renderização de componentes.

## Sistema de autenticação
- localStorage: Foi utilizado o localStorage pela questão de facíl aplicabilidade.
- Melhorias futuras: Uso de sessions com react.js, principalmente por utilizar o <strong>cliente-side-sessions</strong> onde conseguimos ter mais segurança na aplicação.
- <strong>useNavigation:</strong> Como a versão inicial da aplicação está sendo utilizado o localStorage basta eu verificar se há "token" que foi criado pelo back-end após o login, obviamente não é uma das melhores práticas de segurança mas com essa solução eu posso direcionar e quais páginas estão públicas (não há necessidade de um "token" para acessa-las) ou se estão privadas (sempre direcionando pro login se não houver um "token").

## Linkedin

<a href="https://www.linkedin.com/in/matheusmartinsviana/">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
    Matheus Martins Viana - Desenvolvedor Node.js | React.js
</a>
