import MerchantModel from './merchant-model.js'
import Joi from 'joi'

export async function index (ctx) {
  try {
    const user = await MerchantModel.find({})
    ctx.ok(user)
  } catch (e) {
    ctx.badRequest({ message: e.message })
  }
}

export async function id (ctx) {
  try {
    if(!ctx.params.id) throw new Error('No id supplied')
    const user = await MerchantModel.findById(ctx.params.id)
    if(!user) { return ctx.notFound() }
    ctx.ok(user)
  } catch (e) {
    ctx.badRequest({ message: e.message })
  }
}

export async function create (ctx) {
  try {
    // if(!ctx.state.user.id) throw new Error('No user id found')
    const merchantValidate = Joi.object({
      brand: Joi.string().required(),
      logo: Joi.string().required()
    })
    const { error, value } = merchantValidate.validate(ctx.request.body)
    if(error) throw new Error(error)
    const newTask = await MerchantModel.create({...value})
    ctx.ok("Merchant created")
    ctx.ok(newTask)
  } catch (e) {
    ctx.badRequest({ message: e.message })
  }
}

export async function update (ctx) {
  try {
    const merchantValidate = Joi.object({
      brand: Joi.string(),
      logo: Joi.string()
    })
    if(!ctx.params.id) throw new Error('No id supplied')
    const { error, value } = merchantValidate.validate(ctx.request.body)
    if(error) throw new Error(error)
    const updatedTask = await MerchantModel.findOneAndUpdate(ctx.params.id, value)
    if(!updatedTask) { 
      return ctx.send(401) 
    }
    ctx.ok("Merchant updated")
  } catch (e) {
    ctx.badRequest({ message: e.message })
  }
}

export async function destroy (ctx) {
  try {
    if(!ctx.params.id) throw new Error('No id supplied')
    const taskDelete = await MerchantModel.findOneAndDelete(ctx.params.id)
    if(!taskDelete) { 
      return ctx.send(401) 
    }
    ctx.ok('Merchant deleted')
  } catch (e) {
    ctx.badRequest({ message: e.message })
  }
}
