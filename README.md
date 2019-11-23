# StarterNodeJS

## :rocket: Sobre o desafio relacionados ao NodeJs

<p>API REST com Docker utilizando o container do mongodb ,usando mongoose para modelar o mongodb
e utilizando o Robo3t para visualizar os dados registrado no banco de dados não relacional.
<br>Usando insomnia para testa a API.
<br>Utilizando CRUD que são as quatro operações básicas (criação, consulta, atualização e destruição de dados).</p>

## Startando a API

### Iniciando o container
```$ docker start mongodb```

### Rodando o servidor
```$ yarn dev```

### Ferramentas Utilizadas 

<ul><li>-> Express - microframework [Ajuda agente trabalhar com rotas e views]
    <li>-> Nodemon - Servidor que vai monitorar e reiniciar quando mudanças forem identificadas.
    <li>-> Insomnia - cliente REST 
    <li>-> Docker -  Possibilita o empacotamento de uma aplicação ou ambiente inteiro dentro de um container.
    <li>-> MongoDb - é um banco de dados orientado a documentos (document database) no formato JSON, ou seja,
diferente de um banco de dados relacional, ele não possui como restrição a necessidade de ter as tabelas e colunas
criadas previamente, permitindo que um documento represente toda a informação necessária, com todos os dados que você
queira, no formato de um JSON.
    <li>-> Mongoose - é uma ferramenta de modelagem de objeto MongoDB projetada para funcionar em um ambiente assíncrono.
    <li>-> ORM -> Encapsula a lógica das operações do banco de dados através do código, invés de usar a linguagem do banco de dados,
    será utilizado apenas js
    <li>-> Require-dir - Auxilia no require.
    <li>-> mongoose-paginate - Plug-in de paginação.
    <li>-> Robo3t - verifica se os dados estão sendo persistidos no banco , 
            é um software gratuito multiplataforma para gerenciamento de banco de dados MongoDB de forma gráfica.
    <li>-> CORS - [Cross-Origin Resource Sharing] quando implementado pelo navegador, 
          permite que um site acesse recursos de outro site mesmo estando em domínios diferentes.
