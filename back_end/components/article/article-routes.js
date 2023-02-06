import Router from '@koa/router'
import * as ArticleControllers from './article-controllers.js'
// import {isAuthenticated, isAuthenticatedWithUser } from '../../middlewares/jwt-handler.js'

const articles = new Router()

articles.get('/', ArticleControllers.index)
articles.post('/', ArticleControllers.create)
// isAuthenticated
// articles.get('/:id', isAuthenticated, TaskControllers.id)
// tasks.get('/lists/:listId', TaskControllers.getAllByList)
// isAuthenticatedWithUser,
// articles.put('/:id', isAuthenticated, TaskControllers.update)
// articles.del('/:id', isAuthenticated, TaskControllers.destroy)

export default articles