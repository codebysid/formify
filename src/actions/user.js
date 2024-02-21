"use server"
import connectToMongo from "@/utils/connectToMongodb"
import User from "../models/User"

export async function createGithubUser(userName, email) {
  try {
    await connectToMongo()
    await User.create({
      ...(userName && { userName }),
      ...(email && { email })
    })
  } catch (err) {
    console.log(err)
  }
}

export async function getUser(email) {
  if (!email) return
  try {
    await connectToMongo()
    const user = await User.findOne({ email })
    return JSON.parse(JSON.stringify(user))
  } catch (err) {
    console.log(err)
  }
}
