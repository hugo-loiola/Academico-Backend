/* eslint-disable @typescript-eslint/explicit-member-accessibility */
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Aluno from 'App/Models/Aluno'

export default class AlunosController {
  index (){
    return Aluno.all()
  }
  store ({request}){
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
    return Aluno.createMany(dados)
  }
}
