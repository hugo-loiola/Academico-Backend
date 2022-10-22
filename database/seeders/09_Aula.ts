import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Aula from 'App/Models/Aula'

export default class extends BaseSeeder {
  public async run() {
    await Aula.createMany([
      {
        data: new Date(2020, 1, 1),
        conteudo: 'bla bla bla bla bla bla bla bla bla bla bla bla ',
        turmaId: 1,
      },
    ])
    // Write your database queries inside the run method
  }
}
