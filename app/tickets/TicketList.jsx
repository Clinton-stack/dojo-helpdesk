async function fetchTickets() {
  const response = await fetch('http://localhost:4000/tickets', {
    next: {
        revalidate: 0,
    }
  });
  const json = await response.json();
    return json;
    }
export default async function TicketList() {
    const tickets = await fetchTickets();
  return (
    <>
        {tickets.map((ticket) => (
            <div className="card" key={ticket.id}>
                <h3>{ticket.title}</h3>
                <p>{ticket.body.slice(0, 200)}...</p>
                <div className={`pill ${ticket.priority}`}>
                    {ticket.priority} priority
                </div>
            </div>
        ))}
        {tickets.length === 0 && (
            <p className="text-center">No tickets found.</p>
        )}
    </>
  )
}
