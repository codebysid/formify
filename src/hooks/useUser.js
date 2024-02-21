"use client"
import { getUser } from "@/actions/user"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"

const useUser = () => {
  const [user, setUser] = useState()
  const session = useSession()

  const handleUser = async (email) => {
    try {
      const res = await getUser(email)
      if (res) setUser(res)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (session?.data?.user) handleUser(session.data.user.email)
  }, [session?.data?.user])
  return user
}

export default useUser
