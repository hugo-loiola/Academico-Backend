/* eslint-disable @typescript-eslint/explicit-member-accessibility */
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Aula from 'App/Models/Aula'
import AulaUpdateValidator from 'App/Validators/AulaUpdateValidator'
import AulaValidator from 'App/Validators/AulaValidator'

export default class AulasController {
  async index() {
    return await Aula.query().preload('chamada').preload('turma')
  }
  async store({ request }) {
    const dados = await request.validate(AulaValidator)
    return await Aula.create(dados)
  }
  async show({ request }) {
    const id = request.param('id')
    return await Aula.findOrFail(id)
  }
  async destroy({ request }) {
    const id = request.param('id')
    const aula = await Aula.findOrFail(id)

    return await aula.delete()
  }
  async update({ request }) {
    const id = request.param('id')
    const aula = await Aula.findOrFail(id)
    const dados = await request.validate(AulaUpdateValidator)

    aula.merge(dados)

    return await aula.save()
  }
}
