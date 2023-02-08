import mongoose from 'mongoose'
import { customAlphabet  } from 'nanoid'
import nanoidDictionary from 'nanoid-dictionary'
const { numbers } = nanoidDictionary
const { Schema } = mongoose

const categorySchema = new Schema({
  name: {
    type: String,
    required: true
  }, 
  merchant: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Merchant'
  }
}, {
  timestamps: true
})

const Category = mongoose.model('Category', categorySchema)

export default Category
