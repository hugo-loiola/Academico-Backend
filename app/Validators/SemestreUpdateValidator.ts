import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SemestreUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string.nullableAndOptional([
      rules.alpha({ allow: ['space'] }),
      rules.maxLength(30),
    ]),

    data_inicio: schema.date.nullableAndOptional({ format: 'yyyy-MM-dd' }),

    data_fim: schema.date.nullableAndOptional({ format: 'yyyy-MM-dd' }),
  })

  public messages: CustomMessages = {
    'maxLength': 'o número máximo de caractéres do campo {{ field }} é de {{ options.maxLength }}',
    'date.format': '{{ field }} tem que ser formatado como {{ options.format }}',
  }
}
