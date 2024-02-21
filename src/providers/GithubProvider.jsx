"use client"
import { SessionProvider } from 'next-auth/react'
import React from 'react'


const GithubProvider = ({ children }) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

export default GithubProvider
