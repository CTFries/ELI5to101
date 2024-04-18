import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx";
import { formatDate, getPosts } from "app/utils/utils";
import { baseUrl } from "app/sitemap";

export async function generateStaticParams() {
  let posts = getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }) {
  let post = getPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    tags: tags,
    publishedAt: publishedTime,
    modifiedAt: modifiedAt,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Posts({ params }) {
  let post = getPosts().find((post) => post.slug === params.slug);
  if (!post) {
    notFound();
  }

  const tagElements = (() => {
    return post.metadata.tags.map((tag, index) => (
      <div className="badge badge-primary p-2 m-1" key={index}>
        {tag}
      </div>
    ));
  })();

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.modifiedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Chris Fries",
            },
          }),
        }}
      />
      <>
        <h1>{post.metadata.title}</h1>
        {post.metadata.tags ? tagElements : null}
        <div>
          <p>
            Published: {formatDate(post.metadata.publishedAt)}
            {post.metadata.publishedAt !== post.metadata.modifiedAt ? (
              <>
                <br />
                Updated: {formatDate(post.metadata.modifiedAt)}
              </>
            ) : null}
          </p>
        </div>
        <CustomMDX source={post.content} />
      </>
    </>
  );
}
