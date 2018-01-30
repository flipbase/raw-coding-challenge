## Coding assignment

### Prerequisites

  - Node.js
  - FFMPEG (only if you make it to the last test)

### Required knowledge

  - Basic understanding of Node.js and Javascript
  - You need to know how to use the command line

## The challenge

The coding assignment is simple and challenging at the same time:

**Build a REST API server that will pass all the `npm tests` scripts without using ANY third party packages**

### Why no third party packages?

We want to be able assess your actual coding skills and code design choices. The more code you write yourselve, the better we are able to judge your knowledge and skill as objective as possible. The more `npm` packages you use, the more of your solution will depend off your knowledge of how to implement this packages. Since we want to give everyone a fair chance to participate in this challenge, we have chosen to use as little npm packages as possible. 

There is 1 exception to this rule: all the packages that are already added to the package.json file.

**Important**: You are allowed to use Node.js core API packages like `http` or `path`. Every 'package' that you do not need to install using `npm` or `yarn` is allowed.

### Please take into consideration:

Quality is more important then quantity. Only fully implemented solution that will pass a test will be judged. It is very well possible that you are only able to pass the first two tests. Please, do not worry about this. We will taken into account the code that passed one or more of the tests. Additionaly, we will pay attention to what extend your code is ['DRY'](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)

### How to share your progress with us?

- Please fork this repository and push your contribution to the forked repo in your Github account
- Invite Ron (Github username: ronxjansen) to the repo if you are using a private repo

### Video

In the last two tests you will need a video which you can download and transcode. You can find the video here:

- https://s3.eu-central-1.amazonaws.com/flipbase-coding-challenge/bunny.mp4

### To pass the last test you need: FFMPEG

To pass the last test, you need to the download the approriate FFMPEG package locally to your computer. Please find different packages for Linux, Mac and Windows on this webpage: https://www.ffmpeg.org/download.html.

When you run your Node.js programm, please use the `FFMPEG_PATH` environment variable with the path to the location of the `FFMPEG` program. I downloaded FFMPEG into the ~/Downloads/ffmpeg-v3.4.1 and extracted the programm into the ~/Downloads folder.

    `FFMPEG_PATH=/Users/ronjansen/Downloads/ffmpeg npm test`

### What the heck is FFMPEG?

FFMPEG is a really cool tool which you can use to retrieve metadata from videos files and more importantly: to transcode videos. When you want to publish video's on the web (like we do), and you want your users to be able to view the videos regardless the browser they are using, then you need to have multiple video formats of the same video file. Internet Explorer only accepts MP4 videos; Firefox likes OGV videos and Chrome diggs Webm encoded videos. 

Important: If setting up FFMPEG on your computer, for what ever reason, takes you a lot of time, please drop us an email!

### How to use it

Encode the video using the `fluent-ffmpeg` NPM library (which is already added to package.json). Don't worry, you only need to use a fraction of this HUGE library. The whole REAMDE can you find at: https://github.com/fluent-ffmpeg/node-fluent-ffmpeg. Please be practical and scan the commands and options you need for this assignment. Please check the `ffmpeg.js` file in the `ffmpeg_example` directory how to do this.

## Deadline

Please share all your results no later then Thursday 17:00h with me!

**Good luck**