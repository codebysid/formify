const { Schema, models, model } = require("mongoose");

const formSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  formData: {
    type: [],
    required: true
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
})

const Form = models.Form || model("Form", formSchema)

export default Form
