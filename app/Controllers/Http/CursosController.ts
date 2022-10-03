/* eslint-disable @typescript-eslint/explicit-member-accessibility */
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Curso from "App/Models/Curso";

export default class CursosController {
  index() {
    return Curso.all();
  }
  store({ request }) {
    const dados = request.only(["nome", "duracao", "modalidade"]);
    return Curso.create(dados);
  }
  show({ request }) {
    const id = request.param("id");
    return Curso.findOrFail(id);
  }

  destroy(id) {}

  update({ request }) {}
}
