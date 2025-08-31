import Head from "next/head";
import Link from "next/link";

export default function Disclaimer() {
  return (
    <div style={{ padding: "20px" }}>
      <Head>
        <title>Disclaimer | Downloaderyoutubethumbnails.com</title>
      </Head>

      <h1>Disclaimer</h1>
      <p>
        This site provides YouTube thumbnail images for **educational, personal,
        or fair use purposes only**. Users are responsible for any legal or
        copyright issues resulting from the use of downloaded thumbnails.
      </p>

      <Link href="/">Back to Home</Link>
    </div>
  );
}
