/* eslint-disable @typescript-eslint/explicit-member-accessibility */
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Aula from 'App/Models/Aula'

export default class AulasController {
  async index() {
    return await Aula.query().preload('chamada').preload('turma')
  }
  async store({ request }) {
    const dados = request.only(['data', 'conteudo'])
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
    const dados = request.only(['data', 'conteudo'])

    aula.merge(dados)

    return await aula.save()
  }
}
