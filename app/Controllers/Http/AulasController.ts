/* eslint-disable @typescript-eslint/explicit-member-accessibility */
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Aula from 'App/Models/Aula'

export default class AulasController {
  index (){
    return Aula.all()
  }
  store ({request}){
    const dados = request.only(['data', 'conteudo'])
    return Aula.createMany(dados)
  }
}
