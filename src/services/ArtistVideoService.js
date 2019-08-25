import Api from './Api';

const getVideos = async (searchParam) => {
  const options = {
    params: {
      alt: 'json',
      key: 'AIzaSyDd_sfvQ4NASb-k0oKYAr_g9FZcQILtyKc',
      maxResults: 18,
      part: 'snippet',
      prettyPrint: true,
      order: 'relevance',
      q: searchParam,
      safeSearch: 'moderate',
      type: 'video',
      videoDuration: 'medium',
    },
  };
  const resp = (await Api.artistVideo.get('/search', options)).data;

  return resp;
};

export default {
  getVideos,
};
