# Revisao_BackEnd

## Meu estudo sobre `AdonisJS`.

### Iniciar um projeto.

    npm init adonis-ts-app@latest [nome]

### Start o servidor de desenvolvimento.

    node ace serve --watch

### Criando um Controller.

    node ace make:controller [Nome]

### Instalando o `lucid` para o baco de dados.

    npm i @adonisjs/lucid

### Configurando o `lucid`.

    node ace configure @adonisjs/lucid

### Criar Model e Migration

    node ace make:model [nome] -m

### Rodar as Migration

    node ace migration:run

### Voltar as Migration

    node ace migration:rollback

### Voltar as Migration ao início

    node ace migration:reset

### Criar uma seeder

    node ace make:seeder [Nome]

### Rodar uma seeder

    node ace db:seed
