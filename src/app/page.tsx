import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
    "/img/abigail-lynn-rdmJc2Os4EM.webp",
    "/img/ambitious-studio-rick-barrett-Ugzhg8-tO3U.webp",
    "/img/danny-howe-gwQAhisLnRA.webp",
    "/img/yvette-de-wit-NYrVisodQ2M.webp",
];

const mockImage = mockUrls.map((url, index) => ({
    id: index + 1,
    url,
}));

export default async function HomePage() {
    const posts = await db.query.posts.findMany();

    console.log(posts);

    return (
        <main className="">
            <div className="flex flex-wrap gap-4">
                {posts.map((post) => (
                    <div key={post.id}>{post.name}</div>
                ))}
                {mockImage.map((image) => (
                    <div key={image.id} className="w-48">
                        <img src={image.url} alt="image" className="w-full" />
                    </div>
                ))}
            </div>
        </main>
    );
}
