/* eslint-disable @typescript-eslint/explicit-member-accessibility */
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Chamada from 'App/Models/Chamada'

export default class ChamadasController {
  async index() {
    return await Chamada.query().preload('aula')
  }
  async store({ request }) {
    const dados = request.only(['aulaId', 'alunoId', 'presenca'])
    return await Chamada.create(dados)
  }
  async show({ request }) {
    const id = request.param('id')
    return await Chamada.findOrFail(id)
  }
  async destroy({ request }) {
    const id = request.param('id')
    const chamada = await Chamada.findOrFail(id)

    return await chamada.delete()
  }
  async update({ request }) {
    const id = request.param('id')
    const chamada = await Chamada.findOrFail(id)
    const dados = request.only(['aulaId', 'alunoId', 'presenca'])

    chamada.merge(dados)

    return await chamada.save()
  }
}
