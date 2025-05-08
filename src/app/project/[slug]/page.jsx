import { notFound } from "next/navigation";
import Image from "next/image";
import Head from "next/head";
import { Suspense } from "react";
import Categories from "../../../components/categories.jsx";

import HeroSlider from "../../../components/HeroSlideContact/page.jsx";
import HoverItem from "../../../components/HoverItem.jsx";
import Marquee from "react-fast-marquee";
import gsap from "gsap";
import Link from "next/link";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export async function generateStaticParams() {
  const postsRes = await fetch(
    `https://inf.fjg.mybluehost.me/website_61ba641a/wp-json/wp/v2/posts?per_page=100&_embed`
  );
  const posts = await postsRes.json();

  return posts.map((post) => ({ slug: post.slug }));
}

async function getPost(slug) {
  const res = await fetch(
    `https://inf.fjg.mybluehost.me/website_61ba641a/wp-json/wp/v2/posts?slug=${slug}&_embed`,
    { next: { revalidate: 5 } }
  );
  const posts = await res.json();
  const post = posts?.[0] || null;

  if (!post) return null;

  // Replace resized image URLs with original
  post.content.rendered = post.content.rendered.replace(
    /(<img[^>]+src=")(.*?)-\d+x\d+(\.[a-z]{3,4})"/g,
    "$1$2$3"
  );

  return post;
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

  const match = post.content.rendered.match(/<img[^>]+src=\"([^\">]+)\"/i);
  const firstImage = match?.[1];

  return (
    <div className=" py-12 w-full ">
      <Head>
        <title>{post.title.rendered}｜寬越設計</title>
        <meta
          name="description"
          content={post.excerpt.rendered.replace(/<[^>]+>/g, "")}
        />
      </Head>

      <section className="section-Hero-img w-full">
        <div className="w-full">
          <HeroSlider />
        </div>
        <div className="flex w-[90%] mt-20 max-w-[1920px] mx-auto flex-col">
          <div className="w-full bg-white">
            <div className="p-10">
              <span className="tracking-widest text-gray-500">
                Case - 00234
              </span>
              <h1
                className="text-3xl tracking-widest mb-4"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-[150px] flex flex-col px-20 lg:flex-row pt-8 border-t-1 border-gray-300 w-full ">
        <div className="w-full lg:w-[15%]">
          <div className="sticky pl-5 top-24  ">
            <Suspense fallback={<div></div>}>
              <Categories />
            </Suspense>
          </div>
        </div>

        <div
          className="prose prose-neutral w-[60%] 2xl:px-[150px] px-4 md:px-[70px] [&_img]:my-8"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />

        <div className="w-full py-10 px-5 sm:px-0 lg:py-0 sm:w-[60%] mx-auto lg:w-[25%] pr-8 flex flex-col">
          <div className="">
            <span className="text-[.8rem]">
              以瑞典為基地的TUF設計了可供所有年齡層日常使用的系列。這款設計關注於尺寸與用途的關係，讓孩子的大盤子可以成為成年人的小菜盤，並不拘泥於單一的使用方式，而是通過使用者的想像力來適應各種功能。這是一系列源於融化冰淇淋主題和印章等充滿趣味的創意。
              Designer
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
