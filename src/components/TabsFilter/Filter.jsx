import { useEffect } from "react";
import { motion } from "framer-motion";

const Filter = ({
  posts,
  setFiltered,
  activeCategory,
  setActiveCategory,
  categories,
}) => {
  useEffect(() => {
    if (activeCategory === "all") {
      setFiltered(posts);
      return;
    }
    const filteredPosts = posts.filter((post) =>
      post.categories_slug?.includes(activeCategory)
    );
    setFiltered(filteredPosts);
  }, [activeCategory, posts, setFiltered]);

  return (
    <div className="filter-container flex flex-wrap gap-4 my-4">
      <motion.button
        whileTap={{ scale: 0.9 }}
        className={`px-4 py-2 border rounded-full ${
          activeCategory === "all"
            ? "bg-black text-white"
            : "bg-white text-black"
        }`}
        onClick={() => setActiveCategory("all")}
      >
        全部
      </motion.button>

      {categories?.map((cat) => (
        <motion.button
          whileTap={{ scale: 0.9 }}
          key={cat.slug}
          className={`px-4 py-2 border rounded-full ${
            activeCategory === cat.slug
              ? "bg-black text-white"
              : "bg-white text-black"
          }`}
          onClick={() => setActiveCategory(cat.slug)}
        >
          {cat.name}
        </motion.button>
      ))}
    </div>
  );
};

export default Filter;
