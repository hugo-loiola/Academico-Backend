import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AlunoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([rules.alpha(), rules.maxLength(100)]),

    cpf: schema.number.optional([rules.unique({ table: 'alunos', column: 'id' })]),

    matricula: schema.string([
      rules.unique({
        column: 'matricula',
        table: 'alunos',
      }),
      rules.alphaNum(),
      rules.maxLength(20),
    ]),

    email: schema.string.optional([
      rules.email(),
      rules.unique({ table: 'alunos', column: 'email' }),
      rules.maxLength(100),
    ]),

    telefone: schema.string.optional([
      rules.regex(/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/),
      rules.mobile({ locale: ['pt-BR'] }),
      rules.unique({ table: 'alunos', column: 'telefone' }),
    ]),

    cep: schema.string.optional([rules.regex(/[0-9]{5}-[\d]{3}/)]),

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
