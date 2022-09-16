/* eslint-disable @typescript-eslint/explicit-member-accessibility */
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Turma from 'App/Models/Turma'

export default class TurmasController {
  index (){
    return Turma.all()
  }
  store ({request}){
    const dados = request.only([
      'nome',
      'professorId',
      'semestreId',
      'disciplinaId',
      'salaId',
      'turno',
    ])
    return Turma.createMany(dados)
  }
}
