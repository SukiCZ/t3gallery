import "server-only";
import { db } from "~/server/db";

export async function getPosts() {
  const posts = await db.query.posts.findMany({
    with: {
      images: true,
    },
    orderBy: (model, { asc }) => asc(model.createdAt),
  });
  return posts;
}
