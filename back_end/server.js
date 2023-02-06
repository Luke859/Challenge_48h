import Koa from 'koa'
import './config/database.js'
import bodyParser from 'koa-bodyparser'
import API_router from './routes/index.js'
import cors from '@koa/cors'
import respond from 'koa-respond'

const app = new Koa()

app
.use(cors({origin : '*'}))
.use(bodyParser())
.use(respond())
.use(API_router.routes())
.use(API_router.allowedMethods())

app.listen(process.env.PORT, () => console.log(`Server is listening on PORT: ${process.env.PORT}`))
