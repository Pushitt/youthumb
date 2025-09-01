import Link from "next/link";

export default function Blog() {
  const posts = [
    { title: "5 Tips to Make Better YouTube Thumbnails", slug: "post1" },
    { title: "How to Download Thumbnails Safely for Educational Use", slug: "post2" },
  ];

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Blog for YouTubers</h1>
      <p>Tips, tricks, and guides to help YouTubers and content creators.</p>

      <ul>
        {posts.map((post) => (
          <li key={post.slug} style={{ margin: "15px 0" }}>
            <Link href={`/blog/${post.slug}`} legacyBehavior>
              <a style={{ color: "#0070f3", textDecoration: "underline" }}>
                {post.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
