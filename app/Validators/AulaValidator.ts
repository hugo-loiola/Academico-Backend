import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AulaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    data: schema.date({ format: 'yyyy-MM-dd' }),

    conteudo: schema.string([rules.alpha({ allow: ['space'] }), rules.maxLength(255)]),

    turma_id: schema.number([
      rules.unique({ table: 'turmas', column: 'id' }),
      rules.exists({ table: 'turmas', column: 'id' }),
    ]),
  })

  public messages: CustomMessages = {
    'data': 'A formatação é 2020-05-07',
    'maxLength': 'O conteúdo tem um máximo de 255 caractéres',
    'turma_id.unique': 'Turma tem que ser única',
    'turma_id.exists': 'Turma tem que existir',
  }
}
