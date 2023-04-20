import dynamic from "next/dynamic";
import { Card } from "@elements/Card";

const DynamicMediaPlayer = dynamic(
  () => import("../components/MediaPlayer").then((mod) => mod.MediaPlayer),
  {
    ssr: false,
  }
);

export default function Home() {
  /** @Render */
  return (
    <Card>
      <DynamicMediaPlayer />
      <Card.Footer>
        <p>
          If you are seeing this video, then it has been successfully uploaded
          to an Azure Media Service, encoded, had a streaming url created for it
          that this Azure Media Player is now accessing.
        </p>
      </Card.Footer>
    </Card>
  );
}
