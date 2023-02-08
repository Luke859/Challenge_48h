import BasketModel from './basket-model.js'
import Joi from 'joi'

export async function index (ctx) {
  try {
    const user = await BasketModel.find({})
    ctx.ok(user)
  } catch (e) {
    ctx.badRequest({ message: e.message })
  }
}

export async function id (ctx) {
  try {
    if(!ctx.params.id) throw new Error('No id supplied')
    const user = await BasketModel.findById(ctx.params.id)
    if(!user) { return ctx.notFound() }
    ctx.ok(user)
  } catch (e) {
    ctx.badRequest({ message: e.message })
  }
}

export async function create (ctx) {
  try {
    // if(!ctx.state.user.id) throw new Error('No user id found')
    const basketValidate = Joi.object({
      basket_user: Joi.string().required(),
      basket_article: Joi.string().required(),
    })
    const { error, value } = basketValidate.validate(ctx.request.body)
    if(error) throw new Error(error)
    const newTask = await BasketModel.create({...value})
    ctx.ok("Category updated")
    ctx.ok(newTask)
  } catch (e) {
    ctx.badRequest({ message: e.message })
  }
}

export async function update (ctx) {
  try {
    const basketValidate = Joi.object({
      basket_user: Joi.string(),
      basket_article: Joi.string()
    })
    if(!ctx.params.id) throw new Error('No id supplied')
    const { error, value } = basketValidate.validate(ctx.request.body)
    if(error) throw new Error(error)
    const updatedTask = await BasketModel.findOneAndUpdate(ctx.params.id, value)
    if(!updatedTask) { 
      return ctx.send(401) 
    }
    ctx.ok("Category updated")
  } catch (e) {
    ctx.badRequest({ message: e.message })
  }
}

export async function destroy (ctx) {
  try {
    if(!ctx.params.id) throw new Error('No id supplied')
    const taskDelete = await BasketModel.findOneAndDelete(ctx.params.id)
    if(!taskDelete) { 
      return ctx.send(401) 
    }
    ctx.ok('Category deleted')
  } catch (e) {
    ctx.badRequest({ message: e.message })
  }
}

