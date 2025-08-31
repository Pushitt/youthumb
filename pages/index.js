import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const [videoUrl, setVideoUrl] = useState("");
  const [thumbnails, setThumbnails] = useState([]);

  const showThumbnails = () => {
    const videoId = videoUrl.split("v=")[1]?.split("&")[0];
    if (!videoId) {
      alert("Invalid YouTube URL");
      return;
    }
    const thumbs = [
      `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
      `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
      `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
      `https://img.youtube.com/vi/${videoId}/default.jpg`,
    ];
    setThumbnails(thumbs);
  };

  return (
    <div>
      <Head>
        <title>Download YouTube Thumbnails | Educational Use</title>
        <meta
          name="description"
          content="Download YouTube thumbnails for educational and fair use purposes. Preview multiple sizes and use responsibly."
        />
        <meta
          name="keywords"
          content="YouTube thumbnails, download YouTube thumbnails, educational thumbnails, fair use, preview YouTube images"
        />
      </Head>

      {/* Header */}
      <header style={styles.header}>
        <h1>Download YouTube Thumbnails</h1>
        <p>
          Preview and download YouTube video thumbnails. Use only for
          educational, personal, or fair use purposes.
        </p>
      </header>

      {/* Input Section */}
      <section style={styles.inputSection}>
        <input
          type="text"
          placeholder="Paste YouTube link here"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          style={styles.input}
        />
        <button onClick={showThumbnails} style={styles.button}>
          Get Thumbnails
        </button>
      </section>

      {/* Thumbnails Grid */}
     <section style={styles.grid}>
  {thumbnails.map((src, index) => (
    <div key={src} style={styles.thumbnailContainer}>
      <a href={src} target="_blank" rel="noreferrer">
        <img src={src} alt={`Thumbnail ${index + 1}`} style={styles.thumbnail} />
      </a>
      <p style={styles.caption}>Thumbnail {index + 1}</p>
    </div>
  ))}
</section>
<section style={styles.contentSection}>
  <h2>Get Free YouTube Thumbnails</h2>
  <p>
    Get free thumbnail images of any YouTube videos in Full HD (1080), HD (720), SD, and also in small size.
    Currently supported formats: YouTube (HD, HQ, 1080p, 4K) videos.
  </p>

  <h3>What is the use of this YouTube Thumbnail Grabber website?</h3>
  <p>
    People use this YouTube thumbnail downloader to get thumbnails from any YouTube videos.
    They can use them in presentations, animation work, or many other activities.
  </p>

  <h3>How to use this YouTube thumbnail downloader website?</h3>
  <p>
    First, copy the YouTube video link whose thumbnail you want. Then paste that URL in the input box above.
    The moment you paste the link, it will automatically generate different sizes of thumbnails.
    Click on a thumbnail to download it. On Android, it saves automatically. On iPhone, you may need special steps.
  </p>

  <h3>Is it legal to download YouTube thumbnails?</h3>
  <p>
    Yes, it's 100% legal to download thumbnails. But since thumbnails and videos are copyrighted, you should ask for author permission before reusing them.
  </p>

  <h3>Compatibility</h3>
  <p>
    This website works well on almost all devices except iPhone (unless jailbroken). Works fine on Android, desktop, and laptops.
  </p>

  <h3>Copyright Risks</h3>
  <p>
    YouTube video thumbnails are copyrighted by the video owner. Always ask permission if you reuse it outside personal use.
  </p>

  <h3>SEO Considerations</h3>
  <p>
    Reusing YouTube thumbnails is generally not SEO friendly, because thumbnails are already indexed by Google.
    You can make them unique using editing software to reuse them safely.
  </p>

  <p style={{ fontSize: "12px", color: "#666", marginTop: "20px" }}>
    © 2025 Downloaderyoutubethumbnails.com - Educational & Fair Use
  </p>
</section>


      {/* Footer */}
     <footer style={styles.footer}>
  <Link href="/terms" style={styles.footerLink}>Terms of Use</Link> |{" "}
  <Link href="/disclaimer" style={styles.footerLink}>Disclaimer</Link>
  <p style={{ marginTop: "10px", fontSize: "14px" }}>
    &copy; 2025 Downloaderyoutubethumbnails.com | Educational & Fair Use
  </p>
</footer>


    </div>
  );
}

// Simple CSS-in-JS
const styles = {
  thumbnailContainer: {
  textAlign: "center",
  marginBottom: "20px",
},
caption: {
  fontSize: "14px",
  color: "#333",
  marginTop: "5px",
},
infoSection: {
  padding: "20px",
  backgroundColor: "#f9f9f9",
  marginTop: "30px",
},
footerButton: {
  display: "inline-block",
  padding: "10px 20px",
  margin: "5px",
  backgroundColor: "#28a745", // green button
  color: "#fff",
  borderRadius: "5px",
  textDecoration: "none",
  fontSize: "14px",
  textAlign: "center",
  cursor: "pointer",
  transition: "background-color 0.2s",
},

contentSection: {
  padding: "20px",
  backgroundColor: "#f9f9f9",
  marginTop: "30px",
  lineHeight: "1.6",
  color: "#333",
},
