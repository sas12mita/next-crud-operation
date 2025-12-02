"use client";

import Link from "next/link";

import LogoutButton from "./Logoutbutton";
import { getSession } from "../_lib/session";

// Temporary fake session
const session = await getSession(); // change to false to see login/register

export default function Navbar() {
    return (
        <nav className="w-full bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-semibold">Contact Manager</h1>

            <ul className="flex gap-6 text-lg">
                <li>
                    <Link href="/">Home</Link>
                </li>

                {session ? (
                    <>
                        <li>
                            <Link href="/contacts">Contacts</Link>
                        </li>
                        <li>
                            <LogoutButton />
            </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link href="/login">Login</Link>
                        </li>
                        <li>
                            <Link href="/register">Register</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}
