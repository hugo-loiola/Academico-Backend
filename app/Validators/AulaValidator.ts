import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AulaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    data: schema.date({ format: 'yyyy-MM-dd' }),

    conteudo: schema.string([rules.alpha({ allow: ['space'] })]),

    turma_id: schema.number([
      rules.unique({ table: 'turmas', column: 'id' }),
      rules.exists({ table: 'turmas', column: 'id' }),
    ]),
  })

  public messages: CustomMessages = {}
}
