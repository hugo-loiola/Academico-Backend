# Meu Academico

## Estudo sobre `AdonisJS`

<br>

### Iniciar um projeto

    npm init adonis-ts-app@latest [nome]

### Iniciar o servidor de desenvolvimento

    node ace serve --watch

### Rota

```ts
Route.resource("/cursos", "CursosController").apiOnly();
```

### Criando um Controller.

    node ace make:controller [Nome]

### Controller

```ts
export default class RevisaosController {
  ex1({ request }) {
    const dados = request.body();
    if (dados.salario <= 2000) {
      const reajuste = 1.5;
      const newSal = dados.salario * reajuste;
      return { newSal };
    } else {
      const reajuste = 1.3;
      const newSal = dados.salario * reajuste;
      return { newSal };
    }
  }
}
```

### Controller com Model

```ts
import Curso from "App/Models/Curso";

export default class CursosController {
  // Ver todos os cursos
  async index() {
    return await Curso.all();
  }
  // Criar um curso
  async store({ request }) {
    const dados = request.only(["nome", "duracao", "modalidade"]);
    return await Curso.create(dados);
  }
  // Ver um curso em específico
  async show({ request }) {
    const id = request.param("id");
    return await Curso.findOrFail(id);
  }
  // Deletar um curso
  async destroy({ request }) {
    const id = request.param("id");
    const curso = await Curso.findOrFail(id);

    return await curso.delete();
  }
  // Alterar um curso existente
  async update({ request }) {
    const id = request.param("id");
    const curso = await Curso.findOrFail(id);
    const dados = request.only(["nome", "duracao", "modalidade"]);

    curso.merge(dados);

    return await curso.save();
  }
}
```

### Instalando o `lucid` para o baco de dados.

    npm i @adonisjs/lucid

### Configurando o `lucid`

    node ace configure @adonisjs/lucid

### Criar Model e Migration

    node ace make:model [nome] -m

### Código de uma migration

```ts
import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "disciplinas";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("nome", 50);
      table
        .integer("curso_id")
        .unsigned()
        .references("id")
        .inTable("cursos")
        .notNullable();

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
```

### Código de um Model

```ts
import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Curso extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public nome: string;

  @column()
  public duracao: number;

  @column()
  public modalidade: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
```

### Rodar as Migration

    node ace migration:run

### Voltar as Migration

    node ace migration:rollback
    ou
    node ace migration:refresh

### Voltar as Migration ao início

    node ace migration:reset

### Criar uma seeder

    node ace make:seeder [Nome]

### Código de uma seeder

```ts
import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Curso from "App/Models/Curso";

export default class extends BaseSeeder {
  public async run() {
    await Curso.createMany([
      { nome: "ADS", duracao: 5, modalidade: "p" },
      { nome: "Direito", duracao: 8, modalidade: "p" },
      { nome: "Cinema", duracao: 8, modalidade: "h" },
      { nome: "Medicina", duracao: 10, modalidade: "p" },
      { nome: "Gastronomia", duracao: 8, modalidade: "p" },
    ]);
    // Write your database queries inside the run method
  }
}
```

### Rodar uma seeder

    node ace db:seed
