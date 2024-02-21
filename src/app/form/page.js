import CreateForm from "@/components/CreateForm"
import Navbar from "@/components/Navbar"

const Form = () => {
  return <>
    <Navbar />
    <div className="flex flex-col items-center justify-center h-[65vh]">
      <CreateForm />
    </div>
  </>
}

export default Form
