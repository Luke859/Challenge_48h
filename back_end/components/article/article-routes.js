import Router from '@koa/router'
import * as ArticleControllers from './article-controllers.js'
// import {isAuthenticated, isAuthenticatedWithUser } from '../../middlewares/jwt-handler.js'

const articles = new Router()

articles.get('/', ArticleControllers.index)
articles.get('/category/:categoryId', ArticleControllers.getAllByCategory)
articles.post('/', ArticleControllers.create)
articles.put('/:id', ArticleControllers.update)
articles.delete('/:id', ArticleControllers.destroy)
// isAuthenticated
// articles.get('/:id', isAuthenticated, TaskControllers.id)
// tasks.get('/lists/:listId', TaskControllers.getAllByList)
// isAuthenticatedWithUser,
// articles.put('/:id', isAuthenticated, TaskControllers.update)
// articles.del('/:id', isAuthenticated, TaskControllers.destroy)

export default articles