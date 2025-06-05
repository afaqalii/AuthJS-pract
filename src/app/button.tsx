
"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export default function SignIn() {

    const session = useSession();

    return (
        <>
            <h1>{session.data?.user?.email}</h1>
            {
                session.status === "unauthenticated" 
                    ? <button className="bg-white rounded-md px-5 py-1 text-black font-bold cursor-pointer" onClick={() => signIn("google")}>Sign In with Google</button>
                    : <button className="bg-white rounded-md px-5 py-1 text-black font-bold cursor-pointer" onClick={() => signOut()}>Sign Out</button>
            }
        </>
    )
}
