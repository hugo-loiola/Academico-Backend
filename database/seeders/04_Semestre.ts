import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Semestre from 'App/Models/Semestre'

export default class extends BaseSeeder {
  public async run () {
    await Semestre.createMany([
      {nome: 'a1', dataFim: new Date(2020,12,31), dataInicio: new Date(2020,6,1)},
    ])
    // Write your database queries inside the run method
  }
}
