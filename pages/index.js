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

