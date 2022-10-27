import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AlunoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([rules.alpha(), rules.maxLength(100)]),

    cpf: schema.number.optional([rules.minLength(15), rules.maxLength(15)]),

    matricula: schema.string([
      rules.unique({
        column: 'matricula',
        table: 'alunos',
      }),
      rules.alphaNum(),
      rules.minLength(20),
      rules.maxLength(20),
    ]),

    email: schema.string.optional([
      rules.email(),
      rules.unique({ table: 'alunos', column: 'email' }),
      rules.maxLength(100),
    ]),

    telefone: schema.number.optional([rules.maxLength(15), rules.minLength(15)]),

    cep: schema.number.optional(),

    logadouro: schema.string.optional([rules.alpha(), rules.maxLength(100)]),

    complemento: schema.string.optional([rules.maxLength(100), rules.alpha()]),

    numero: schema.string.optional([
      rules.unique({
        column: 'numero',
        table: 'alunos',
      }),
      rules.alphaNum(),
      rules.maxLength(120),
    ]),

    bairro: schema.string.optional([rules.alpha(), rules.maxLength(120)]),
  })

  public messages: CustomMessages = {}
}
