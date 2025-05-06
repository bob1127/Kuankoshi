import { notFound } from "next/navigation";
import Image from "next/image";
import Head from "next/head";
import { Suspense } from "react";
import Categories from "../../../components/categories.jsx";

import EmblaCarouselWrapper from "../../../components/EmblaCarousel07/EmblaCarouselWrapper";
import HoverItem from "../../../components/HoverItem.jsx";
import Marquee from "react-fast-marquee";
import gsap from "gsap";
import Link from "next/link";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export async function generateStaticParams() {
  const postsRes = await fetch(
    `https://kuankoshi.com/wp-json/wp/v2/posts?per_page=100&_embed`
  );
  const posts = await postsRes.json();

  return posts.map((post) => ({ slug: post.slug }));
}

async function getPost(slug) {
  const res = await fetch(
    `https://kuankoshi.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
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

  // 不移除圖片，只抽出第一張顯示在 Hero
  const match = post.content.rendered.match(/<img[^>]+src="([^">]+)"/i);
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
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            {firstImage && (
              <div className="relative w-full aspect-[3/2] min-h-[450px] overflow-hidden">
                <Image
                  src={firstImage}
                  alt="封面圖片"
                  fill
                  placeholder="empty"
                  className="object-cover scale-[1.3] blur-sm opacity-0 animate-heroFadeIn"
                />
              </div>
            )}
          </div>

          <div className="w-full md:w-1/2 bg-white">
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

      <section className="py-[150px] flex flex-col px-20 lg:flex-row pt-8 mt-20 pb-[80px]  border-t-1 border-gray-300 w-full ">
        <div className=" w-full lg:w-[15%]">
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
        <div className=" w-full py-10 px-5 sm:px-0 lg:py-0 sm:w-[60%] mx-auto lg:w-[25%] pr-8  flex flex-col">
          <div className="">
            <span className="text-[.8rem]">
              以瑞典為基地的TUF設計了可供所有年齡層日常使用的系列。這款設計關注於尺寸與用途的關係，讓孩子的大盤子可以成為成年人的小菜盤，並不拘泥於單一的使用方式，而是通過使用者的想像力來適應各種功能。這是一系列源於融化冰淇淋主題和印章等充滿趣味的創意。
              Designer
            </span>
          </div>
          <div className="sticky  my-4 top-24 ">
            <div className="flex  px-4 flex-col border border-[#d7d7d7] bg-[#375E77]">
              <h2 className="article-side-project-title text-white text-[1rem] font-normal tracking-widest">
                326新成屋兩房57萬裝潢成家專案
              </h2>
              <div className="feature">
                <div className="border-t-1 py-4 px-1 flex justify-between items-center border-gray-400">
                  <b className="text-[.9rem] font-normal text-white">
                    裝潢價格：
                  </b>
                  <span className="text-[.85rem]  font-normal text-white">
                    約新台幣 180 萬元​
                  </span>
                </div>
                <div className="border-t-1 py-4 px-1 flex justify-between items-center border-gray-400">
                  <b className="text-[.9rem] font-normal text-white">
                    裝潢坪數：
                  </b>
                  <span className="text-[.85rem] text-white font-normal text-white">
                    25 坪​
                  </span>
                </div>
                <div className="border-t-1 py-4 px-1 flex justify-between items-center border-gray-400">
                  <b className="text-[.9rem] font-normal text-white">
                    施工日期：
                  </b>
                  <span className="text-[.85rem] font-normal text-white">
                    2024.05.04
                  </span>
                </div>
                <div className="border-t-1 py-4 px-1 flex justify-between items-center border-gray-400">
                  <b className="text-[.9rem] font-normal text-white">特色：</b>
                  <br></br>
                  <span className="text-[.85rem] w-3/4 text-white font-normal text-white">
                    ​以白色與灰色為主色調，搭配木質地板，營造出簡約且溫馨的居家氛圍。​
                  </span>
                </div>
              </div>
            </div>
            <div className="small-viewer-project p-5">
              <div className="flex flex-row justify-between my-3 ">
                <div className="img w-1/2">
                  <Image
                    src="/images/481977410_122241519506031935_5824784297779272863_n.jpg"
                    placeholder="empty"
                    loading="lazy"
                    alt="small-img"
                    width={400}
                    height={30}
                    className="w-full"
                  />
                </div>

                <div className="arrow w-1/2 flex flex-col justify-between p-4">
                  <div className="flex flex-col">
                    <b className="text-[.95rem]">Name</b>
                    <span className="text-[.8rem] leading-snug ">
                      {" "}
                      Lorem ipsum dolor consectetur
                    </span>
                  </div>
                  <b className="text-[.95rem] ">Go Project</b>
                </div>
              </div>
              <div className="flex flex-row justify-between my-3 ">
                <div className="img w-1/2">
                  <Image
                    src="/images/481977410_122241519506031935_5824784297779272863_n.jpg"
                    placeholder="empty"
                    loading="lazy"
                    alt="small-img"
                    width={400}
                    height={30}
                    className="w-full"
                  />
                </div>

                <div className="arrow w-1/2 flex flex-col justify-between p-4">
                  <div className="flex flex-col">
                    <b className="text-[.95rem]">Name</b>
                    <span className="text-[.8rem] leading-snug ">
                      {" "}
                      Lorem ipsum dolor consectetur
                    </span>
                  </div>
                  <b className="text-[.95rem] ">Go Project</b>
                </div>
              </div>
              <div className="flex flex-row justify-between my-3 ">
                <div className="img w-1/2">
                  <Image
                    src="/images/481977410_122241519506031935_5824784297779272863_n.jpg"
                    placeholder="empty"
                    loading="lazy"
                    alt="small-img"
                    width={400}
                    height={30}
                    className="w-full"
                  />
                </div>

                <div className="arrow w-1/2 flex flex-col justify-between p-4">
                  <div className="flex flex-col">
                    <b className="text-[.95rem]">Name</b>
                    <span className="text-[.8rem] leading-snug ">
                      {" "}
                      Lorem ipsum dolor consectetur
                    </span>
                  </div>
                  <b className="text-[.95rem] ">Go Project</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section_navgation flex flex-row">
        <div className="flex w-full md:w-[80%] mx-auto">
          <div className="Navgation_Prev group hover:scale-[1.02] duration-400 w-1/2 px-8">
            <div className="flex flex-col justify-start items-start">
              <b className="text-[.9rem] tracking-wide w-3/4 text-left font-bold">
                〈COGNOMEN〉 25AW “WORKER-MAN
                ATHLETE”的預購活動將於下週末為期三天舉辦！！
              </b>
              <span className="text-[.8rem] mt-3">
                Categories: 小資50萬裝潢方案
              </span>
              <button class="mt-4  relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 duration-500">
                <div class="relative inline-flex -translate-x-0 items-center transition group-hover:-translate-x-6">
                  <div class="absolute translate-x-0 opacity-0 transition group-hover:-translate-x-6 group-hover:opacity-100 rotate-180">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                    >
                      <path
                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>

                  <span class="pl-6">Hover</span>
                  <div class=" absolute  right-0 translate-x-12 opacity-100 transition group-hover:translate-x-6 group-hover:opacity-0">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                    >
                      <path
                        d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="Navgation_Next hover:scale-[1.02] duration-400 w-1/2 group px-8">
            <div className="flex flex-col justify-end items-end">
              <b className="text-[.9rem]  w-3/4 text-right tracking-wide font-bold">
                〈COGNOMEN〉 25AW “WORKER-MAN
                ATHLETE”的預購活動將於下週末為期三天舉辦！！
              </b>
              <span className="text-[.8rem] mt-3">
                Categories: 小資50萬裝潢方案
              </span>
              <button class="mt-4 relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 duration-500">
                <div class="relative inline-flex -translate-x-0 items-center transition group-hover:-translate-x-6">
                  <div class="absolute translate-x-0 opacity-100 transition group-hover:-translate-x-6 group-hover:opacity-0">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                    >
                      <path
                        d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <span class="pl-6">Hover</span>
                  <div class="absolute right-0 translate-x-12 opacity-0 transition group-hover:translate-x-6 group-hover:opacity-100">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                    >
                      <path
                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="section-page-navgation w-full max-w-[1100px] mx-auto px-4">
        <div className="flex flex-col md:flex-row py-6 justify-between items-center">
          <div className="tag border rounded-full px-4 py-1 text-[.85rem] mb-4 md:mb-0">
            Categories
          </div>
          <span className="text-gray-600">Look More</span>
        </div>

        <div className="border-t border-gray-600 flex flex-col md:flex-row justify-between py-5 items-start md:items-center gap-6">
          <span className="text-[.9rem] text-gray-800 leading-relaxed">
            結合品牌精神與市場洞察，量身打造具吸引力與記憶點的商業空間，
            <br className="hidden md:block" />
            助力品牌形象升級與業績成長。
          </span>

          <button className="group rotate-[-90deg] relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-neutral-950 font-medium text-neutral-200 shrink-0">
            <div className="translate-x-0 transition group-hover:translate-x-[300%]">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="absolute -translate-x-[300%] transition group-hover:translate-x-0">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </button>
        </div>
      </section>

      <section className="pb-[100px] ">
        <div className="title p-10">
          <h2 className="text-center text-[4vmin] font-bold">#unevensnap</h2>
          <Link
            target="_blank"
            href="https://www.facebook.com/profile.php?id=61550958051323&sk=photos"
            className="icon flex justify-center items-center"
          >
            <div className="w-[1.6rem]  bg-center bg-cover bg-no-repeat h-[1.6rem] bg-[url('https://www.uneven.jp/images/icon_ig.svg')]"></div>
            <b className="ml-3 font-normal">INSTGRAM</b>
          </Link>
        </div>
        <Marquee>
          <div className="flex items-center">
            <HoverItem
              imageUrl="hhttps://10per-komatsu.com/wp/wp-content/uploads/2024/09/house-in-miiri000-1.jpg"
              text="Built for Living."
              fontSize="2rem"
              fontWeight="300"
              color="#ffffff"
              lineHeight="50px"
            />

            <HoverItem
              imageUrl="https://10per-komatsu.com/wp/wp-content/uploads/2025/02/futabayama0000.jpg"
              text="LIMITED DROP"
              fontSize="1.6rem"
              fontWeight="600"
              color="#e6e6e6"
              lineHeight="40px"
            />
            <HoverItem
              imageUrl="https://10per-komatsu.com/wp/wp-content/uploads/2024/08/house-in-mochida_00-1.jpg"
              text="Built for Living."
              fontSize="2rem"
              fontWeight="300"
              color="#ffffff"
              lineHeight="50px"
            />

            <HoverItem
              imageUrl="https://10per-komatsu.com/wp/wp-content/uploads/2024/07/house-s_000-1.jpg"
              text="LIMITED DROP"
              fontSize="1.6rem"
              fontWeight="600"
              color="#e6e6e6"
              lineHeight="40px"
            />
            <HoverItem
              imageUrl="https://10per-komatsu.com/wp/wp-content/uploads/2024/06/house-in-mitaki000-2.jpg"
              text="Built for Living."
              fontSize="2rem"
              fontWeight="300"
              color="#ffffff"
              lineHeight="50px"
            />

            <HoverItem
              imageUrl="https://10per-komatsu.com/wp/wp-content/uploads/2024/02/houseY0000.jpg"
              text="LIMITED DROP"
              fontSize="1.6rem"
              fontWeight="600"
              color="#e6e6e6"
              lineHeight="40px"
            />

            <HoverItem
              imageUrl="https://10per-komatsu.com/wp/wp-content/uploads/2025/02/futabayama0000.jpg"
              text="LIMITED DROP"
              fontSize="1.6rem"
              fontWeight="600"
              color="#e6e6e6"
              lineHeight="40px"
            />
            <HoverItem
              imageUrl="https://10per-komatsu.com/wp/wp-content/uploads/2024/08/house-in-mochida_00-1.jpg"
              text="Built for Living."
              fontSize="2rem"
              fontWeight="300"
              color="#ffffff"
              lineHeight="50px"
            />

            <HoverItem
              imageUrl="https://10per-komatsu.com/wp/wp-content/uploads/2024/07/house-s_000-1.jpg"
              text="LIMITED DROP"
              fontSize="1.6rem"
              fontWeight="600"
              color="#e6e6e6"
              lineHeight="40px"
            />
            <HoverItem
              imageUrl="https://10per-komatsu.com/wp/wp-content/uploads/2024/06/house-in-mitaki000-2.jpg"
              text="Built for Living."
              fontSize="2rem"
              fontWeight="300"
              color="#ffffff"
              lineHeight="50px"
            />
          </div>
        </Marquee>
      </section>
    </div>
  );
};

export default ProjectPage;
