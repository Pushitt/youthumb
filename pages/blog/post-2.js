import Link from "next/link";

export default function Post2() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "0 auto" }}>
      <h1>How to Download Thumbnails Safely for Educational Use</h1>
      <p>
        Downloading YouTube thumbnails can be useful for learning, creating tutorials,
        or educational projects. However, you should always respect copyright
        and use the images only for fair use purposes.
      </p>
      <ul>
        <li>✅ Use thumbnails only for personal or educational projects.</li>
        <li>✅ Always credit the creator if you share them.</li>
        <li>✅ Avoid re-uploading thumbnails as your own content.</li>
      </ul>
      <p>
        By following these tips, you can stay safe and compliant while using thumbnails
        in your projects.
      </p>

      <Link href="/blog" legacyBehavior>
        <a style={{ color: "blue", textDecoration: "underline" }}>← Back to Blog Home</a>
      </Link>
    </div>
  );
}
