import { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../loading";
import Link from "next/link";

export const metadata = {
  title: "Dojo Help Desk | Tickets",
  description: "Tickets for the Dojo Help Desk app.",
};

export default function Ticket() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently Open tickets </small>
          </p>
        </div>
        <div className="ml-auto">
          <Link href="/tickets/create">
            <button className="btn-primary">New Tickets</button>
          </Link>
        </div>
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
}
