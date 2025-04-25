import React from "react";
import Link from "next/link";
import Image from "next/image";
import AnimatedLink from "../../components/AnimatedLink";
// ✅ 擷取圖庫第一張圖片
import Swiper from "../../components/SwiperCarousel/SwiperCard";
import SwiperSingle from "../../components/SwiperCarousel/SwiperCardAbout";
function extractFirstGalleryImage(html) {
  const galleryMatch = html.match(
    /<figure class="wp-block-gallery[\s\S]*?<\/figure>/i
  );
  if (!galleryMatch) return null;

  const firstImgMatch = galleryMatch[0].match(/<img[^>]+src="([^">]+)"/i);
  return firstImgMatch ? firstImgMatch[1] : null;
}

async function getProjectPosts() {
  const categoryRes = await fetch(
    "https://starislandbaby.com/test/wp-json/wp/v2/categories?slug=project",
    {
      next: { revalidate: 60 },
    }
  );
  const categories = await categoryRes.json();
  const categoryId = categories?.[0]?.id;

  if (!categoryId) return [];

  const postsRes = await fetch(
    `https://starislandbaby.com/test/wp-json/wp/v2/posts?categories=${categoryId}&_embed&per_page=100`,
    {
      next: { revalidate: 60 },
    }
  );
  const posts = await postsRes.json();
  return posts;
}

export default async function ProjectListPage() {
  const posts = await getProjectPosts();

  return (
    <div className="relative z-0 pt-[20vh] ">
      <div className=" pt-[20vh] ">
        <div className="title w-[75%] mx-auto flex flex-col">
          <h1 className="text-[5rem] font-bold ">
            WORKS.
            <div className="text-[1.7rem] font-normal ">案件實例</div>
          </h1>
        </div>
        <div className="mb-[100px]">
          <SwiperSingle />
        </div>
        <div className="w-[90%] mx-auto">
          <Swiper />
        </div>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">設計作品</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {posts.map((post) => {
              // ✅ 改為圖庫第一張圖
              const galleryFirstImage = extractFirstGalleryImage(
                post.content?.rendered
              );
              const fallbackImage =
                post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                "/images/fallback.jpg";
              const previewImage = galleryFirstImage || fallbackImage;

              return (
                <AnimatedLink
                  key={post.id}
                  href={`/project/${post.slug}`}
                  className="group block"
                >
                  <div className="aspect-[4/5] w-full overflow-hidden rounded-md bg-gray-100">
                    <Image
                      src={previewImage}
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
                </AnimatedLink>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
