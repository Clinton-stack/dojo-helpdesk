import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { cookies } from "next/headers";

async function fetchTickets() {
    const supabase = createServerComponentClient({cookies});
    const { data, error } = await supabase.from('tickets').select('*'); 
    if (error) {
        console.error(error);       
    }
    if (data) {
        return data;
    }
    }
export default async function TicketList() {
    const tickets = await fetchTickets();
  return (
    < >
        {tickets.map((ticket) => (
            <div className="card" key={ticket.id}>
              <Link href={`/tickets/${ticket.id}`}>
                <h3>{ticket.title}</h3>
                <p>{ticket.body.slice(0, 200)}...</p>
                <div className={`pill ${ticket.priority}`}>
                    {ticket.priority} priority
                </div>
                </Link>
            </div>
        ))}
        {tickets.length === 0 && (
            <p className="text-center">No tickets found.</p>
        )}
    </>
  )
}
