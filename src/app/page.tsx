import Image from "next/image";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

import { getPosts } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
    const posts = await getPosts();

    return (
        <div className="flex flex-wrap pl-16 pr-16 gap-4">
            {posts.map((post) => (
                <div key={post.id} className="w-48">
                    <div>{post.name}</div>
                    {post.images.map((image: { id: number; url: string }) => (
                        <div key={image.id} className="flex h-48 w-56 flex-col">
                            <Image
                                key={image.id}
                                src={image.url}
                                alt="image"
                                className="w-full"
                                width={192}
                                height={128}
                            />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default async function HomePage() {
    const user = await currentUser();

    return (
        <main className="">
            <SignedOut>
                <div className="h-full w-full p-16 text-center text-2xl">
                    Please sign in
                </div>
            </SignedOut>
            <SignedIn>
                <div className="h-full w-full p-16 text-center text-2xl">
                    Welcome {user?.fullName}
                </div>
                <Images />
            </SignedIn>
        </main>
    );
}
