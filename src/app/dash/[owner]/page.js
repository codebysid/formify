import { getAllForms } from "@/actions/form"
import DisplayForms from "@/components/DisplayForms"
import Navbar from "@/components/Navbar"

const dash = async ({ params }) => {
  let allForms = undefined
  try {
    allForms = await getAllForms(params.owner)
  } catch (err) {
    console.log(err)
  }
  return (
    <div>
      <Navbar />
      <DisplayForms allForms={allForms} />
    </div>
  )
}

export default dash
