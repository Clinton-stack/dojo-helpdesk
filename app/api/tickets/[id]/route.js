import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(_, { params }) {
    try {
        const id = params.id;
        const response = await fetch(`http://localhost:4000/tickets/${id}`);
        console.log('Response status:', response.status);

        if (!response.ok) {
            return NextResponse.json({ error: 'Ticket not found' }, { status: 404 });
        }

        const ticket = await response.json();
        return NextResponse.json(ticket, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
