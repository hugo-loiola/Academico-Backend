import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Curso from 'App/Models/Curso'

export default class extends BaseSeeder {
  public async run() {
    await Curso.createMany([
      { nome: 'ADS', duracao: 5, modalidade: 'p' },
      { nome: 'Direito', duracao: 8, modalidade: 'p' },
      { nome: 'Cinema', duracao: 8, modalidade: 'h' },
      { nome: 'Medicina', duracao: 10, modalidade: 'p' },
      { nome: 'Gastronomia', duracao: 8, modalidade: 'p' },
    ])
    // Write your database queries inside the run method
  }
}
