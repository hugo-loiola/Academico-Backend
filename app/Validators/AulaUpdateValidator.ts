import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AulaUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    data: schema.date.nullableAndOptional({ format: 'yyyy-MM-dd' }),

    conteudo: schema.string.nullableAndOptional([
      rules.alpha({ allow: ['space'] }),
      rules.maxLength(255),
    ]),

    turma_id: schema.number.nullableAndOptional([
      rules.unique({ table: 'turmas', column: 'id' }),
      rules.exists({ table: 'turmas', column: 'id' }),
    ]),
  })

  public messages: CustomMessages = {
    'data': 'A formatação é 2020-05-07',
    'maxLength': 'O conteúdo tem um máximo de {{ options.maxLength }} caractéres',
    'turma_id.unique': 'Turma tem que ser única',
    'turma_id.exists': 'Turma tem que existir',
  }
}
