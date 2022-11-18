import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SalaUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([
      rules.maxLength(50),
      rules.alpha({ allow: ['space', 'underscore', 'dash'] }),
    ]),

    capacidade: schema.number.optional([rules.range(1, 50)]),

    tipo: schema.string([rules.maxLength(1), rules.alpha()]),
  })

  public messages: CustomMessages = {
    maxLength: 'o número máximo de caractéres do campo {{ field }} é de {{ options.maxLength }}',
    range: '{{ field }} tem que ser entre {{ options.range }}',
  }
}
