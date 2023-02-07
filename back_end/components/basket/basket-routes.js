import Router from '@koa/router'
import * as BasketControllers from './basket-controllers.js'
// import {isAuthenticated, isAuthenticatedWithUser } from '../../middlewares/jwt-handler.js'

const baskets = new Router()

baskets.get('/', BasketControllers.index)
baskets.post('/', BasketControllers.create)
baskets.put('/:id', BasketControllers.update)
baskets.delete('/:id', BasketControllers.destroy)
// isAuthenticated
// articles.get('/:id', isAuthenticated, TaskControllers.id)
// tasks.get('/lists/:listId', TaskControllers.getAllByList)
// isAuthenticatedWithUser,
// articles.put('/:id', isAuthenticated, TaskControllers.update)
// articles.del('/:id', isAuthenticated, TaskControllers.destroy)

export default baskets