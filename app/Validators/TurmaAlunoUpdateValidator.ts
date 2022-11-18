import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TurmaAlunoUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    turma_id: schema.number([
      rules.exists({ table: 'turmas', column: 'id' }),
      rules.unique({ table: 'turmas', column: 'id' }),
    ]),

    aluno_id: schema.number([
      rules.exists({ table: 'turmas', column: 'id' }),
      rules.unique({ table: 'turmas', column: 'id' }),
    ]),
  })

  public messages: CustomMessages = {
    unique: '{{ field }} tem que ser único',
    exists: '{{ field }} tem que existir',
  }
}
