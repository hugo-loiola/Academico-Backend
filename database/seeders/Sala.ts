import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Sala from 'App/Models/Sala'

export default class extends BaseSeeder {
  public async run() {
    await Sala.createMany([
      { nome: 'sala1', capacidade: 40, tipo: 'p' },
    ])
    // Write your database queries inside the run method
  }
}
