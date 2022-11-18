import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CursoUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([
      rules.alpha(),
      rules.maxLength(50),
      rules.unique({ table: 'cursos', column: 'nome' }),
    ]),
    duracao: schema.number.optional([rules.range(1, 5)]),
    modalidade: schema.string([rules.alpha(), rules.maxLength(1)]),
  })

  public messages: CustomMessages = {
    maxLength: 'o número máximo de caractéres do campo {{ field }} é de {{ options.maxLength }}',
    range: '{{ field }} tem que ser entre {{ options.range }}',
    unique: '{{field}} tem que ser único',
  }
}
