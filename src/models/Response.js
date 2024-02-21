import { Schema, models, model } from "mongoose"

export const responseSchema = new Schema({
  responseData: {
    type: Object,
  },
  formId: {
    type: Schema.Types.ObjectId,
    ref: "Form"
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
})

const Response = models.Response || model("Response", responseSchema)

export default Response
