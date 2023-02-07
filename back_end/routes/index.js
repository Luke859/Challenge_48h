import userRoutes from '../components/user/user-routes.js';
import articleRoutes from '../components/article/article-routes.js';
import categoryRoutes from '../components/category/category-routes.js';
import merchantRoutes from '../components/merchant/merchant-routes.js';
import basketRoutes from '../components/basket/basket-routes.js';
import Router from '@koa/router'

const API_Router = new Router({prefix: '/api'})

API_Router
.use('/users', userRoutes.routes(), userRoutes.allowedMethods())
.use('/articles', articleRoutes.routes(), articleRoutes.allowedMethods())
.use('/categories', categoryRoutes.routes(), categoryRoutes.allowedMethods())
.use('/merchants', merchantRoutes.routes(), merchantRoutes.allowedMethods())
.use('/baskets', basketRoutes.routes(), basketRoutes.allowedMethods())

export default API_Router