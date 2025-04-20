import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Head from "next/head";
import EmblaCarouselWrapper from "../../../components/EmblaCarousel07/EmblaCarouselWrapper";

// 抽出前 N 張 <img> 作為輪播，其他圖片保留在內容中
function extractImagesForCarousel(html, count = 5) {
  const images = [];
  let imgTagCount = 0;

  const cleanedHTML = html.replace(
    /<img[^>]+src="([^">]+)"[^>]*>/gi,
    (match, src) => {
      if (imgTagCount < count) {
        images.push(src);
        imgTagCount++;
        return ""; // 從內文中移除輪播圖片
      } else {
        return match; // 其餘圖片保留
      }
    }
  );

  return { images, cleanedHTML };
}

export async function generateStaticParams() {
  const categoryRes = await fetch(
    "https://starislandbaby.com/test/wp-json/wp/v2/categories?slug=project"
  );
  const categories = await categoryRes.json();
  const categoryId = categories?.[0]?.id || null;

  if (!categoryId) return [];

  const postsRes = await fetch(
    `https://starislandbaby.com/test/wp-json/wp/v2/posts?categories=${categoryId}&per_page=100`
  );
  const posts = await postsRes.json();

  return posts.map((post) => ({ slug: post.slug }));
}

async function getPost(slug) {
  const res = await fetch(
    `https://starislandbaby.com/test/wp-json/wp/v2/posts?slug=${slug}&_embed`,
    { next: { revalidate: 5 } }
  );
  const posts = await res.json();
  return posts?.[0] || null;
}

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  if (!post) return {};

  return {
    title: `${post.title.rendered}｜寬越設計`,
    description: post.excerpt.rendered.replace(/<[^>]+>/g, ""),
  };
}

const ProjectPage = async ({ params }) => {
  const post = await getPost(params.slug);
  if (!post) return notFound();

  // 這裡設為 5，抽出前 5 張圖進輪播
  const { images, cleanedHTML } = extractImagesForCarousel(
    post.content.rendered,
    5
  );

  const featuredImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "/images/fallback.jpg";

  return (
    <div className="px-6 py-12 w-full mx-auto">
      <Head>
        <title>{post.title.rendered}｜寬越設計</title>
        <meta
          name="description"
          content={post.excerpt.rendered.replace(/<[^>]+>/g, "")}
        />
      </Head>

      <div className="title mx-auto max-w-[1920px] mt-[100px] w-[70%] flex flex-col">
        <span className="tracking-widest text-gray-500">Case - 00234</span>
        <h1
          className="text-3xl tracking-widest mb-4"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
      </div>

      {/* 顯示輪播（如果有圖片的話） */}
      {images.length > 0 && (
        <EmblaCarouselWrapper slides={images} thumbnails={images} />
      )}

      <Image
        src={featuredImage}
        alt={post.title.rendered}
        width={800}
        height={500}
        className="rounded-lg mb-6"
      />

      {/* 顯示包含其餘圖片的內文 */}
      <div
        className="prose prose-neutral max-w-none"
        dangerouslySetInnerHTML={{ __html: cleanedHTML }}
      />
    </div>
  );
};

export default ProjectPage;
