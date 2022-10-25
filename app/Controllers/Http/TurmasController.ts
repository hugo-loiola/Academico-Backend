/* eslint-disable @typescript-eslint/explicit-member-accessibility */
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Turma from 'App/Models/Turma'

export default class TurmasController {
  async index() {
    return await Turma.query()
      .preload('professores')
      .preload('semestre')
      .preload('disciplina')
      .preload('sala')
  }
  async store({ request }) {
    const dados = request.only([
      'nome',
      'professorId',
      'semestreId',
      'disciplinaId',
      'salaId',
      'turno',
    ])
    return await Turma.create(dados)
  }
  async show({ request }) {
    const id = request.param('id')
    return await Turma.findOrFail(id)
  }
  async destroy({ request }) {
    const id = request.param('id')
    const turma = await Turma.findOrFail(id)

    return turma.delete()
  }
  async update({ request }) {
    const id = request.param('id')
    const turma = await Turma.findOrFail(id)
    const dados = request.only([
      'nome',
      'professorId',
      'semestreId',
      'disciplinaId',
      'salaId',
      'turno',
    ])

    turma.merge(dados)

    return await turma.save()
  }
}
