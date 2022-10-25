/* eslint-disable @typescript-eslint/explicit-member-accessibility */
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Professor from 'App/Models/Professor'

export default class ProfessorsController {
  async index() {
    return await Professor.query().preload('turmas')
  }
  async store({ request }) {
    const dados = request.only([
      'nome',
      'cpf',
      'matricula',
      'salario',
      'email',
      'telefone',
      'cep',
      'logradouro',
      'complemento',
      'numero',
      'bairro',
    ])
    return await Professor.create(dados)
  }
  async show({ request }) {
    const id = request.param('id')
    return await Professor.findOrFail(id)
  }
  async destroy({ request }) {
    const id = request.param('id')
    const professor = await Professor.findOrFail(id)
    return await professor.delete()
  }
  async update({ request }) {
    const id = request.param('id')
    const professor = await Professor.findOrFail(id)
    const dados = request.only([
      'nome',
      'cpf',
      'matricula',
      'salario',
      'email',
      'telefone',
      'cep',
      'logradouro',
      'complemento',
      'numero',
      'bairro',
    ])

    professor.merge(dados)

    return await professor.save()
  }
}
