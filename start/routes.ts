/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.resource('/curso', 'CursosController').apiOnly()
Route.resource('/disciplina', 'DisciplinasController').apiOnly()
Route.resource('/sala', 'SalasController').apiOnly()
Route.resource('/semestre', 'SemestresController').apiOnly()
Route.resource('/professor', 'ProfessorsController').apiOnly()
Route.resource('/aluno', 'AlunosController').apiOnly()
Route.resource('/turma', 'TurmasController').apiOnly()
Route.resource('/turma_aluno', 'TurmaAlunosController').apiOnly()
Route.resource('/aula', 'AulasController').apiOnly()
Route.resource('/chamada', 'ChamadasController').apiOnly()
