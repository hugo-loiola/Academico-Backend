import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Professor from 'App/Models/Professor'

export default class extends BaseSeeder {
  public async run () {
    await Professor.createMany([
      {
        nome: 'Ricardão',
        cpf: 123456789,
        matricula:'123456789',
        salario: 5000,
        email: 'ricardao@gmail.com',
        telefone: '61999999',
        cep: 133345,
        logradouro: 'ceilandia',
        complemento:'norte',
        numero: '12',
        bairro: 'morrão',
      },
    ])
    // Write your database queries inside the run method
  }
}
