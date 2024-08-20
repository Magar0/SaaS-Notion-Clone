import { createClient } from "../../../../lib/supabase/server"
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(req) {

    const supabase = await createClient()
    console.log("I m running");

    const requestUrl = new URL(req.url)
    const code = requestUrl.searchParams.get('code');
    console.log("code", code);

    if (code) {
        const response = await supabase.auth.exchangeCodeForSession(code)
        console.log(response);
        console.log("Success........");
    }
    return NextResponse.redirect(`${requestUrl.origin}/dashboard`)
}