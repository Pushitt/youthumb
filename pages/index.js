import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>YouTube Thumbnail Downloader - HD Images</title>
        <meta name="description" content="Free tool to download YouTube thumbnails in HD. For fair use, educational or research purposes only." />
        <meta name="keywords" content="YouTube thumbnail downloader, HD thumbnail, download YouTube thumbnail, online YouTube thumbnail saver, fair use, educational thumbnail tool" />
      </Head>

      <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
        <h1>YouTube Thumbnail Downloader</h1>
        <p>Download high-quality thumbnails from any YouTube video for <strong>educational, research, or personal use</strong>. This tool is simple, free, and fast.</p>

        <h2>How to Use</h2>
        <ol>
          <li>Copy the URL of a YouTube video.</li>
          <li>Paste it into the tool’s input field.</li>
          <li>Click "Get Thumbnail" to preview and download the image.</li>
        </ol>

        <p style={{ marginTop: '1rem' }}>
          <strong>Note:</strong> This tool is provided for fair use purposes. We do not support copyright infringement.
        </p>

        <p style={{ marginTop: '2rem' }}>
          <Link href="/terms">Terms of Use</Link> | <Link href="/disclaimer">Disclaimer</Link>
        </p>
      </main>
    </>
  );
}

