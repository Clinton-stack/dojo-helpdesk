import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Navbar from '@/app/components/Navbar'
import { redirect } from 'next/navigation'

export default async function DashboardLayout({ children }) {
  try {
    const supabase = createServerComponentClient({ cookies })
    const { data } = await supabase.auth.getSession()
  
    // Check if data and data.session are truthy before accessing properties
    const user = data.session.user 

    return (
      <>
        <Navbar user={user} />
        {children}
      </>
    )
  } catch (error) {
    // Handle errors appropriately
    console.error('Error fetching session:', error)
    redirect('/login')

    // You might want to redirect the user to a login page or handle the error in another way
  }
}
