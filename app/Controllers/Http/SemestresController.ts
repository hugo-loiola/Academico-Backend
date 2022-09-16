/* eslint-disable @typescript-eslint/explicit-member-accessibility */
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Semestre from 'App/Models/Semestre'

export default class SemestresController {
  index (){
    return Semestre.all()
  }
  store ({request}){
    const dados = request.only('nome', 'dataInicio', 'dataFim')
    return Semestre.createMany(dados)
  }
}
