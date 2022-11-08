/* eslint-disable @typescript-eslint/explicit-member-accessibility */
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import TurmaAluno from 'App/Models/TurmaAluno'
import TurmaAlunoValidator from 'App/Validators/TurmaAlunoValidator'

export default class TurmaAlunosController {
  async index() {
    return await TurmaAluno.query()
  }
  async store({ request }) {
    const dados = await request.validate(TurmaAlunoValidator)
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
    const dados = await request.validate(TurmaAlunoValidator)

    turmaAlunos.merge(dados)

    return await turmaAlunos.save()
  }
}
