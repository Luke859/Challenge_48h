import userRoutes from '../components/user/user-routes.js';
import articleRoutes from '../components/article/article-routes.js';
import Router from '@koa/router'

const API_Router = new Router({prefix: '/api'})

API_Router
.use('/users', userRoutes.routes(), userRoutes.allowedMethods())
.use('/articles', articleRoutes.routes(), articleRoutes.allowedMethods())

export default API_Router