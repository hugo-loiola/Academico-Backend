/* eslint-disable @typescript-eslint/explicit-member-accessibility */
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Chamada from 'App/Models/Chamada'

export default class ChamadasController {
  index (){
    return Chamada.all()
  }
  store ({request}){
    const dados = request.only(['aulaId', 'alunoId', 'presenca'])
    return Chamada.createMany(dados)
  }
}
