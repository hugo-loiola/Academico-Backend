/* eslint-disable @typescript-eslint/explicit-member-accessibility */
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Curso from 'App/Models/Curso'

export default class CursosController {
  index () {
    return Curso.all()
  }
  hugo (){
    return 456
  }
}
