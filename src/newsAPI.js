import axios from 'axios';

const API_URL = 'http://localhost:3001/api/news';

export const fetchProgrammingNews = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching programming news:', error);
    return [];
  }
};
