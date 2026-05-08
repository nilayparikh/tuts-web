import type { BlogLinkedTaxonomy, BlogPost } from "@/data/blogs";

export function getVisibleBlogTags(
  post: BlogPost,
  limit = 2,
): BlogLinkedTaxonomy[] {
  const hiddenLabels = new Set([
    post.categoryTitle.toLowerCase(),
    post.subcategoryTitle.toLowerCase(),
  ]);

  return post.tagLinks
    .filter((tag) => !hiddenLabels.has(tag.label.toLowerCase()))
    .slice(0, limit);
}
