export default function Home() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>YouTube Thumbnail Downloader</h1>
      <p>
        Download high-quality thumbnails from any YouTube video for{" "}
        <strong>educational</strong>, <strong>research</strong>, or{" "}
        <strong>personal fair use</strong> purposes. 
      </p>

      <h2>How to Use</h2>
      <ol>
        <li>Copy the URL of a YouTube video.</li>
        <li>Paste it into the tool’s input field.</li>
        <li>Click "Get Thumbnail" to preview and download the image.</li>
      </ol>

      <p style={{ marginTop: "20px", fontSize: "14px", color: "gray" }}>
        Note: This tool is provided for fair use purposes only. Users are{" "}
        <strong>responsible</strong> for how they use thumbnails.
      </p>

      <footer style={{ marginTop: "30px" }}>
        <a href="/terms" style={{ marginRight: "15px" }}>Terms of Use</a>
        <a href="/disclaimer">Disclaimer</a>
      </footer>
    </div>
  );
}
