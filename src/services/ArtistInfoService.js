import Api from './Api';

const findArtists = async (searchTerm) => {
  const options = {
    params: {
      apikey: 'q2GNlCrgGo6c8uej3Ib4MsbAC2KIr5nG',
      keyword: searchTerm,
      sort: 'relevance,desc',
      size: 10,
      source: 'ticketmaster,universe,frontgate,tmr',
    },
  };
  const resp = (await Api.artistInfo.get('/attractions.json', options)).data;

  return resp;
};

export default {
  findArtists,
};
