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

// export async function getAllByList (ctx) {
//   try {
//     if(!ctx.params.listId) throw new Error('No id supplied')
//     const tasks = await TaskModel.findByListId(ctx.params.listId)
//     ctx.ok(tasks)
//   } catch (e) {
//     ctx.badRequest({ message: e.message })
//   }
// }

export async function create (ctx) {
  try {
    
    // if(!ctx.state.user.id) throw new Error('No user id found')
    
    const articleValidationSchema = Joi.object({
      title: Joi.string().required(),
      description: Joi.string()
    })
    const { error, value } = articleValidationSchema.validate(ctx.request.body)
    if(error) throw new Error(error)
    const newTask = await ArticleModel.create({...value})
    ctx.ok(newTask)
  } catch (e) {
    console.log("Oh no !!!")
    ctx.badRequest({ message: e.message })
  }
}

// export async function update (ctx) {
//   try {
//     const taskValidationSchema = Joi.object({
//       title: Joi.string(),
//       description: Joi.string(),
//       list: Joi.string(),
//       done: Joi.boolean()
//     })
//     if(!ctx.params.id) throw new Error('No id supplied')
//     const { error, value } = taskValidationSchema.validate(ctx.request.body)
//     if(error) throw new Error(error)
//     const updatedTask = await TaskModel.findOneByCreatorIdAndUpdate(ctx.state.user.id, ctx.params.id, value)
//     if(!updatedTask) { 
//       return ctx.send(401) 
//     }
//     ctx.ok("The task has been updated successfully")
//   } catch (e) {
//     ctx.badRequest({ message: e.message })
//   }
// }

// export async function destroy (ctx) {
//   try {
//     if(!ctx.params.id) throw new Error('No id supplied')
//     const taskDelete = await TaskModel.findOneByCreatorIdAndDelete(ctx.state.user.id, ctx.params.id)
//     if(!taskDelete) { 
//       return ctx.send(401) 
//     }
//     ctx.ok('The task has been deleted successfully')
//   } catch (e) {
//     ctx.badRequest({ message: e.message })
//   }
// }