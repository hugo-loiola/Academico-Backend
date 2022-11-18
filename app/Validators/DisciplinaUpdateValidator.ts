import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class DisciplinaUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string.optional([
      rules.unique({ table: 'disciplinas', column: 'nome' }),
      rules.maxLength(50),
      rules.alpha(),
    ]),

    curso_id: schema.number([rules.exists({ table: 'cursos', column: 'id' })]),
  })

  public messages: CustomMessages = {
    'nome.unique': 'Disciplina tem que ser única',
    'nome.maxLength': 'Máximo de {{ options.maxLength }} caractéres atinjido!',
    'curso_id.exists': 'Curso não existe',
  }
}
