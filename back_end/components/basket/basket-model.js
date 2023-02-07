import mongoose from 'mongoose'
import { customAlphabet  } from 'nanoid'
import nanoidDictionary from 'nanoid-dictionary'
const { numbers } = nanoidDictionary
const { Schema } = mongoose

const basketSchema = new Schema({
  basket_user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  basket_article: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Article'
  }

}, {
  timestamps: true
})

const Basket = mongoose.model('Basket', basketSchema)

export default Basket
