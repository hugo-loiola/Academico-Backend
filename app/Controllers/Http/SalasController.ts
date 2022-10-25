/* eslint-disable @typescript-eslint/explicit-member-accessibility */
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Sala from 'App/Models/Sala'

export default class SalasController {
  async index() {
    return await Sala.query().preload('turmas')
  }
  async store({ request }) {
    const dados = request.only(['nome', 'capacidade', 'tipo'])
    return await Sala.create(dados)
  }
  async show({ request }) {
    const id = request.param('id')
    return await Sala.findOrFail(id)
  }
  async destroy({ request }) {
    const id = request.param('id')
    const sala = await Sala.findOrFail(id)

    return sala.delete()
  }
  async update({ request }) {
    const id = request.param('id')
    const sala = await Sala.findOrFail(id)
    const dados = request.only(['nome', 'capacidade', 'tipo'])

    sala.merge(dados)

    return sala.save()
  }
}
