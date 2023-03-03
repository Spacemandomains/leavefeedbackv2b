// This script is optional and can be used to dynamically load the video data from an API or JSON file

const videoData = [
  {
    title: "Video 1",
    url: "https://www.youtube.com/embed/YOUTUBE_VIDEO_ID_1"
  },
  {
    title: "Video 2",
    url: "https://www.youtube.com/embed/YOUTUBE_VIDEO_ID_2"
  },
  // Add more video objects here
];

const cardContainer = document.querySelector(".card-container");

videoData.sort((a, b) => {
  if (a.title < b.title) return -1
