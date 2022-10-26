import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CursoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string({}, [rules.alpha()]),
    duracao: schema.number.optional(),
    modalidade: schema.string({}, [rules.alpha()]),
  })

  public messages: CustomMessages = {}
}
