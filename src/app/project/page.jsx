import React from "react";
import Link from "next/link";
import Image from "next/image";

async function getProjectPosts() {
  // 先抓分類 ID
  const categoryRes = await fetch(
    "https://starislandbaby.com/test/wp-json/wp/v2/categories?slug=project",
    {
      next: { revalidate: 60 }, // ✅ 可快取的 API
    }
  );
  const categories = await categoryRes.json();
  const categoryId = categories?.[0]?.id;

  if (!categoryId) return [];

  const postsRes = await fetch(
    `https://starislandbaby.com/test/wp-json/wp/v2/posts?categories=${categoryId}&_embed&per_page=100`,
    {
      next: { revalidate: 60 }, // ✅ 重點在這裡，每 60 秒重新抓
    }
  );
  const posts = await postsRes.json();
  return posts;
}

export default async function ProjectListPage() {
  const posts = await getProjectPosts();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">設計作品</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {posts.map((post) => {
          const featuredImage =
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            "/images/fallback.jpg";

          return (
            <Link
              key={post.id}
              href={`/project/${post.slug}`}
              className="group block"
            >
              <div className="aspect-[4/5] w-full overflow-hidden rounded-md bg-gray-100">
                <Image
                  src={featuredImage}
                  alt={post.title.rendered}
                  width={400}
                  height={500}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h2 className="mt-4 font-bold text-sm group-hover:text-neutral-700 transition">
                {post.title.rendered.replace(/<[^>]+>/g, "")}
              </h2>
              <p className="text-xs text-gray-500">
                {new Date(post.date).toLocaleDateString("zh-TW")}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
