import Link from "next/link";

export default function Post1() {
  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>5 Tips to Make Better YouTube Thumbnails</h1>
      <p>
        Thumbnails are the first thing viewers see. Here are 5 tips to make them stand out:
      </p>
      <ol>
        <li>Use bright colors and contrast</li>
        <li>Include text that explains the video</li>
        <li>Focus on facial expressions</li>
        <li>Keep it simple, avoid clutter</li>
        <li>Use high-resolution images</li>
      </ol>
      <p>
        <Link href="/blog" style={{ color: "#0070f3" }}>← Back to Blog</Link>
      </p>
    </div>
  );
}
