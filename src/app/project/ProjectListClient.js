"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Filter from "../../components/TabsFilter/Filter";
import AnimatedLink from "../../components/AnimatedLink";
import Swiper from "../../components/SwiperCarousel/SwiperCard";
import SwiperSingle from "../../components/SwiperCarousel/SwiperCardAbout";
import Image from "next/image";

export default function ProjectListClient({ posts, categories }) {
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("cat");

  const postsWithSlug = useMemo(() => {
    return posts.map((post) => {
      const categorySlugs = (post._embedded?.["wp:term"]?.[0] || []).map((cat) => cat.slug);
      return { ...post, categories_slug: categorySlugs };
    });
  }, [posts]);

  const [filtered, setFiltered] = useState(postsWithSlug);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    if (categoryFromUrl && activeCategory === "all") {
      setActiveCategory(categoryFromUrl);
      const matched = postsWithSlug.filter((post) =>
        post.categories_slug.includes(categoryFromUrl)
      );
      setFiltered(matched);
    }
  }, [categoryFromUrl, postsWithSlug, activeCategory]);

  return (
    <div className="pt-[10vh]">
      <div className="title w-[75%] mx-auto flex flex-col">
        <h1 className="text-[5rem] font-bold">
          WORKS.
          <div className="text-[1.7rem] font-normal">案件實例</div>
        </h1>
      </div>

      <div className="mb-[100px]">
        <SwiperSingle />
      </div>

      <section className="categories-01 w-[90%] mx-auto">
        <div className="w-full">
          <Swiper />
        </div>
      </section>

      <div className="max-w-7xl mt-[10vh] px-6 lg:px-0 mx-auto">
        <h1 className="text-3xl font-bold mb-8">設計作品</h1>

        <div className="App">
          <Filter
            posts={postsWithSlug}
            setFiltered={setFiltered}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            categories={categories}
          />

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
            <AnimatePresence>
              {filtered.map((post) => {
                const galleryFirstImage = extractFirstGalleryImage(post.content?.rendered);
                const fallbackImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/images/fallback.jpg";
                const previewImage = galleryFirstImage || fallbackImage;

                return (
                  <motion.div
                    key={post.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{
                      opacity: { duration: 0.4 },
                      layout: { type: "spring", stiffness: 300, damping: 30 },
                      scale: { type: "spring", stiffness: 300, damping: 30 }
                    }}
                  >
                    <AnimatedLink
                      href="/KuankoshiProjectInner"
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
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function extractFirstGalleryImage(html) {
  const galleryMatch = html.match(
    /<figure class="wp-block-gallery[\s\S]*?<\/figure>/i
  );
  if (!galleryMatch) return null;

  const firstImgMatch = galleryMatch[0].match(/<img[^>]+src="([^"]+)"/i);
  return firstImgMatch ? firstImgMatch[1] : null;
}
