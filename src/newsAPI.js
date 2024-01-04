import axios from 'axios';

const wikipediaApiUrl = 'https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php';

export const fetchProgrammingNews = async (searchQuery) => {
  try {
    const response = await axios.get(wikipediaApiUrl, {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        srsearch: searchQuery,
      },
    });

    const searchResults = response.data.query.search;
    return searchResults;
  } catch (error) {
    console.error('Error fetching Wikipedia data:', error);
    return [];
  }
};
