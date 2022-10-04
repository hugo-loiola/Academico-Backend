/* eslint-disable @typescript-eslint/explicit-member-accessibility */
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Curso from "App/Models/Curso";

export default class CursosController {
  // Ver todos os cursos
  async index() {
    return await Curso.all();
  }
  // Criar um curso
  async store({ request }) {
    const dados = request.only(["nome", "duracao", "modalidade"]);
    return await Curso.create(dados);
  }
  // Ver um curso em específico
  async show({ request }) {
    const id = request.param("id");
    return await Curso.findOrFail(id);
  }
  // Deletar um curso
  async destroy({ request }) {
    const id = request.param("id");
    const curso = await Curso.findOrFail(id);

    return await curso.delete();
  }
  // Alterar um curso existente
  async update({ request }) {
    const id = request.param("id");
    const curso = await Curso.findOrFail(id); // Luxon dateTime is used

    return await curso.save();
  }
}
