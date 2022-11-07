// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'

export default class UsersController {
  async store({ request }) {
    const dados = request.only(['email', 'password'])
    return await User.create(dados)
  }
}
