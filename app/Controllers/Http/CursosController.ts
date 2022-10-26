/* eslint-disable @typescript-eslint/explicit-member-accessibility */
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Curso from 'App/Models/Curso'
import CursoValidator from 'App/Validators/CursoValidator'

export default class CursosController {
  // Ver todos os cursos
  async index() {
    return await Curso.query().select('*').preload('disciplinas')
  }
  // Criar um curso
  async store({ request }) {
    const dados = await request.validate(CursoValidator)
    return await Curso.create(dados)
  }
  // Ver um curso em específico
  async show({ request }) {
    const id = request.param('id')
    return await Curso.findOrFail(id)
  }
  // Deletar um curso
  async destroy({ request }) {
    const id = request.param('id')
    const curso = await Curso.findOrFail(id)

    return await curso.delete()
  }
  // Alterar um curso existente
  async update({ request }) {
    const id = request.param('id')
    const curso = await Curso.findOrFail(id)
    const dados = await request.validate(CursoValidator)

    curso.merge(dados)

    return await curso.save()
  }
}
