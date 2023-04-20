import { Container } from "@/elements/Container";
import { VideoPlayer } from "@/components/VideoPlayer";

export default function Home() {
  if (typeof window === "undefined") return null;
  const streamingUrl =
    "http://samplevideostream9000-mstest01-usea.streaming.media.azure.net";

  return (
    <main>
      <VideoPlayer url={streamingUrl} />
    </main>
  );
}
