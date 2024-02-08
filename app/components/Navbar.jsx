import Link from 'next/link'
import Image from 'next/image'
import LogoutButton from './LogoutButton'

export default function Navbar({user}) {
  return (
    <nav>
      <Image
        src='/dojo-logo.png'
        alt='Dojo Helpdesk logo'
        height={70}
        width={70}
        placeholder='blur'
        quality={100}
        blurDataURL='/dojo-logo.png'
      />
      <h1>Dojo Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets" className='mr-auto'>Tickets</Link>
      {user && <span> Hello, {user.email}</span>}
      <LogoutButton />
    </nav>
  )
}