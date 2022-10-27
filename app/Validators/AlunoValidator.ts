import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AlunoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([rules.alpha()]),

    cpf: schema.number.optional(),

    matricula: schema.string([
      rules.unique({
        column: 'matricula',
        table: 'alunos',
      }),
    ]),

    email: schema.string.optional([
      rules.email(),
      rules.unique({ table: 'alunos', column: 'email' }),
    ]),

    telefone: schema.string.optional(),

    cep: schema.number.optional(),

    logadouro: schema.string.optional(),

    complemento: schema.string.optional(),

    numero: schema.string.optional([
      rules.unique({
        column: 'numero',
        table: 'alunos',
      }),
    ]),

    bairro: schema.string.optional(),
  })

  public messages: CustomMessages = {}
}
