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
  ```
  docker-compose up -d
  ``` 
2. Instalar todas as dependencias ou instalar da workspace específica
  ```
  yarn
  yarn backend install
  yarn frontend install
  ```
3. Rodar todas as migrations
  ```
  yarn backend knex migrate:latest
  ```
  
  
4. Voltar alguma migration
  
  ```
  yarn backend knex migrate:down
  ```
   
5. Rodar o frontend
  
  ```
  yarn frontend start
  ```