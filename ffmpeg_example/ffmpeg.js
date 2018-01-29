const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');

if (!process.env.FFMPEG_PATH)
  throw new Error('Whoops! You need to send the FFMPEG_PATH environment ' + 
    'variable before you run this test');

// Make sure the local FFMPEG package knows where the actual FFMPEG file is located
ffmpeg.setFfmpegPath(process.env.FFMPEG_PATH);

// Lets do some transcoding!
ffmpeg('./videos/bunny.mp4')  
  .outputOptions([
    '-acodec libvorbis',
    '-vcodec libvpx-vp9',
    '-quality realtime',
    '-cpu-used 7',
  ])
  .output('./videos/transcoded_bunny.webm')
  .on('start', () => {
    console.log('FFMPEG transcoding has started!')
  })
  .on('progress', function(progress) {
    console.log(progress.timemark + ' seconds of the video are transcoded');
  })
  .on('error', (err) => {
    console.error(err)
  })
  .on('end', () => {
    if (fs.existsSync('./videos/transcoded_bunny.webm'))
      return console.log('Yeah! You are good to go!')

    console.error('Whoopsie daisies; please check if you 1) downloaded FFMPEG ' +
     'to your computer and 2) if the FFMPEG_PATH is set accordingly.')
  })
  .run();