import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ChamadaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    aula_id: schema.number([
      rules.unique({ table: 'aulas', column: 'id' }),
      rules.exists({ table: 'aulas', column: 'id' }),
    ]),
    aluno_id: schema.number([
      rules.unique({ table: 'alunos', column: 'id' }),
      rules.exists({ table: 'alunos', column: 'id' }),
    ]),
    presenca: schema.string([rules.maxLength(1), rules.alpha()]),
  })

  public messages: CustomMessages = {}
}
