import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';

export async function GET(_, { params }) {
    const supabase = createServerComponentClient({cookies});
    const { data, error } = await supabase.from('tickets').select().eq('id', params.id).single(); 
    return NextResponse.json({ data, error });
}
export async function DELETE(_, { params }) {
    const supabase = createServerComponentClient({cookies});
    const { data, error } = await supabase.from('tickets').delete().eq('id', params.id); 
    return NextResponse.json({ data, error });
}