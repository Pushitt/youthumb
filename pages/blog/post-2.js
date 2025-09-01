import Link from "next/link";

export default function Post2() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Second Blog Post</h1>
      <p>
        Welcome to the second blog post! Here you can share tips, updates, or
        any content you like. Keep it informative and engaging for your
        readers.
      </p>
      <p>
        You can add more paragraphs, images, or even embed videos if you
        want.
      </p>
      <Link href="/blog" style={{ color: "blue", textDecoration: "underline" }}>
        ← Back to Blog Home
      </Link>
    </div>
  );
}
