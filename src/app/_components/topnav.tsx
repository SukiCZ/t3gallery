"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { UploadButton } from "~/utils/uploadthing";
import {useRouter} from "next/navigation";

export function TopNav() {
    const router = useRouter();

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
            <div className="flex flex-row">
                <SignedIn>
                    <UploadButton
                        endpoint="imageUploader"
                        onClientUploadComplete={() => {
                            router.refresh();
                        }}
                    />
                    <UserButton />
                </SignedIn>

                <SignedOut>
                    <SignInButton />
                </SignedOut>
            </div>
        </nav>
    );
}
