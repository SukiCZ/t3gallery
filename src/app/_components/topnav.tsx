import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export function TopNav() {
    return (
        <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
            <div>
                <Link className="p-4" href="/">
                    Home
                </Link>
                {/*<Link className="p-4" href="/gallery">*/}
                {/*    Gallery*/}
                {/*</Link>*/}
            </div>
            <div>
                <SignedIn>
                    <UserButton />
                </SignedIn>

                <SignedOut>
                    <SignInButton />
                </SignedOut>
            </div>
        </nav>
    );
}
