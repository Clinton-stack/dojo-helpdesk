import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import Link from 'next/link'
import React from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

async function AuthLayout({ children }) {

  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.auth.getSession()

  if(data.session) {
    redirect('/')
  }
  return (
    <>
    <nav>
        <h1> Dojo HelpDesk</h1>
        <Link href="/login">Login</Link>
        <Link href="/signup">Sign Up</Link>
    </nav>
        {children}
    </>
  )
}

export default AuthLayout