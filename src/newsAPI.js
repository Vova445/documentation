import axios from 'axios';

const DEV_TO_API_URL = 'https://dev.to/api/articles';

export const fetchProgrammingNews = async () => {
  try {
    const response = await axios.get(DEV_TO_API_URL, {
      params: {
        tag: 'programming',
        per_page: 100, 
      },
    });

    const articles = response.data;
    return articles;
  } catch (error) {
    console.error('Error fetching programming articles from Dev.to:', error);
    return [];
  }
};
