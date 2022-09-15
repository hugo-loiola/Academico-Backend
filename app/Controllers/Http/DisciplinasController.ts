/* eslint-disable @typescript-eslint/explicit-member-accessibility */
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Disciplina from 'App/Models/Disciplina'

export default class DisciplinasController {
  index (){
    return Disciplina.all()
  }
  store ({request}){
    const dados = request.only(['nome', 'cursoId'])
    return Disciplina.create(dados)
  }
}
