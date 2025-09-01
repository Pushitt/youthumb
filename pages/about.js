import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <div style={styles.page}>
      <Head>
        <title>About | Downloaderyoutubethumbnails.com</title>
        <meta
          name="description"
          content="Learn about Downloaderyoutubethumbnails.com and how we provide educational tools to preview YouTube thumbnails."
        />
      </Head>

      <header style={styles.header}>
        <h1>About Us</h1>
      </header>

      <main style={styles.main}>
        <p>
          Downloaderyoutubethumbnails.com helps users preview and download YouTube video thumbnails for educational, personal, or fair use purposes.
          We focus on **safe, legal, and educational use** of YouTube content.
        </p>
        <p>
          Our goal is to provide a simple, fast, and free service for content creators, teachers, and students who need thumbnails for presentations or design projects.
        </p>
      </main>

      <footer style={styles.footer}>
        <Link href="/">Home</Link>
      </footer>
    </div>
  );
}

const styles = {
  page: { backgroundColor: "#e0f7fa", minHeight: "100vh", padding: "0", margin: "0" },
  header: { textAlign: "center", padding: "20px" },
  main: { maxWidth: "800px", margin: "20px auto", padding: "10px", lineHeight: "1.6", color: "#333" },
  footer: { textAlign: "center", padding: "20px", marginTop: "40px" },
};
