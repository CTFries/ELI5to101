import Link from "next/link";
import { getPosts } from "../utils/utils";

const posts = getPosts();

const RecentPosts = () => {
  return (
    <details>
      <summary>Recent Posts</summary>
      <ul className="p-2">
        {posts.slice(0, 5).map((post) => (
          <li key={post.slug}>
            <a href={`/${post.slug}`} className="text-nowrap">
              {post.metadata.title} - {post.metadata.publishedAt}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
};

export function Navbar() {
  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {
              <li>
                <a>Recent Posts</a>
                <ul className="p-2">
                  {posts.slice(0, 5).map((post) => (
                    <li key={post.slug}>
                      <a href={`/${post.slug}`} className="text-nowrap">
                        {post.metadata.title} - {post.metadata.publishedAt}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            }
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          ELI5 to 101
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex"></div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">
          <li>
            <RecentPosts />
          </li>
        </ul>
      </div>
    </div>
  );
}