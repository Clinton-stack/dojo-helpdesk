import { notFound } from "next/navigation";

// grenerate 404 page if ticket not found
export const dynamicPath = true;

export async function generateMetadata({params}) {
    const ticket = await fetchTicket(params.id);
    return {
        title: `Dojo Help Desk | ${ticket.title}`,
        description: ticket.body.slice(0, 200),
    };

}

// generate static pages for each ticket on build
export async function generateStaticParams() {
    const response = await fetch("http://localhost:4000/tickets",)
    const tickets = await response.json();
    return tickets.map((ticket) => ({
        params: {
            id: ticket.id.toString(),
        },
    }));
}

async function fetchTicket(id) {
    await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch("http://localhost:4000/tickets/" + id, {
    next: {
      revalidate: 60, // use 0 to opt out of cache
    },
  });
  if (!response.ok) {
    notFound();
  }
  const json = await response.json();
  return json;
}
export default async function TicketDetails({ params }) {
  const ticket = await fetchTicket(params.id);
  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3> {ticket.title}</h3>
        <small> Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
}
