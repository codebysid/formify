"use client"
import React from 'react'
import { Button } from './ui/button'
import { signOut } from 'next-auth/react'

const SignOutButton = () => {
  return (
    <Button variant="ghost" onClick={() => signOut()}>Signout</Button>
  )
}

export default SignOutButton
