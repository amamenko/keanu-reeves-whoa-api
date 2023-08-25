import fs from "fs";
import ffmpeg from "fluent-ffmpeg";

export const multiFormatVideo = (
  inputFileName: string,
  filmTitle: string,
  outputDir: string = "./output"
) => {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  } else {
    fs.rmSync(outputDir, { recursive: true, force: true });
    fs.mkdirSync(outputDir);
  }
  ffmpeg(inputFileName)
    .output(`./output/${filmTitle} (360p).mp4`)
    .audioCodec("copy")
    .videoCodec("libx264")
    .size("640x360")

    .output(`./output/${filmTitle} (480p).mp4`)
    .audioCodec("copy")
    .videoCodec("libx264")
    .size("854x480")

    .output(`./output/${filmTitle} (720p).mp4`)
    .audioCodec("copy")
    .videoCodec("libx264")
    .size("1280x720")

    .output(`./output/${filmTitle} (1080p).mp4`)
    .audioCodec("copy")
    .videoCodec("libx264")
    .size("1920x1080")

    .audioBitrate("128k")
    .audioChannels(2)
    .output(`./output/${filmTitle}.mp3`)
    .audioCodec("libmp3lame")

    .on("start", function (commandLine) {
      console.log("Spawned Ffmpeg with command: " + commandLine);
    })
    .on("progress", function (progress) {
      console.log("Processing: " + progress.percent + "% done");
    })
    .on("error", function (err, stdout, stderr) {
      console.log("Cannot process video: " + err.message);
    })
    .on("end", function (stdout, stderr) {
      console.log("Transcoding succeeded!");
    })
    .run();
};
