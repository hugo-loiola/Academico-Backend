import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TurmaValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
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

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {}
}
