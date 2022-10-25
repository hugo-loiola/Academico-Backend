import { DateTime } from 'luxon'
import {
  BaseModel,
  BelongsTo,
  belongsTo,
  column,
  HasMany,
  hasMany,
  HasOne,
  hasOne,
  ManyToMany,
  manyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import Professor from './Professor'
import Disciplina from './Disciplina'
import Semestre from './Semestre'
import Aula from './Aula'
import TurmaAluno from './TurmaAluno'
import Sala from './Sala'
import Aluno from './Aluno'

export default class Turma extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public professorId: number

  @column()
  public semestreId: number

  @column()
  public disciplinaId: number

  @column()
  public salaId: number

  @column()
  public turno: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  @belongsTo(() => Sala)
  public sala: BelongsTo<typeof Sala>

  @hasOne(() => Professor)
  public professor: HasOne<typeof Professor>

  @belongsTo(() => Semestre)
  public semestre: BelongsTo<typeof Semestre>

  @hasMany(() => Aula)
  public aulas: HasMany<typeof Aula>

  @hasMany(() => Disciplina)
  public disciplina: HasMany<typeof Disciplina>

  @manyToMany(() => Aluno)
  public aluno: ManyToMany<typeof Aluno>
}
