import mongoose from 'mongoose'

const { Schema } = mongoose

const articleSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  price:{
    type: Number,
    required: true
  },
  image:{
    type: String,
    required: true
  }, 
  categories: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Category'
  }
  // ,
  // creator: {
  //   type: Schema.Types.ObjectId,
  //   required: true,
  //   ref: 'User'
  // }
}, { 
  timestamps: true
})

articleSchema.static({
  findByCategoryId (categoryId) {
    return this.find({ categories: categoryId })
  }
})

const Article = mongoose.model('Article', articleSchema)

export default Article