import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run() {
    await User.create({ email: 'test@example.com', password: 'test' })
    // Write your database queries inside the run method
  }
}
