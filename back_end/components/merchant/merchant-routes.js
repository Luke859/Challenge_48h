import Router from '@koa/router'
import * as MerchantControllers from './merchant-controllers.js'
// import {isAuthenticated, isAuthenticatedWithUser } from '../../middlewares/jwt-handler.js'

const merchants = new Router()

merchants.get('/', MerchantControllers.index)
merchants.post('/', MerchantControllers.create)
merchants.put('/:id', MerchantControllers.update)
merchants.delete('/:id', MerchantControllers.destroy)
// isAuthenticated
// articles.get('/:id', isAuthenticated, TaskControllers.id)
// tasks.get('/lists/:listId', TaskControllers.getAllByList)
// isAuthenticatedWithUser,
// articles.put('/:id', isAuthenticated, TaskControllers.update)
// articles.del('/:id', isAuthenticated, TaskControllers.destroy)

export default merchants