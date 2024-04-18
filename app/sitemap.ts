import { getPosts } from "app/utils/utils";

export const baseUrl = "https://eli5to101.com";

export default async function sitemap() {
  let blogs = getPosts().map((post) => ({
    url: `${baseUrl}/${post.slug}`,
    lastModified: post.metadata.modifiedAt.split("T")[0],
  }));

  let routes = [""].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
