import Router from '@koa/router'
import * as CategoryControllers from './category-controllers.js'
// import {isAuthenticated, isAuthenticatedWithUser } from '../../middlewares/jwt-handler.js'

const categories = new Router()

categories.get('/', CategoryControllers.index)
categories.post('/', CategoryControllers.create)
categories.put('/:id', CategoryControllers.update)
categories.delete('/:id', CategoryControllers.destroy)
// isAuthenticated
// articles.get('/:id', isAuthenticated, TaskControllers.id)
// tasks.get('/lists/:listId', TaskControllers.getAllByList)
// isAuthenticatedWithUser,
// articles.put('/:id', isAuthenticated, TaskControllers.update)
// articles.del('/:id', isAuthenticated, TaskControllers.destroy)

export default categories