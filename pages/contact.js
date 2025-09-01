import Head from "next/head";
import Link from "next/link";

export default function Contact() {
  return (
    <div style={styles.page}>
      <Head>
        <title>Contact | Downloaderyoutubethumbnails.com</title>
        <meta
          name="description"
          content="Contact Downloaderyoutubethumbnails.com for support, questions, or feedback about our YouTube thumbnail service."
        />
      </Head>

      <header style={styles.header}>
        <h1>Contact Us</h1>
      </header>

      <main style={styles.main}>
        <p>If you have any questions, suggestions, or feedback, please contact us:</p>
        <ul>
          <li>Email: support@downloaderyoutubethumbnails.com</li>
          <li>Message form: <strong>Coming soon</strong></li>
        </ul>
        <p>We aim to respond to all queries within 24-48 hours.</p>
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
