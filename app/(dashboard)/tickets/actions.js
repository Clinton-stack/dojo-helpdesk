'use server'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers"
import { redirect } from "next/navigation";

export async function addTickets(formData) {
    const ticket = Object.fromEntries(formData)
    const supabase = createServerComponentClient({ cookies })

    const { data: { session } } = await supabase.auth.getSession()

    const { error } = await supabase.from('tickets').insert([
        {
            ...ticket,
            user_email: session.user.email
        }
    ])
    if (error) {
        throw new Error("Could not add the Ticket")
    }

    revalidatePath('/tickets')
    redirect('/tickets')
}

export async function deleteTicket(id) {
    const supabase = createServerComponentClient({ cookies })

    const { error } = await supabase.from('tickets').delete().eq('id', id)

    if (error) {
        throw new Error("Could not delete the Ticket")
    }

    revalidatePath('/tickets')
    redirect('/tickets')
}