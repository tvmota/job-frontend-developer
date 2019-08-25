import axios from 'axios';

const artistInfo = axios.create({
  baseURL: 'https://app.ticketmaster.com/discovery/v2',
  withCredentials: false,
});

const artistVideo = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  withCredentials: true,
});

export default {
  artistInfo,
  artistVideo,
};
