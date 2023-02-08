import mongoose from 'mongoose'
import { customAlphabet  } from 'nanoid'
import nanoidDictionary from 'nanoid-dictionary'
const { numbers } = nanoidDictionary
const { Schema } = mongoose

const merchantSchema = new Schema({
    brand: {
        type: String,
        required: true,
        unique: true
    },
    logo: {
        type: String,
        required: true
    }
}, {
  timestamps: true
})

const Merchant = mongoose.model('Merchant', merchantSchema)

export default Merchant