import ArticleModel from './article-model.js'
import Joi from 'Joi'

export async function index (ctx) {
  try {
    const articles = await ArticleModel.find({})
    ctx.ok(articles)
  } catch (e) {
    ctx.badRequest({ message: e.message })
  }
}

// export async function id (ctx) {
//   try {
//     if(!ctx.params.id) throw new Error('No id supplied')
//     const task = await TaskModel.findOneByCreatorId(ctx.state.user.id, ctx.params.id)
//     if(!task) { 
//       return ctx.send(401) 
//     }
//     ctx.ok(task)
//   } catch (e) {
//     ctx.badRequest({ message: e.message })
//   }
// }

export async function getAllByCategory (ctx) {
  try {
    if(!ctx.params.categoryId) throw new Error('No id supplied')
    const categories = await ArticleModel.findByCategoryId(ctx.params.categoryId)
    ctx.ok(categories)
  } catch (e) {
    ctx.badRequest({ message: e.message })
  }
}

export async function create (ctx) {
  try {
    
    // if(!ctx.state.user.id) throw new Error('No user id found')
    
    const articleValidate = Joi.object({
      name: Joi.string().required(),
      description: Joi.string(),
      price: Joi.number().required(),
      image: Joi.string().required(),
      categories: Joi.string().required(),

    })
    const { error, value } = articleValidate.validate(ctx.request.body)
    if(error) throw new Error(error)
    const newTask = await ArticleModel.create({...value})
    ctx.ok(newTask)
  } catch (e) {
    console.log("Oh no !!!")
    ctx.badRequest({ message: e.message })
  }
}

export async function update (ctx) {
  try {
    const articleValidate = Joi.object({
      name: Joi.string(),
      description: Joi.string(),
      price : Joi.number(),
      image: Joi.string(),
      category: Joi.string()
    })
    if(!ctx.params.id) throw new Error('No id supplied')
    const { error, value } = articleValidate.validate(ctx.request.body)
    if(error) throw new Error(error)
    const updatedTask = await ArticleModel.findOneAndUpdate(ctx.params.id, value)
    if(!updatedTask) { 
      return ctx.send(401) 
    }
    ctx.ok("The task has been updated successfully")
  } catch (e) {
    ctx.badRequest({ message: e.message })
  }
}

export async function destroy (ctx) {
  try {
    if(!ctx.params.id) throw new Error('No id supplied')
    const taskDelete = await ArticleModel.findOneAndDelete(ctx.params.id)
    if(!taskDelete) { 
      return ctx.send(401) 
    }
    ctx.ok('The task has been deleted successfully')
  } catch (e) {
    ctx.badRequest({ message: e.message })
  }
}