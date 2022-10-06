/* eslint-disable @typescript-eslint/explicit-member-accessibility */
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Aluno from "App/Models/Aluno";

export default class AlunosController {
  async index() {
    return await Aluno.all();
  }
  async store({ request }) {
    const dados = request.only([
      "nome",
      "cpf",
      "matricula",
      "salario",
      "email",
      "telefone",
      "cep",
      "logradouro",
      "complemento",
      "numero",
      "bairro",
    ]);
    return await Aluno.create(dados);
  }
  async show({ request }) {
    const id = request.param("id");
    return await Aluno.findOrFail(id);
  }
  async destroy({ request }) {
    const id = request.param("id");
    const aluno = await Aluno.findOrFail(id);

    return await aluno.delete();
  }
  async update({ request }) {
    const id = request.param("id");
    const aluno = await Aluno.findOrFail(id);
    const dados = request.only([
      "nome",
      "cpf",
      "matricula",
      "salario",
      "email",
      "telefone",
      "cep",
      "logradouro",
      "complemento",
      "numero",
      "bairro",
    ]);

    aluno.merge(dados);
    return await aluno.save();
  }
}
