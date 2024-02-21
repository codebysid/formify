import { Schema, model, models } from "mongoose"

const userSchema = Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    unique: true
  },
})

const User = models.User || model("User", userSchema)

export default User
