import { Card } from "@elements/Card";

const html = `
<html lang="en-US">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Azure Media Player</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

      <!--*****START OF Azure Media Player Scripts*****-->
        <!--Note: DO NOT USE the "latest" folder in production. Replace "latest" with a version number like "1.0.0"-->
        <!--EX:<script src="//amp.azure.net/libs/amp/1.0.0/azuremediaplayer.min.js"></script>-->
        <!--Azure Media Player versions can be queried from //aka.ms/ampchangelog-->
        <link href="//amp.azure.net/libs/amp/latest/skins/amp-default/azuremediaplayer.min.css" rel="stylesheet">
        <script src="//amp.azure.net/libs/amp/latest/azuremediaplayer.min.js"></script>
        <!--*****END OF Azure Media Player Scripts*****-->
</head>
<body>
    <h1>Sample: Clear</h1>
    <video id="azuremediaplayer" class="azuremediaplayer amp-default-skin amp-big-play-centered" tabindex="0"> </video>
    <script>
        var myOptions = {
            autoplay: true,
            controls: true,
            width: "640",
            height: "400",
            poster: ""
        };
        var myPlayer = amp("azuremediaplayer", myOptions);
        myPlayer.src([{ src: "https://mstest01-usea.streaming.media.azure.net/1cf9941a-15d7-456c-90c6-2a5c039a9b9e/sampleVideo.ism/manifest(format=m3u8-cmaf", type: "application/vnd.ms-sstr+xml" }, ]);
    </script>
</body>
</html>`;

export default function Home() {
  /** @Render */
  return (
    <Card>
      <div dangerouslySetInnerHTML={{ __html: html }} />
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
