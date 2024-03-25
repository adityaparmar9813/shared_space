import prisma from "@/lib/prisma";

async function getPosts() {
  const posts = await prisma.post.findMany({
    where: {
      published: true,
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return posts;
}

export default async function TestGet() {
  const posts = await getPosts();
  console.log(posts);

  return <div>TEST GET PAGE</div>;
}
