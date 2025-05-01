import ProjectListClient from "./ProjectListClient";
import { Suspense } from "react";

async function getProjectData() {
  // 1. 直接抓全部分類
  const categoriesRes = await fetch(
    "https://starislandbaby.com/test/wp-json/wp/v2/categories?per_page=100",
    { next: { revalidate: 60 } }
  );
  const allCategories = await categoriesRes.json();

  // 2. 只保留你要的四個 slug
  const targetSlugs = [
    "commercial-public",
    "renovation-restoration",
    "residential-luxury",
    "special-offers",
  ];

  const categories = allCategories.filter((cat) =>
    targetSlugs.includes(cat.slug)
  );

  // 3. 抓所有文章，注意這邊不用 categories=某id，因為文章可能屬於不同分類
  const postsRes = await fetch(
    "https://starislandbaby.com/test/wp-json/wp/v2/posts?_embed&per_page=100",
    { next: { revalidate: 60 } }
  );
  const posts = await postsRes.json();

  return { posts, categories };
}

export default async function ProjectListPage() {
  const { posts, categories } = await getProjectData();

  return (
    <div>
      <Suspense fallback={<div></div>}>
        <ProjectListClient posts={posts} categories={categories} />
      </Suspense>
    </div>
  );
}
