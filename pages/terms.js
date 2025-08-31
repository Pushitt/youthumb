import Head from "next/head";
import Link from "next/link";

export default function Terms() {
  return (
    <div style={{ padding: "20px" }}>
      <Head>
        <title>Terms of Use | Downloaderyoutubethumbnails.com</title>
      </Head>

      <h1>Terms of Use</h1>
      <p>
        By using this website, you agree to use the downloaded thumbnails only
        for personal, educational, or fair use purposes. You are solely
        responsible for how you use the content. The site does not encourage
        or promote copyright infringement.
      </p>

      <Link href="/">Back to Home</Link>
    </div>
  );
}
