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
        {thumbnails.map((src) => (
          <a href={src} target="_blank" key={src} rel="noreferrer">
            <img src={src} alt="Thumbnail" style={styles.thumbnail} />
          </a>
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
  header: {
    textAlign: "center",
    padding: "30px 20px",
    backgroundColor: "#f7f7f7",
  },
  inputSection: {
    textAlign: "center",
    margin: "20px 0",
  },
  input: {
    padding: "10px",
    width: "60%",
    maxWidth: "400px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    padding: "10px 20px",
    marginLeft: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#28a745",
    color: "#fff",
    cursor: "pointer",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "15px",
    padding: "20px",
    justifyItems: "center",
  },
  thumbnail: {
    width: "100%",
    borderRadius: "5px",
    border: "1px solid #ccc",
    cursor: "pointer",
    transition: "transform 0.2s",
  },
  footer: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#f7f7f7",
    marginTop: "40px",
  },
  footerLink: {
    color: "#000",
    textDecoration: "none",
    margin: "0 5px",
  },
};
