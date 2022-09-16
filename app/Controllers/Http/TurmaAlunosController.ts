/* eslint-disable @typescript-eslint/explicit-member-accessibility */
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import TurmaAluno from 'App/Models/TurmaAluno'

export default class TurmaAlunosController {
  index (){
    return TurmaAluno.all()
  }
  store ({request}){
    const dados = request.only(['turmaId', 'alunoId'])
    return TurmaAluno.createMany(dados)
  }
}
