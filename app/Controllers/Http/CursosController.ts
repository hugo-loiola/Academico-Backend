/* eslint-disable @typescript-eslint/explicit-member-accessibility */
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CursosController {
  index() {
  }

  store() {
    const dados = { nome: 'ADS', duracao: 2, modalidade: 'p' }
    return dados
  }
}
