import mongoose from 'mongoose'

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/challenge_48h")
  .then(() => console.log('Connected to database ✅'))
  .catch((e) => console.log(`Cannot find database ❌ : ${e}`))