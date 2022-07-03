### Sistema de Controle de Aluguel


### Tecnologias usadas

- PostgreSQL
- Docker
- NodeJS
- JWT
- ReactJS
- Styled-components
- TypeORM -> Knex
- UUID
- Express
- DOTENV
- Typescript

### Comandos Basicos para o projeto

1. Iniciar o servico do banco de dados
  <br/> 
  `docker-compose up -d`
2. Instalar todas as dependencias
  <br/> 
  `yarn`
  <br/>
  `yarn backend install`
  <br/> 
  `yarn frontend install`
3. Rodar todas as migrations
  <br />
  `yarn backend knex migrate:latest `

4. Voltar alguma migrations
  <br/>
  `yarn backend knex migrate:down`

5. Rodar o frontend
  <br />
  `yarn frontend start`