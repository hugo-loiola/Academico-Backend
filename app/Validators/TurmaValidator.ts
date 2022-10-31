import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TurmaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([rules.alpha({ allow: ['space'] }), rules.maxLength(50)]),

    professor_id: schema.number([
      rules.exists({ table: 'professor', column: 'id' }),
      rules.unique({ table: 'professor', column: 'id' }),
    ]),

    semestre_id: schema.number([
      rules.exists({ table: 'semestre', column: 'id' }),
      rules.unique({ table: 'semestre', column: 'id' }),
    ]),

    disciplina_id: schema.number([
      rules.exists({ table: 'disciplina', column: 'id' }),
      rules.unique({ table: 'disciplina', column: 'id' }),
    ]),

    sala_id: schema.number([
      rules.exists({ table: 'sala', column: 'id' }),
      rules.unique({ table: 'sala', column: 'id' }),
    ]),

    turno: schema.string([rules.maxLength(1), rules.alpha()]),
  })

  public messages: CustomMessages = {}
}
