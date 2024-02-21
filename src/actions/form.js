"use server"
import Form from "@/models/Form"
import connectToMongo from "../utils/connectToMongodb"
import Response from "../models/Response"
import { createRef } from "react"

export async function saveForm(formName, formData, owner) {
  if (!formName || !formData.length > 0 || !owner) throw new Error("form name/data/owner required")

  try {
    await connectToMongo()
    const createdForm = await Form.create({
      name: formName, formData, owner
    })
    if (!createdForm) return
    return createdForm._id
  } catch (err) {
    console.log(err)
  }
}

export async function getForm(formId) {
  if (!formId) throw new Error("form id is required")
  try {
    await connectToMongo()
    const form = await Form.findOne({ _id: formId })
    if (!form) throw new Error("invalid form id")
    return JSON.parse(JSON.stringify(form))
  } catch (err) {
    console.log(err)
  }
}

export async function saveFormResponse(responseData, formId, owner) {
  if (!formId || !owner) throw new Error("formId/owner required")
  try {
    await connectToMongo()
    await Response.create({ responseData, formId, owner })
  } catch (err) {
    console.log(err)
  }
}

export async function getAllForms(owner) {
  if (!owner) throw new Error("owner id required")
  try {
    await connectToMongo()
    const forms = await Form.find({ owner })
    if (!forms) return
    return JSON.parse(JSON.stringify(forms))
  } catch (err) {

  }
}

export async function getResponses(formId, owner) {
  if (!formId || !owner) throw new Error("formId/owner reuired")
  try {
    await connectToMongo()
    const responses = await Response.find({ formId, owner })
    if (!responses) return
    return JSON.parse(JSON.stringify(responses))
  } catch (err) {
    console.log(err)
  }
}
