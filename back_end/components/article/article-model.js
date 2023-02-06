import mongoose from 'mongoose'

const { Schema } = mongoose

const articleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
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

// articleSchema.static({
//   findByArticleId (listId) {
//     return this.find({ list: listId })
//   },
//   findOneByCreatorId(creatorId, articleId) {
//     return this.findOne({ creator: creatorId, _id: articleId })
//   },
//   findOneByCreatorIdAndUpdate(creatorId, articleId, updateArticle) {
//     return this.findOneAndUpdate({ creator: creatorId, _id: articleId }, updateArticle)
//   },
//   findOneByCreatorIdAndDelete(creatorId, articleId) {
//     return this.findOneAndDelete({ creator: creatorId, _id: articleId })
//   }
// })

const Article = mongoose.model('Article', articleSchema)

export default Article