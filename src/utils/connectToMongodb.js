import mongoose from "mongoose"

const connectToMongo = async () => {

  await mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("DB CONNECTED")
  }).catch((err) => {
    console.log(err)
  })
}
export default connectToMongo
