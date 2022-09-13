import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Disciplina from 'App/Models/Disciplina'

export default class extends BaseSeeder {
  public async run() {
    await Disciplina.createMany([
      { nome: 'Backend', cursoId: 1 },
      { nome: 'Frontend', cursoId: 1 },
      { nome: 'Mobile', cursoId: 1 },
    ])

    // Write your database queries inside the run method
  }
}
