import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SemestreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([rules.alpha({ allow: ['space'] })]),

    data_inicio: schema.date({ format: 'yyyy-MM-dd' }),

    data_fim: schema.date({ format: 'yyyy-MM-dd' }),
  })

  public messages: CustomMessages = {}
}
