import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, {
    auth: { flowType: "pkce" }
})

export async function GET(req) {

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