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
    <div className="relative z-0 pt-[10vh] " id="root">
      <div className=" pt-[10vh] ">
        <div className="title w-[75%] mx-auto flex flex-col">
          <h1 className="text-[5rem] font-bold ">
            WORKS.
            <div className="text-[1.7rem] font-normal ">案件實例</div>
          </h1>
        </div>
        <div className="mb-[100px]">
          <SwiperSingle />
        </div>
        <section className="categories-01 flex w-[90%] mx-auto">
          <div className="w-[35%]">
            <div className="txt flex flex-col">
              <span className="text-[.9rem] text-gray-800">
                用50萬左右就打造出屬於自己的高質感小宅
              </span>
              <h2 className="text-[4rem] mt-4 text-[#243629] font-normal border-b border-dashed border-black w-fit">
                小資專案
              </h2>
              <p className="text-[1rem] text-[#333]">
                我們專注於小資族、小家庭、小坪數室內設計，提供輕裝潢、系統櫃設計到完整空間規劃，
                <br></br>
                讓每一個剛起步的新家庭，也能擁有舒適、實用又充滿溫度的生活空間。
              </p>
            </div>
          </div>
          <div className="w-[65%] mx-auto">
            <Swiper />
          </div>
        </section>

        <div className="max-w-7xl mt-[10vh] mx-auto">
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
                  href="KuankoshiProjectInner"
                  className="group block"
                >
                  <div className="aspect-[4/5] w-full overflow-hidden rounded-md !bg-gray-100">
                    <Image
                      src={previewImage}
                      alt={post.title.rendered}
                      width={400}
                      height={500}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <h2 className="mt-4 font-bold bg-none text-sm group-hover:text-neutral-700 transition">
                    {post.title.rendered.replace(/<[^>]+>/g, "")}
                  </h2>
                  <p className="text-xs text-gray-500 bg-none">
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
