import Image from "next/image";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
    const posts = await db.query.posts.findMany({
        with: {
            images: true,
        }
    });

    return (
        <main className="">
            <div className="flex flex-wrap gap-4">
                {posts.map((post) => (
                    <div key={post.id} className="w-48">
                        <div>{post.name}</div>
                        {(post.images || []).map((image: {id: number, url: string}) => (
                            <Image key={image.id} src={image.url} alt="image" className="w-full" width={500} height={500} />
                        ))}
                    </div>
                ))}
            </div>
        </main>
    );
}
