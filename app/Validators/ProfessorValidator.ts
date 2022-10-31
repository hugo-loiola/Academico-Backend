import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProfessorValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([rules.alpha({ allow: ['space'] }), rules.maxLength(100)]),

    cpf: schema.string([rules.regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/)]),

    matricula: schema.string([
      rules.alphaNum({ allow: ['space', 'dash', 'underscore'] }),
      rules.maxLength(20),
    ]),

    salario: schema.number.optional([rules.range(1, 10000)]),

    email: schema.string.optional([rules.email(), rules.maxLength(100)]),

    telefone: schema.string.optional([
      rules.mobile({ locale: ['pt-BR'] }),
      rules.regex(/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/),
    ]),

    cep: schema.number.optional([rules.regex(/[0-9]{5}-[\d]{3}/)]),

    logradouro: schema.string.optional([rules.maxLength(100), rules.alpha({ allow: ['space'] })]),

    complemento: schema.string.optional([rules.maxLength(100), rules.alpha({ allow: ['space'] })]),

    numero: schema.number.optional([rules.range(1, 10000)]),

    bairro: schema.string.optional([rules.maxLength(100), rules.alpha({ allow: ['space'] })]),
  })

  public messages: CustomMessages = {}
}
