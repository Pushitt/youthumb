import Head from "next/head";
import Link from "next/link";

export default function Privacy() {
  return (
    <div style={styles.page}>
      <Head>
        <title>Privacy Policy | Downloaderyoutubethumbnails.com</title>
        <meta
          name="description"
          content="Read the Privacy Policy of Downloaderyoutubethumbnails.com to understand how we handle data and respect user privacy."
        />
      </Head>

      <header style={styles.header}>
        <h1>Privacy Policy</h1>
      </header>

      <main style={styles.main}>
        <p>
          At Downloaderyoutubethumbnails.com, we respect your privacy. We do not collect personal information unless voluntarily provided (like via contact form or newsletter).
        </p>
        <p>
          Our website may use cookies to enhance the user experience, but no personal data is sold or shared with third parties.
        </p>
        <p>
          By using our website, you agree to use it for educational, personal, or fair use purposes only.
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
