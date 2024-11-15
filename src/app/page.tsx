import Link from "next/link";

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

export default function HomePage() {
    return (
        <main className="">
            <div className="flex flex-wrap gap-4">
                {mockImage.map((image) => (
                    <div key={image.id} className="w-48">
                        <img src={image.url} alt="image" className="w-full" />
                    </div>
                ))}
            </div>
        </main>
    );
}
