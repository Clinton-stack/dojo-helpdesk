'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react'
import { MdDeleteForever } from "react-icons/md";

import { useTransition } from 'react';
import { deleteTicket } from '../actions';


export default function DeleteButton({id}) {

    const [isPending, startTransition] = useTransition()

    // const router = useRouter()
    // const [isLoading, setIsLoading] = useState(false) 
    // const handClick = async () => { 
    //     setIsLoading(true)
    //     const res = await fetch('http://localhost:3000/api/tickets/' + id, {
    //         method: "DELETE",
    //     })
    //     const json = await res.json()
    //     if (json.error) {
    //         console.log(json.error)
    //         setIsLoading(false)
    //     }
    //     if (!json.data) {
    //         router.refresh()
    //         router.push('/tickets')
    //     }
    // }

  return (
    <button
        className='btn-primary'
        onClick={()=> startTransition(deleteTicket(id))}
        disabled={isPending}    
    >
        {isPending ? 'Deleting...' : <MdDeleteForever />}        
    </button>
  )
}
