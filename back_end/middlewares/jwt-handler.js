import koaJWT from 'koa-jwt'
import UserModel from './../components/user/user-model.js'
import compose from 'koa-compose'

export const isAuthenticated = koaJWT({
  secret: process.env.JWT_SECRET
})

export const resolveUserFromJWT = async function (ctx, next) {
  try {
    const user = await UserModel.findById(ctx.state.user.id)
    ctx.state.user = user
    return next()
  } catch (e) {
    ctx.unauthorized({ message: e.message })
  }
}

export const isAuthenticatedWithUser = compose([isAuthenticated, resolveUserFromJWT])
