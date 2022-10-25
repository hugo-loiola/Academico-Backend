/* eslint-disable @typescript-eslint/explicit-member-accessibility */
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import TurmaAluno from 'App/Models/TurmaAluno'

export default class TurmaAlunosController {
  async index() {
    return await TurmaAluno.query()
  }
  async store({ request }) {
    const dados = request.only(['turmaId', 'alunoId'])
    return await TurmaAluno.create(dados)
  }
  async show({ request }) {
    const id = request.param('id')
    return await TurmaAluno.findOrFail(id)
  }
  async destroy({ request }) {
    const id = request.param('id')
    const turmaAlunos = await TurmaAluno.findOrFail(id)

    return turmaAlunos.delete()
  }
  async update({ request }) {
    const id = request.param('id')
    const turmaAlunos = await TurmaAluno.findOrFail(id)
    const dados = request.only(['turmaId', 'alunoId'])

    turmaAlunos.merge(dados)

    return await turmaAlunos.save()
  }
}
