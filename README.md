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
6. Criar um admin
  - Por padrão já tem um usuário admin com valores padrões. É só gerar ele.

### API rotas

- Usuários
  1. Create
  ```
  POST /user/create

  tem que ser passado na body:
    - fullname
    - cpf
    - birthdate
    - cep
    - address
    - city
    - uf
  ```
  
    
  2. Read
  ```
  GET /user/list
  GET /user/list/:userId
  ```
  
  3. Update
  ```
  PUT /user/update/:userId
  ```
  
  4. Delete
  ```
  DELETE /user/delete
  DELETE /user/delete/:userId
  ```

- Livros
  1. Create
  ```
  POST /book/create

  tem que ser passado na body:
    - title
    - author
    - isbn
    - copy_code
  ```
  2. Read
  ```
  GET /book/list
  GET /book/list/:copy_code
  ```
  3. Update
  ```
  PUT /book/update/:bookId
  ```

  4. Delete
  ```
  DELETE /book/delete/:bookId
  ```

- Cópias
  1. Create
  ```
  POST /copy/create

  tem que ser passado na body:
    - copy_code
  ```
  2. Read
  ```
  GET /copy/list
  ```
  3. Update
  ```
  PUT /copy/update/:copyId
  ```
  4. Delete
  ```
  DELETE /copy/delete/:copyId
  ```

- Autenticação
  1. Login
  ```
  POST /login

  tem que ser passado na body:
    - cpf
    - copy_code
  ```