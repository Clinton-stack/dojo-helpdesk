import Link from "next/link";

async function fetchTickets() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch('http://localhost:4000/tickets', {
    next: {
        revalidate: 0, // use 0 to opt out of cache
    }
  });
  const json = await response.json();
    return json;
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
